"use client";

import { Icons } from "@/components/ui/icons";

import { Hero } from "./ui/hero";
import { ProjectStatusCard } from "./ui/expandable-card";

function HeroSection() {
  return (
    <Hero
      pill={{
        text: "New! Partnership Program with Ministry of Mining and Blue Economy",
        href: "/docs",
        icon: <Icons.logo className="h-4 w-4" />,
        variant: "default",
        size: "md",
      }}
      content={{
        title: "Financing Africa's Green ",
        titleHighlight: "Transition",
        description:
          "We connect renewable energy projects with global investors to power the continent's transition to clean energy, creating jobs and fostering economic growth while combating climate change.",
        primaryAction: {
          href: "/docs/getting-started",
          text: "Become a Partner",
          icon: <Icons.logo className="h-4 w-4" />,
        },
        secondaryAction: {
          href: "/components",
          text: "Broswe Projects",
          icon: <Icons.component className="h-4 w-4" />,
        },
      }}
      
    />
  );
}

export function PreviewCards() {
  return (
    <div className="grid gap-4 md:grid-rows-2">
      <ProjectStatusCard
        title="Marketing Website"
        progress={75}
        dueDate="Feb 15, 2024"
        contributors={[{ name: "Alex" }, { name: "Sarah" }, { name: "Mike" }]}
        tasks={[
          { title: "Homepage Design", completed: true },
          { title: "Blog Integration", completed: true },
          { title: "SEO Optimization", completed: false },
        ]}
        githubStars={124}
        openIssues={3}
      />
      <ProjectStatusCard
        title="Mobile App"
        progress={40}
        dueDate="Apr 1, 2024"
        contributors={[{ name: "Chris" }, { name: "Emma" }, { name: "Tom" }]}
        tasks={[
          { title: "UI Design", completed: true },
          { title: "Core Features", completed: false },
          { title: "Testing", completed: false },
        ]}
        githubStars={89}
        openIssues={5}
      />
    </div>
  );
}

export default HeroSection ;
