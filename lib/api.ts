export async function fetchLogoUrl(): Promise<string | null> {
  try {
    const res = await fetch('http://localhost/headlesswp/wp-json/custom/v1/site-logo');
    const data = await res.json();
    return data.logo_url || null;
  } catch (error) {
    console.error('Failed to fetch logo:', error);
    return null;
  }
}
export async function getHeroBanners() {
  const res = await fetch('http://localhost/headlesswp/wp-json/wp/v2/pages?slug=home&_embed');
  const data = await res.json();

  const fields = data[0]?.acf?.hero_slider || [];

  return fields.map((item: any) => ({
    imageUrl: item.image.url,
    caption: item.caption || '',
  }));
}

// lib/api.ts

export type Slide = {
  id: number;
  title: string;
  imageUrl: string | null;
};

export async function fetchBanners(): Promise<Slide[]> {
  const res = await fetch('http://localhost/headlesswp/wp-json/wp/v2/banner');
  const banners = await res.json();

  return banners
    .map((banner: any) => ({
      id: banner.id,
      title: banner.title?.rendered || '',
      imageUrl: banner.featured_media_url || null, // ← prevent `undefined`
    }))
    .filter((banner: Slide) => banner.imageUrl !== null); // ← optional: skip null images
}



