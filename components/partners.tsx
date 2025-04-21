"use client";

import React, { type SVGProps } from "react";
import Image from "next/image";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";

// Replace all existing icon components with new ones that use public images
function UNEPLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="relative w-[200px] h-[100px]">
      <Image
        src="/United_Nations_Environment_Programme_Logo.svg.png"
        alt="UNEP Logo"
        width={200}
        height={100}
        className="object-contain"
      />
    </div>
  );
}

function UNESCOLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="relative w-[200px] h-[100px]">
      <Image
        src="/Flag_of_UNESCO.svg.png"
        alt="UNESCO Logo"
        width={200}
        height={100}
        className="object-contain"
      />
    </div>
  );
}

function KenyaLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="relative w-[200px] h-[100px]">
      <Image
        src="/Coat_of_arms_of_Kenya_(Official).svg"
        alt="Kenya Coat of Arms"
        width={200}
        height={100}
        className="object-contain"
      />
    </div>
  );
}

// Circular text SVGs for other partners
function CircularPartnerLogo({ text }: { text: string }) {
  return (
    <svg viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="14"
        fill="currentColor"
        fontWeight="bold"
      >
        {text}
      </text>
    </svg>
  );
}

// Update the allLogos array
const allLogos = [
  { name: "UNEP", id: 1, img: UNEPLogo },
  { name: "UNESCO", id: 2, img: UNESCOLogo },
  { name: "Kenya", id: 3, img: KenyaLogo },
  { 
    name: "AfDB", 
    id: 4, 
    img: (props: SVGProps<SVGSVGElement>) => <CircularPartnerLogo text="AfDB" {...props} /> 
  },
  { 
    name: "GCF", 
    id: 5, 
    img: (props: SVGProps<SVGSVGElement>) => <CircularPartnerLogo text="GCF" {...props} /> 
  },
  { 
    name: "WWF", 
    id: 6, 
    img: (props: SVGProps<SVGSVGElement>) => <CircularPartnerLogo text="WWF" {...props} /> 
  },
  { 
    name: "UNDP", 
    id: 7, 
    img: (props: SVGProps<SVGSVGElement>) => <CircularPartnerLogo text="UNDP" {...props} /> 
  },
  { 
    name: "AFREXIMBANK", 
    id: 8, 
    img: (props: SVGProps<SVGSVGElement>) => <CircularPartnerLogo text="AFREXIM" {...props} /> 
  }
];

export function Partners() {
  return (
    <section className="w-full bg-muted/40 relative overflow-hidden">
      {/* Decorative blue elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container py-6 lg:py-8 px-8 relative">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-16">
          <div className="text-center space-y-6">
            <GradientHeading variant="secondary" className="mb-2" size="lg">
              Our Partners
            </GradientHeading>
            <GradientHeading size="xxl" variant="default" className="relative">
              Working Together for a Sustainable Future
            </GradientHeading>
          </div>

          <LogoCarousel 
            columnCount={3} 
            logos={allLogos}
            className="w-full max-w-4xl mx-auto flex justify-center items-center filter hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
          /> 
        </div>
      </div>
    </section>
  );
}
