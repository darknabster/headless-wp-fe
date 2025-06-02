// components/HeroMixed.tsx
import HeroSlider from '@/components/HeroSlider';
import VideoBanner from './VideoBanner';
import { Slide } from '@/lib/api';

type Props = {
  slides: Slide[];
};

export default function HeroMixed({ slides }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="h-[60vh]">
        <HeroSlider slides={slides} />
      </div>
      <div className="h-[60vh]">
        <VideoBanner />
      </div>
    </div>
  );
}
