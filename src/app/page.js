import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[90vh] overflow-hidden">
          <img
            src="/images/banners/hero-banner.jpeg"
            alt="Home Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="text-white text-2xl md:text-4xl font-bold animate-fadeIn opacity-0">
              Empowering Ideas
            </span>
            <span className="text-white text-3xl md:text-8xl font-bold animate-fadeIn opacity-0 delay-300">
              Through Innovation
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
