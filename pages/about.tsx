// pages/about.tsx
import { GetStaticProps } from 'next';
import parse from 'html-react-parser';

export default function About({ content }: { content: string }) {
  return (
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose">{parse(content)}</div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost/headlesswp/wp-json/wp/v2/pages?slug=about');
  const data = await res.json();
  const page = data[0];

  return {
    props: {
      content: page?.content?.rendered || '',
    },
    revalidate: 60,
  };
};
