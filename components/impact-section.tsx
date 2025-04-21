import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";



interface GalleryItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

interface ImpactSectionProps {
  impactData: {
    title: string;
    description: string;
    items: GalleryItem[];
  };
}

function ImpactSection({ impactData }: ImpactSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <section className="w-full py-16 relative overflow-hidden" ref={containerRef}>
      {/* Background image */}
      <div className="fixed inset-0 pointer-events-none">
        <Image
          src="/pexels-daydream-753072845-30606571.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Content */}
      <div className="container px-8 relative">
        <div className="mx-auto max-w-screen-lg">
          <div className="flex justify-center gap-8 mb-8">
            <Image
              src="/United_Nations_Environment_Programme_Logo.svg.png"
              alt="UN Environment Programme"
              width={100}
              height={100}
              className="object-contain"
            />
            <Image
              src="/Flag_of_UNESCO.svg.png"
              alt="UNESCO"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          <h2 className="text-3xl font-bold text-center mb-4">{impactData.title}</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            {impactData.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactData.items.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group relative overflow-hidden rounded-lg h-[400px] block"
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ImpactSection };
