"use client";

import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// This would typically come from your database or CMS
const getArticleData = (slug: string) => {
  // For now, we'll use the static data from the home page
  const allArticles = [
    {
      id: "sustainable-fishing",
      title: "Sustainable Fishing Initiatives",
      description:
        "Supporting local fishing communities with modern sustainable practices, advanced equipment, and market access, ensuring both marine conservation and economic growth.",
      image: "https://images.unsplash.com/photo-1582623838120-455da222cdc7?q=80&w=1080",
      content: `
        <h2>Transforming Coastal Communities Through Sustainable Fishing</h2>
        <p>Blue Capital's sustainable fishing initiative is revolutionizing how coastal communities in Africa approach marine resource management. Through our comprehensive program, we're not just preserving marine ecosystems – we're creating sustainable livelihoods for generations to come.</p>
        
        <h3>Key Achievements</h3>
        <ul>
          <li>Equipped over 200 local fishing vessels with sustainable fishing gear</li>
          <li>Established direct market connections for 15 fishing communities</li>
          <li>Reduced bycatch by 40% through improved fishing methods</li>
          <li>Created 500+ new jobs in sustainable fishing and processing</li>
        </ul>

        <h3>Environmental Impact</h3>
        <p>Our initiatives have led to a significant reduction in overfishing and helped restore local marine ecosystems. Through careful monitoring and sustainable practices, we've seen a 30% increase in fish populations in protected areas.</p>

        <h3>Community Development</h3>
        <p>Beyond environmental conservation, our program has strengthened local economies and improved food security. Training programs in sustainable fishing methods and business management have empowered communities to take control of their marine resources.</p>
      `,
      date: "2024-02-15",
      author: "Marine Conservation Team",
    },
    {
      id: "marine-conservation",
      title: "Marine Conservation",
      description:
        "Protecting critical marine ecosystems through innovative conservation projects, research initiatives, and community-led preservation efforts.",
      image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=1080",
      content: `
        <h2>Preserving Africa's Marine Biodiversity</h2>
        <p>Our marine conservation projects combine cutting-edge research with community-led initiatives to protect and restore critical marine ecosystems along Africa's coastline.</p>

        <h3>Current Projects</h3>
        <ul>
          <li>Coral reef restoration in East Africa</li>
          <li>Mangrove reforestation programs</li>
          <li>Marine protected area establishment</li>
          <li>Sea turtle conservation initiatives</li>
        </ul>

        <h3>Research Impact</h3>
        <p>Through partnerships with leading marine research institutions, we've documented over 100 species and established new protected marine areas covering over 10,000 hectares.</p>

        <h3>Community Engagement</h3>
        <p>Local communities are at the heart of our conservation efforts. We've trained over 300 community members as marine conservation officers and established local conservation committees in 12 coastal regions.</p>
      `,
      date: "2024-02-10",
      author: "Conservation Research Team",
    },
    // Add more articles as needed
  ];

  return allArticles.find(article => article.id === slug);
};

export default function NewsArticle() {
  const params = useParams();
  const article = getArticleData(params.slug as string);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link href="/">
          <Button variant="link">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/">
          <Button variant="link" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="flex items-center text-gray-600 mb-6">
          <span className="mr-4">{article.author}</span>
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="absolute w-full h-full object-cover"
        />
      </div>

      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
} 