import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { pricingData } from "@/json/Pricing";

export default function page() {
  const features = [
    { name: "Background Remover", free: true, premium: true, enterprise: true },
    { name: "Image Upscaler", free: true, premium: true, enterprise: true },
    { name: "AI Image Generator", free: true, premium: true, enterprise: true },
    { name: "Unlimited Access", free: false, premium: true, enterprise: true },
    { name: "Priority Support", free: false, premium: true, enterprise: true },
    { name: "API Access", free: false, premium: false, enterprise: true }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="container mt-24 mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Unleash Your Creativity with Photocess
        </h1>
        <p className="text-xl mb-8">Start for free with 400 credits</p>
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden mb-8">
          <Image
            src="/99a50644f289ea233c8adc23f100984f.png"
            alt="Photocess Interface"
            width={1280}
            height={720}
            className="object-cover"
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan Card */}
          {pricingData.map((plan) => (
            <Card key={plan.title} className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-lg text-zinc-400">
                  {plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-start">
                <Link href={`/checkout/${plan.title}`} legacyBehavior passHref>
                  <Button
                    variant="ringHover"
                    className="w-full bg-white hover:bg-white mb-4"
                  >
                    Checkout
                  </Button>
                </Link>
                <ul className="space-y-2 w-full grid place-content-start">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Compare plans</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-4 mb-4 text-sm">
            <div className="text-zinc-400">Features</div>
            <div className="text-center">Free</div>
            <div className="text-center">$19.99</div>
            <div className="text-center">Contact Us</div>
          </div>
          {features.map((feature) => (
            <div
              key={feature.name}
              className="grid grid-cols-4 gap-4 py-4 border-t border-zinc-800"
            >
              <div>{feature.name}</div>
              <div className="text-center">
                {feature.free ? (
                  <Check className="h-4 w-4 mx-auto text-green-500" />
                ) : (
                  <span className="text-zinc-500">&mdash;</span>
                )}
              </div>
              <div className="text-center">
                {feature.premium ? (
                  <Check className="h-4 w-4 mx-auto text-green-500" />
                ) : (
                  <span className="text-zinc-500">&mdash;</span>
                )}
              </div>
              <div className="text-center">
                {feature.enterprise ? (
                  <Check className="h-4 w-4 mx-auto text-green-500" />
                ) : (
                  <span className="text-zinc-500">&mdash;</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-medium">
              How do I get started with this tool?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400">
              Simply sign up and you&apos;ll get access to all our basic
              features with 400 free credits.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-medium">
              What happens when I run out of free credits?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400">
              You can upgrade to our premium plan for unlimited access or
              purchase additional credits.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-medium">
              Can I cancel my subscription at any time?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400">
              Yes, you can cancel your subscription at any time with no
              questions asked.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    License
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Social</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
