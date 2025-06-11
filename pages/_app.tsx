import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Subfooter from '../components/Subfooter';
import Footer from '../components/Footer';
import '@/styles/globals.css';
import { fetchLogoUrl } from '@/lib/api';
import { DefaultSeo } from 'next-seo';
import SEO from '@/lib/seo.config';


function MyApp({ Component, pageProps }: AppProps) {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchLogoUrl().then(setLogoUrl);
  }, []);

  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <main className="min-h-[calc(100vh-5rem)]">
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </main>
      <Subfooter />
      <Footer />
    </>
  );
}

export default MyApp;
