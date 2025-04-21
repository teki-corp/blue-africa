import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-6 lg:py-8">
      <div className="container mx-auto">
        <div className="flex gap-4 py-6 lg:py-8 px-8 flex-col items-center text-center">
          <div>
            <Badge className="bg-blue-100 text-blue-800">Investment Approach</Badge>
          </div>
          <div className="flex gap-2 flex-col items-center">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Sustainable Investment, Lasting Impact
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Our comprehensive approach combines financial returns with measurable environmental and social impact across Africa.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-blue-600" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Due Diligence Excellence</p>
                  <p className="text-muted-foreground text-sm">
                    Rigorous project evaluation process ensuring environmental sustainability and financial viability.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-blue-600" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Local Expertise</p>
                  <p className="text-muted-foreground text-sm">
                    Deep understanding of African markets and partnerships with local stakeholders.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-blue-600" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Impact Measurement</p>
                  <p className="text-muted-foreground text-sm">
                    Transparent tracking and reporting of environmental and social impact metrics.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-blue-600" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Sustainable Returns</p>
                  <p className="text-muted-foreground text-sm">
                    Focus on projects that deliver both financial returns and positive environmental impact.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-blue-600" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Technical Support</p>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive project support from planning through implementation and monitoring.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-blue-600" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Global Network</p>
                  <p className="text-muted-foreground text-sm">
                    Access to international investors and partners committed to sustainable development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
