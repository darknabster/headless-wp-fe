// pages/portfolio/index.tsx
import { GetStaticProps } from 'next';
import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';

type PortfolioItem = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: [{ source_url: string }];
  };
};

export default function PortfolioList({ items }: { items: PortfolioItem[] }) {
  return (
    <main className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">My Work</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {items.map((item) => {
          const img = item._embedded?.['wp:featuredmedia']?.[0]?.source_url;

          return (
            <Link key={item.id} href={`/portfolio/${item.slug}`}>
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                {img && (
                  <Image
                    src={img}
                    alt={item.title.rendered}
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {parse(item.title.rendered)}
                  </h2>
                  <p className="text-gray-600">{parse(item.excerpt.rendered)}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio?_embed`);
  const items: PortfolioItem[] = await res.json();

  return {
    props: {
      items,
    },
    revalidate: 60, // Regenerate every 60 seconds
  };
};

