"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function CarouselGallery() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Configuration options
  const autoPlay = true;
  const autoPlayInterval = 5000;
  const showThumbnails = true;

  // Static images array with blue economy themed images
  const images: GalleryImage[] = [
    {
      src: "/pexels-kelly-1179532-2800845.jpg",
      alt: "Environmental sustainability image by Kelly",
      width: 1920,
      height: 1080,
    },
    {
      src: "/pexels-tomfisk-1605268.jpg",
      alt: "Environmental project by Tom Fisk",
      width: 1920,
      height: 1080,
    },
    {
      src: "/pexels-cottonbro-4828231.jpg",
      alt: "Sustainable development image by Cottonbro",
      width: 1920,
      height: 1080,
    },
    {
      src: "/pexels-kirill-bai-34484890-20304306.jpg",
      alt: "Environmental conservation by Kirill Bai",
      width: 1920,
      height: 1080,
    },
    {
      src: "/pexels-daydream-753072845-30606571.jpg",
      alt: "Sustainable future by Daydream",
      width: 1920,
      height: 1080,
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto play functionality
  React.useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, nextSlide]);

  // Keyboard navigation for main carousel
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="w-full">
      {/* Main carousel */}
      <div className="relative overflow-hidden">
        <div className="relative aspect-video w-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={`slide-${index}`}
              className={cn(
                "absolute inset-0 transform transition-all duration-500 ease-in-out",
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : index < currentIndex
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0",
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-full w-full object-cover"
                priority={index === 0}
                quality={85}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
                  '<svg width="400" height="225" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="225" fill="#2563eb"/></svg>'
                ).toString('base64')}`}
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <Button
          size="icon"
          className="absolute top-1/2 left-2 -translate-y-1/2"
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>

        <Button
          size="icon"
          className="absolute top-1/2 right-2 -translate-y-1/2"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </Button>

        {/* Caption */}
        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm text-white">
          <div className="flex justify-between items-center">
            <span>{images[currentIndex].alt}</span>
            <Link 
              href="/legal" 
              className="text-xs text-white/70 hover:text-white hover:underline"
            >
              Legal & Credits
            </Link>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      {showThumbnails && (
        <div className="mt-4 flex gap-2 overflow-x-auto px-2 py-2">
          {images.map((image, index) => (
            <button
              key={`thumb-${index}`}
              className={cn(
                "relative h-20 w-20 flex-shrink-0 transition-all duration-200",
                index === currentIndex
                  ? "ring-primary ring-2 ring-offset-2"
                  : "opacity-70 hover:opacity-100",
              )}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="h-full w-full rounded-sm object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 