import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <div className="w-full py-4 lg:py-8">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-blue-600 text-white rounded-lg p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge className="bg-blue-500 text-white hover:bg-blue-400">Join Our Mission</Badge>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Partner with Us for a Sustainable Future
            </h3>
            <p className="text-lg max-w-md text-foreground mb-8">
              Join us in our mission to create a sustainable future for Africa&apos;s marine ecosystems.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="gap-4 bg-white text-blue-600 hover:bg-blue-50" variant="outline">
              Schedule a Consultation <PhoneCall className="w-4 h-4" />
            </Button>
            <Button className="gap-4 bg-blue-500 text-white hover:bg-blue-400">
              Submit Your Project <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
