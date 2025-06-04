// components/HeroSlider.tsx
// import React from 'react';

// export type Slide = {
//   id: number;
//   title: string;
//   imageUrl: string | null;
// };

// type Props = {
//   slides: Slide[];
// };

// export default function HeroSlider({ slides }: Props) {
//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       {slides.map((slide) => (
//         <div key={slide.id} className="relative inset-0 animate-fade w-full aspect-[16/9]">
//           {slide.imageUrl && (
//             <img
//               src={slide.imageUrl}
//               alt={slide.title}
//               className="object-cover"
//             />
//           )}
//           <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
//             <h2>{slide.title}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export type Slide = {
  id: number;
  title: string;
  imageUrl: string | null;
};

type Props = {
  slides: Slide[];
};

export default function HeroSlider({ slides }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-screen h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {slide.imageUrl && (
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-xl max-w-[80%]">
            <h2 className="text-xl font-semibold">{slide.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

