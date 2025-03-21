"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { donationFormSchema, type DonationFormValues } from "@/lib/zodSchemas";
import { FormSuccess } from "./form-success";

export function DonationForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      amount: "1000",
      customAmount: "",
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  const watchAmount = form.watch("amount");

  const handleAmountClick = (value: string) => {
    form.setValue("amount", value);
    form.setValue("customAmount", "");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    form.setValue("customAmount", value);
    form.setValue("amount", "custom");
  };

  function onSubmit(data: DonationFormValues) {
    console.log(data);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <FormSuccess
        title="Thank You for Your Donation!"
        description="Your generosity will make a real difference in the lives of those we serve. You will receive a confirmation email shortly."
        buttonText="Make Another Donation"
        onReset={() => {
          form.reset();
          setIsSubmitted(false);
        }}
      />
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormLabel>Select Amount</FormLabel>
          <div className="grid grid-cols-3 gap-2">
            {["500", "1000", "2000"].map((value) => (
              <Button
                key={value}
                type="button"
                variant={watchAmount === value ? "default" : "outline"}
                className={cn(
                  "h-12",
                  watchAmount === value && "ring-2 ring-primary ring-offset-2"
                )}
                onClick={() => handleAmountClick(value)}
              >
                ₹{value}
              </Button>
            ))}
          </div>
          <div className="relative">
            <Input
              type="text"
              placeholder="Custom Amount"
              value={form.getValues("customAmount")}
              onChange={handleCustomAmountChange}
              className={cn(
                "pl-8",
                watchAmount === "custom" && "ring-2 ring-primary ring-offset-2"
              )}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              ₹
            </span>
          </div>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name *</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john.doe@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number *</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+91 98765 43210" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full gap-2">
          <CreditCard className="h-4 w-4" /> Proceed to Payment
        </Button>

        <div className="text-center text-xs text-muted-foreground">
          <p>
            Your payment information is secure. We use encryption to protect
            your data.
          </p>
        </div>
      </form>
    </Form>
  );
}
