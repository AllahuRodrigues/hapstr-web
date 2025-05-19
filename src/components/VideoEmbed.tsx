'use client';

export default function VideoEmbed() {
  return (
    <section id="demo" className="py-40 bg-black px-4">
      <h2 className="text-3xl font-bold text-center mb-8">HapSTR In Action</h2>
      <div className="relative aspect-video max-w-5xl mx-auto rounded-lg
          overflow-hidden shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/0XzNxhLE05U?controls=0&rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1&loop=1"
          title="HapSTR Demo"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </section>
  );
}
