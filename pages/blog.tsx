// pages/blog.tsx
import { GetStaticProps } from 'next';
import parse from 'html-react-parser';

type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
};

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="mb-8 border-b pb-4">
            <h2 className="text-xl text-blue-600">{parse(post.title.rendered)}</h2>
            <div className="text-gray-700">{parse(post.excerpt.rendered)}</div>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const data = await res.json();

  return {
    props: {
      posts: data || [],
    },
    revalidate: 60,
  };
};
