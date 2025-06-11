// pages/services.tsx
import { GetStaticProps } from 'next';
import parse from 'html-react-parser';

export default function Services({ content }: { content: string }) {
  return (
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <div className="prose">{parse(content)}</div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=services`);
  const data = await res.json();
  const page = data[0];

  return {
    props: {
      content: page?.content?.rendered || '',
    },
    revalidate: 60,
  };
};
