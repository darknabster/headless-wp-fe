// pages/works.tsx
import { GetStaticProps } from 'next';
import parse from 'html-react-parser';

type Work = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
};

export default function Works({ works }: { works: Work[] }) {
  return (
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Our Work</h1>
      {works.length > 0 ? (
        works.map((work) => (
          <div key={work.id} className="mb-8 border-b pb-4">
            <h2 className="text-xl text-blue-600">{parse(work.title.rendered)}</h2>
            <div className="text-gray-700">{parse(work.excerpt.rendered)}</div>
          </div>
        ))
      ) : (
        <p>No works found.</p>
      )}
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost/headlesswp/wp-json/wp/v2/works');
  const data = await res.json();

  return {
    props: {
      works: data || [],
    },
    revalidate: 60,
  };
};
