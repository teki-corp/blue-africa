import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Gallery4, Gallery4Props } from "@/components/ui/gallery4"
import Image from "next/image";
import Link from "next/link";

// Decorative Icons
function WindTurbineIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2v20M12 2l4 4M12 2L8 6M12 22l4-4M12 22l-4-4M12 12l4-4M12 12l-4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M17.66 6.34l-1.41-1.41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WindIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="currentColor"
      />
      <path
        d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
        fill="currentColor"
      />
    </svg>
  );
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

interface GalleryData {
  title: string;
  description: string;
  items: GalleryItem[];
}



interface ImpactSectionProps {
  impactData: Gallery4Props;
}

function ImpactSection({ impactData }: ImpactSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
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
