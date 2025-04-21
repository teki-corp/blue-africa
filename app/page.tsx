"use client";

import {
  Blocks,
  CodeXml,
  CreditCard,
  Handshake,
  Scale,
  Webhook,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/ui/footer";
import { ImpactSection } from "@/components/impact-section";
import { Feature } from "@/components/ui/feature-with-advantages";
import { AccordionSection } from "@/components/accordion-section";
import { Partners } from "@/components/partners";
import { TargetsSection } from "@/components/targets-section";
import { CTASection } from "@/components/cta-section";
import { CarouselGallery } from "@/components/ui/carousel-gallery";
import { useRef, useEffect } from "react";
import HeroSection from "@/components/hero-section";

const impactData = {
  title: "Our Blue Economy Impact",
  description:
    "Discover how Blue Capital is transforming coastal economies across Africa through sustainable ocean resource management, marine conservation, and community empowerment. These success stories showcase our commitment to building a thriving blue economy.",
  items: [
    {
      id: "sustainable-fishing",
      title: "Sustainable Fishing Initiatives",
      description:
        "Supporting local fishing communities with modern sustainable practices, advanced equipment, and market access, ensuring both marine conservation and economic growth.",
      href: "#",
      image: "https://images.unsplash.com/photo-1582623838120-455da222cdc7?q=80&w=1080",
    },
    {
      id: "marine-conservation",
      title: "Marine Conservation",
      description:
        "Protecting critical marine ecosystems through innovative conservation projects, research initiatives, and community-led preservation efforts.",
      href: "#",
      image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=1080",
    },
    {
      id: "aquaculture",
      title: "Sustainable Aquaculture",
      description:
        "Investing in responsible aquaculture projects that create jobs, ensure food security, and maintain environmental balance in coastal areas.",
      href: "#",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1080",
    },
    {
      id: "coastal-tourism",
      title: "Eco-Tourism Development",
      description:
        "Developing sustainable coastal tourism initiatives that preserve local culture, protect marine environments, and generate economic opportunities.",
      href: "#",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1080",
    },
    {
      id: "port-modernization",
      title: "Port Infrastructure Modernization",
      description:
        "Modernizing port facilities with green technologies and efficient systems to reduce environmental impact while boosting maritime trade.",
      href: "#",
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1080",
    },
    {
      id: "renewable-marine",
      title: "Marine Renewable Energy",
      description:
        "Harnessing ocean energy through innovative technologies while ensuring minimal impact on marine ecosystems and maximum benefit to coastal communities.",
      href: "#",
      image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1080",
    },
  ],
};

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <main className="flex w-full flex-col items-center">
        {/* Video Background Hero */}
        <section className="relative w-full min-h-screen">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-black/5 z-10" />
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="object-cover w-full h-full"
              poster="/images/video-poster.jpg"
            >
              <source 
                src="https://9w7tupemt2.ufs.sh/f/6NT7Vh3m4UA3NyrceIOfbaR4SDedsFTr0Pkcfq9Kzj7XHtgi" 
                type="video/mp4" 
              />
            </video>
          </div>
          <div className="relative z-20 container mx-auto p-8">
            <HeroSection />
          </div>
        </section>

        {/* Original Hero Section - can be removed if redundant */}
        <section className="relative w-full bg-gradient-to-b from-blue-50 to-white px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Blue Capital
              <span className="text-blue-600"> Ocean Innovation</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
              We invest in sustainable ocean resources and coastal communities across Africa, 
              driving economic growth through innovative marine projects, sustainable fishing practices, 
              and ecosystem conservation while ensuring social equity and environmental protection.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="#contact"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Partner With Us
              </Link>
              <Link
                href="#projects"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full bg-white">
          <div className="w-full">
            <CarouselGallery />
          </div>
        </section>

        {/* Impact Section */}
        <section className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
          <ImpactSection impactData={impactData} />
        </section>

        {/* Features Section */}
        <section className="w-full bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
          <Feature />
        </section>

        {/* Investment Process */}
        <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
          <AccordionSection />
        </section>

        {/* Partners Section */}
        <section className="w-full bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
          <Partners />
        </section>

        {/* Impact Targets */}
        <section className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
          <TargetsSection />
        </section>

        {/* CTA Section */}
        <section className="w-full bg-blue-600 px-4 py-24 sm:px-6 lg:px-8">
          <CTASection />
        </section>
      </main>

      <Footer
        className="w-full bg-gray-900 px-4 py-12 text-white sm:px-6 lg:px-8"
        brand={{
          name: "Blue Capital",
          description: "Investing in Africa's sustainable future.",
        }}
        socialLinks={[
          {
            name: "Twitter",
            href: "https://x.com/bluecapital",
          },
          {
            name: "LinkedIn",
            href: "#",
          },
          {
            name: "Instagram",
            href: "#",
          },
        ]}
        columns={[
          {
            title: "Company",
            links: [
              {
                name: "About Us",
                Icon: Blocks,
                href: "#about",
              },
              {
                name: "Our Impact",
                Icon: CreditCard,
                href: "#impact",
              },
              {
                name: "Investment Process",
                Icon: Webhook,
                href: "#process",
              },
              {
                name: "Contact",
                Icon: CodeXml,
                href: "#contact",
              },
            ],
          },
          {
            title: "Resources",
            links: [
              {
                name: "Case Studies",
                Icon: Scale,
                href: "#case-studies",
              },
              {
                name: "News & Insights",
                Icon: Handshake,
                href: "#news",
              },
              {
                name: "Investment Criteria",
                Icon: Scale,
                href: "#criteria",
              },
            ],
          },
          {
            title: "Legal",
            links: [
              {
                name: "Privacy Policy",
                Icon: Scale,
                href: "/legal/privacy",
              },
              {
                name: "Terms of Service",
                Icon: Handshake,
                href: "/legal",
              },
            ],
          },
        ]}
        copyright="Blue Capital © 2025"
      />
    </div>
  );
}
