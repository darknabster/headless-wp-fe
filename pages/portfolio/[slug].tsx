import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import Image from 'next/image';

type PortfolioItem = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: [{ source_url: string }];
  };
};

export default function PortfolioDetail({ item }: { item: PortfolioItem }) {
  const router = useRouter();
  if (router.isFallback) return <p>Loading...</p>;

  const imageUrl = item._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">{parse(item.title.rendered)}</h1>

      {imageUrl && (
        <Image
          src={imageUrl}
          alt={item.title.rendered}
          width={1200}
          height={600}
          className="rounded-xl mb-6"
        />
      )}

      <article className="prose">{parse(item.content.rendered)}</article>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost/headlesswp/wp-json/wp/v2/portfolio');
  const items: PortfolioItem[] = await res.json();

  const paths = items.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const res = await fetch(
    `http://localhost/headlesswp/wp-json/wp/v2/portfolio?slug=${slug}&_embed`
  );
  const data = await res.json();

  if (!data || !data.length) {
    return { notFound: true };
  }

  return {
    props: {
      item: data[0],
    },
    revalidate: 60,
  };
};
