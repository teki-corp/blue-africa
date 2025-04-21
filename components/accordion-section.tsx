import { Feature197 } from "@/components/ui/accordion-feature-section"

const investmentProcessData = {
  title: "Investment Process",
  description: "Our streamlined process ensures thorough evaluation and support for green energy projects across Africa. Each step is designed to maximize project success while maintaining rigorous environmental and financial standards.",
  features: [
    {
      id: 1,
      title: "Project Submission & Initial Screening",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1080",
      description:
        "Submit your green project proposal through our online platform. Our team conducts initial screening based on environmental impact, financial viability, and alignment with our investment criteria. We evaluate the project's potential contribution to sustainable development in Africa.",
    },
    {
      id: 2,
      title: "Due Diligence & Assessment",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",
      description:
        "Our experts conduct thorough due diligence, including environmental impact assessments, financial modeling, and risk analysis. We work closely with project developers to understand technical specifications, implementation plans, and expected outcomes.",
    },
    {
      id: 3,
      title: "Investment Structure & Terms",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1080",
      description:
        "For approved projects, we develop tailored investment structures that align with project needs and investor requirements. This includes determining funding amounts, investment terms, and establishing clear performance metrics for monitoring progress.",
    },
    {
      id: 4,
      title: "Implementation & Support",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1080",
      description:
        "Once funded, we provide comprehensive support throughout the implementation phase. Our team offers technical assistance, connects projects with relevant partners, and helps navigate regulatory requirements to ensure successful execution.",
    },
    {
      id: 5,
      title: "Monitoring & Impact Reporting",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080",
      description:
        "We maintain regular oversight of project progress and measure impact against established metrics. Through our advanced monitoring systems, we track environmental benefits, social impact, and financial performance, providing transparent reporting to all stakeholders.",
    },
  ],
};

function AccordionSection() {
  return <Feature197 {...investmentProcessData} />;
}

export { AccordionSection };
