// Dependencies: pnpm install lucide-react
"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { pricingData } from "@/json/Pricing";
import { Check } from "lucide-react";
import Link from "next/link";
import React, { useMemo } from "react";

export default function Upgrade() {
  const [plan, setPlan] = React.useState("Premium");

  const memoizedPlan = useMemo(() => plan, [plan]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Upgrade</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="mb-2 flex flex-col gap-2">
          <DialogHeader>
            <DialogTitle className="text-left">Change your plan</DialogTitle>
            <DialogDescription className="text-left">
              Pick one of the following plans.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5">
          <RadioGroup
            className="gap-2"
            value={plan}
            onValueChange={(value) => setPlan(value)}
          >
            {pricingData.map((item, index) => (
              <div
                className="relative flex w-full items-center gap-2 rounded-lg border border-input px-4 py-3 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent"
                key={index}
              >
                <RadioGroupItem
                  value={item.title}
                  id={`plan-0${index + 1}`}
                  aria-describedby="plan-01-description"
                  className="order-1 after:absolute after:inset-0"
                />
                <div className="grid grow gap-1">
                  <Label htmlFor={`plan-0${index + 1}`}>{item.title}</Label>
                  <p
                    id="plan-01-description"
                    className="text-xs text-muted-foreground"
                  >
                    {item.title == "Enterprise" ? (
                      "Contact us for pricing"
                    ) : (
                      <>${item.price} /month</>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </RadioGroup>

          <div className="space-y-3">
            <p>
              <strong className="text-sm font-medium">Features include:</strong>
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <Check
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                Create unlimited projects.
              </li>
              <li className="flex gap-2">
                <Check
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                Remove watermarks.
              </li>
              <li className="flex gap-2">
                <Check
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                Add unlimited users and free viewers.
              </li>
              <li className="flex gap-2">
                <Check
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                Upload unlimited files.
              </li>
              <li className="flex gap-2">
                <Check
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                7-day money back guarantee.
              </li>
              <li className="flex gap-2">
                <Check
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                Advanced permissions.
              </li>
            </ul>
          </div>

          <div className="grid gap-2">
            <Link href={`/checkout/${memoizedPlan}`} legacyBehavior passHref>
              <Button
                type="button"
                variant="gooeyRight"
                className="w-full bg-white hover:bg-white/80"
              >
                Change plan
              </Button>
            </Link>
            <DialogClose asChild>
              <Button type="button" variant="ghost" className="w-full">
                Cancel
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
