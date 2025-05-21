import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center bg-[url('/cityscape.jpg')] bg-cover bg-center relative before:absolute before:inset-0 before:bg-black/60"
    >
      <div className="relative z-10 space-y-6 px-4">
        <Image
          src="/logo.png"
          alt="HapSTR"
          width={120}
          height={120}
          priority
          className="mx-auto"
        />
        <h1 className="text-5xl md:text-7xl font-bold">Discover Homes in AR</h1>
        <p className="text-xl md:text-2xl opacity-80">
          Interior Transparency · AR Signage
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="https://apps.apple.com/tw/app/hapstr-v2/id6461165079?l=en-GB"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/app-store.png"
              alt="Download on App Store"
              width={160}
              height={48}
              priority
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.hapstr.app"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/google-play.png"
              alt="Get it on Google Play"
              width={160}
              height={48}
              priority
            />
          </a>
        </div>
      </div>
    </section>
  );
}
