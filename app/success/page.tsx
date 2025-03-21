import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";
import { CheckCircle, Share2, ArrowRight, Download, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const id = params?.id as string;
  if (!id) {
    return notFound();
  }
  const donation = await prisma.donation.findUnique({
    where: {
      razorPayOrderId: id,
    },
    include: {
      cause: {
        select: {
          title: true,
        },
      },
    },
  });
  if (!donation) {
    return notFound();
  }
  return (
    <div className="container px-4 mx-auto py-12 md:py-20 md:px-6">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="mb-6">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/10 animate-pulse" />
            <CheckCircle className="h-24 w-24 text-primary relative" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Thank You for Your Donation!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Your generosity makes a real difference. We&apos;ve sent a receipt
            to your email.
          </p>
        </div>
      </div>

      <div>
        <Card className="mb-8 overflow-hidden border-2 border-primary/10">
          <div className="bg-primary/5 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Heart className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-xl font-bold">Donation Summary</h2>
                <p className="text-muted-foreground">Transaction ID: {id}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Receipt
              </Button>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Donation Amount
                  </p>
                  <p className="text-2xl font-bold">
                    ₹{donation.amount.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Donation Date</p>
                  <p className="font-medium">
                    {donation.createdAt.toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Payment Method
                  </p>
                  <p className="font-medium">Razorpay</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Cause</p>
                  <p className="font-medium">{donation.cause.title}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
              <div className="bg-primary/10 p-3 rounded-full mb-2">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Your Impact</h3>
              <p className="text-sm text-muted-foreground">
                Track the impact of your donation in your account.
              </p>
              <Button variant="link" className="mt-2" asChild>
                <Link href="/account">View Account</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
              <div className="bg-primary/10 p-3 rounded-full mb-2">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Spread the Word</h3>
              <p className="text-sm text-muted-foreground">
                Share this cause with friends and family to amplify your impact.
              </p>
              <div className="flex gap-2 mt-2">
                <Button size="sm" variant="outline">
                  Facebook
                </Button>
                <Button size="sm" variant="outline">
                  Twitter
                </Button>
                <Button size="sm" variant="outline">
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
              <div className="bg-primary/10 p-3 rounded-full mb-2">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Explore More</h3>
              <p className="text-sm text-muted-foreground">
                Discover other causes that align with your interests.
              </p>
              <Button variant="link" className="mt-2" asChild>
                <Link href="/causes">Browse Causes</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
