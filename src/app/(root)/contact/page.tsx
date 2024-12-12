"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Facebook, Instagram, Star } from 'lucide-react'
import Link from "next/link"

export default function page() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-2xl mx-auto px-4 py-24">
                {/* Contact Form */}
                <section className="mb-20">
                    <h1 className="text-2xl font-semibold mb-2">Contact Us</h1>
                    <p className="text-gray-400 mb-8">
                        If you have any questions or need assistance, don&apos;t hesitate to
                        contact us through the form below.
                    </p>

                    <form className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            className="bg-zinc-900 border-zinc-800 text-white placeholder:text-gray-400"
                        />
                        <Textarea
                            placeholder="Message"
                            className="min-h-[150px] bg-zinc-900 border-zinc-800 text-white placeholder:text-gray-400"
                        />
                        <Button className="w-full bg-white text-black hover:bg-gray-200">
                            Submit
                        </Button>
                    </form>
                </section>

                {/* FAQ Section */}
                <section className="mb-20">
                    <h2 className="text-2xl font-semibold mb-8">
                        Frequently Asked Questions
                    </h2>
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        {[
                            {
                                question: "What services do you offer?",
                                answer: "We offer a range of business consulting services."
                            },
                            {
                                question: "How can I get a quote?",
                                answer: "You can request a quote through our contact form or by emailing us directly."
                            },
                            {
                                question: "What are your business hours?",
                                answer: "We operate Monday through Friday, 9 AM to 5 PM EST."
                            },
                            {
                                question: "Where are you located?",
                                answer: "Our main office is located in the business district."
                            },
                            {
                                question: "Do you offer remote services?",
                                answer: "Yes, we provide remote consulting services worldwide."
                            },
                            {
                                question: "How can I schedule a consultation?",
                                answer: "You can schedule a consultation through our online booking system or contact form."
                            }
                        ].map((faq, index) => (
                            <AccordionItem
                                value={`${index}`}
                                key={index}
                                className="rounded-lg border bg-background px-4 py-1"
                            >
                                <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="pb-2 text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>

                        ))}
                    </Accordion>
                </section>

                {/* Footer */}
                <footer className="text-center space-y-8">
                    <div className="flex justify-center gap-4">
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <Facebook className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <Instagram className="h-6 w-6" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <Star className="h-6 w-6" />
                        </Link>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold">Connecting Businesses Worldwide</h3>
                        <form className="flex gap-2 max-w-sm mx-auto">
                            <Input
                                type="email"
                                placeholder="Email address"
                                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-gray-400"
                            />
                            <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                                Subscribe
                            </Button>
                        </form>
                    </div>

                    <div className="text-gray-400 text-sm">
                        <p>123 Business St, Business City, BC</p>
                        <p>contact@example.com</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}