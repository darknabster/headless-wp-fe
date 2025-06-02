// components/VideoBanner.tsx
export default function VideoBanner() {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/banners/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}