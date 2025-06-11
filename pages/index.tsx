// pages/index.tsx
import { GetStaticProps } from 'next';
import parse from 'html-react-parser';
import HeroMixed from '@/components/HeroMixed';
import { fetchBanners, Slide } from '@/lib/api';

type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
};

type Props = {
  posts: Post[];
  slides: Slide[];
};
// export default function Home({ posts, slides }: Props) {
//   return (
//     <main className="max-w-4xl mx-auto py-10">
//       <HeroMixed slides={slides} />

//       <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>

//       {posts && posts.length > 0 ? (
//         posts.map((post) => (
//           <div key={post.id} className="mb-8 border-b pb-4">
//             <h2 className="text-xl text-blue-600">{parse(post.title.rendered)}</h2>
//             <div className="text-gray-700">{parse(post.excerpt.rendered)}</div>
//           </div>
//         ))
//       ) : (
//         <p>No posts found.</p>
//       )}
//     </main>
//   );
// }

export default function Home({ posts, slides }: Props) {
  return (
    <>
      {/* Full-width Slider */}
      <HeroMixed slides={slides} />

      {/* Centered Content */}
      <main className="max-w-4xl mx-auto py-10">
        <div className='mt-20 mb-20'>
          <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>

          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="mb-8 border-b pb-4">
                <h2 className="text-xl text-blue-600">
                  {parse(post.title.rendered)}
                </h2>
                <div className="text-gray-700">
                  {parse(post.excerpt.rendered)}
                </div>
              </div>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </main>
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  try {
    const postsRes = await fetch('http://localhost/headlesswp/wp-json/wp/v2/posts');
    const posts: Post[] = await postsRes.json();
    const slides = await fetchBanners();

    return {
      props: {
        posts: posts || [],
        slides: slides || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Fetch error:', error);
    return {
      props: {
        posts: [],
        slides: [],
      },
    };
  }
};
