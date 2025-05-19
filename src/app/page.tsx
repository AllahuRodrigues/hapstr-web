import Nav           from '@/components/Nav';
import Hero          from '@/components/Hero';
import Timeline      from '@/components/Timeline';
import VideoEmbed    from '@/components/VideoEmbed';
import Pricing       from '@/components/Pricing';
import Contact       from '@/components/Contact';

export default function Landing() {
  return (
    <>
      <Nav />
      <Hero />
      <Timeline />     {/* scroll-triggered steps */}
      <VideoEmbed />   {/* immersive autoplay video */}
      <Pricing />
      <Contact />
    </>
  );
}
