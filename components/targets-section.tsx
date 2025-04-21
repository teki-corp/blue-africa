import { FeatureSteps } from "@/components/ui/targets"

const impactTargets = [
  { 
    step: '2025 Target', 
    title: 'Renewable Energy',
    content: 'Fund and develop 500MW of renewable energy projects across Africa, providing clean power to over 1 million households while reducing carbon emissions by 2 million tons annually.', 
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1080'
  },
  { 
    step: '2025 Target',
    title: 'Sustainable Agriculture',
    content: 'Support 100,000 smallholder farmers in adopting climate-smart agricultural practices, improving food security and increasing resilience to climate change.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1080'
  },
  { 
    step: '2025 Target',
    title: 'Blue Economy',
    content: 'Invest $200 million in sustainable coastal and marine projects, creating 50,000 green jobs and protecting critical marine ecosystems.',
    image: 'https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=1080'
  },
]

export function TargetsSection() {
  return (
    <FeatureSteps 
      features={impactTargets}
      title="Our Impact Targets"
      subtitle="Measurable goals driving Africa's sustainable transformation"
      autoPlayInterval={4000}
      imageHeight="h-[500px]"
    />
  )
}