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
import { toast } from "sonner";
import { CreateRazorpayOrder } from "@/actions/CreateRazorpayOrder";
import { RazorpayOrderOptions, useRazorpay } from "react-razorpay";
import { CreateDonation } from "@/actions/Causes";

export function DonationForm({ causeId }: { causeId: string }) {
  const { Razorpay } = useRazorpay();
  const [loading, setLoading] = React.useState(false);
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

  async function onSubmit(data: DonationFormValues) {
    setLoading(true);
    const finalAmount =
      data.amount && data.amount !== "custom"
        ? Number(data.amount)
        : Number(data.customAmount);
    const id = await CreateRazorpayOrder(finalAmount);
    if (!id) {
      toast.error("Failed to Process Order", {
        duration: 3000,
      });
      return null;
    }
    const options: RazorpayOrderOptions = {
      key: process.env.RAZORPAY_KEY_ID as string,
      amount: Number(data.amount) * 100,
      currency: "INR",
      name: "Aira",
      order_id: id,
      modal: {
        backdropclose: false,
        escape: false,
        handleback: false,
        confirm_close: true,
        animation: true,
        ondismiss() {
          setLoading(false);
        },
      },
      callback_url:
        process.env.NODE_ENV == "development"
          ? `http://localhost:3000/success?id=${id}`
          : `https://tuna-darling-overly.ngrok-free.app/success?id=${id}`,
      allow_rotation: false,
      retry: {
        enabled: true,
      },
      remember_customer: true,
      theme: {
        hide_topbar: false,
      },
    };
    const razorpayInstance = new Razorpay(options);
    await CreateDonation(data, causeId, id);
    razorpayInstance.open();
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
        <Button disabled={loading} type="submit" className="w-full gap-2">
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
