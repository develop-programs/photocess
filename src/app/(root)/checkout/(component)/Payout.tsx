"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { CreditCard, ShoppingCart, Apple, CreditCardIcon } from "lucide-react";
import { pricingData } from "@/json/Pricing";

export default function Payout({ data }: { data: string }) {
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mt-24 shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">
            Complete Your Purchase
          </CardTitle>
          <CardDescription className="text-center">
            Subscribe to our Premium Plan and unlock all features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Plan Summary */}
          {pricingData
            .filter((plan) => plan.title.toLowerCase() === data.toLowerCase())
            .map((plan, index) => (
              <div
                className="p-4 rounded-lg bg-slate-900 border border-slate-400"
                key={index}
              >
                <h3 className="text-lg font-semibold text-slate-300 mb-2">
                  {plan.title}
                </h3>
                <p className="text-slate-400">{plan.price} / month</p>
              </div>
            ))}

          {/* Payment Method */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Payment Method</h3>
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="grid grid-cols-4 gap-4"
            >
              <div>
                <RadioGroupItem
                  value="credit_card"
                  id="credit_card"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="credit_card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CreditCard className="mb-3 h-6 w-6" />
                  Credit Card
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="paypal"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <ShoppingCart className="mb-3 h-6 w-6" />
                  PayPal
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="apple_pay"
                  id="apple_pay"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="apple_pay"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Apple className="mb-3 h-6 w-6" />
                  Apple Pay
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="google_pay"
                  id="google_pay"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="google_pay"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CreditCardIcon className="mb-3 h-6 w-6" />
                  Google Pay
                </Label>
              </div>
            </RadioGroup>
          </div>

          {paymentMethod === "credit_card" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="card-name">Name on Card</Label>
                  <Input id="card-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry-month">Expiry Month</Label>
                  <Select>
                    <SelectTrigger id="expiry-month">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(
                        (month) => (
                          <SelectItem
                            key={month}
                            value={month.toString().padStart(2, "0")}
                          >
                            {month.toString().padStart(2, "0")}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiry-year">Expiry Year</Label>
                  <Select>
                    <SelectTrigger id="expiry-year">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from(
                        { length: 10 },
                        (_, i) => new Date().getFullYear() + i
                      ).map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full text-lg">
            Subscribe Now - $49.99/month
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
