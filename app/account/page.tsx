import Link from "next/link";
import { Heart, Calendar, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function AccountPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.session) {
    return notFound();
  }
  const donations = await prisma.donation.findMany({
    where: {
      userId: session.session.userId,
    },
    include: {
      cause: {
        select: {
          title: true,
          id: true,
        },
      },
    },
  });
  return (
    <div className="space-y-8 container px-3 mx-auto py-10">
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {session?.user?.name}
        </h1>
        <p className="text-muted-foreground">
          Manage your account and view your donation history.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="py-6">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Donated</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹25,000</div>
            <p className="text-xs text-muted-foreground">Across 5 causes</p>
          </CardContent>
        </Card>
        <Card className="py-6">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Donations
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Monthly recurring</p>
          </CardContent>
        </Card>
        <Card className="py-6">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Donation</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹5,000</div>
            <p className="text-xs text-muted-foreground">2 days ago</p>
          </CardContent>
        </Card>
      </div>
      <Card className="py-6">
        <CardHeader>
          <CardTitle>Recent Donations</CardTitle>
          <CardDescription>Your most recent contributions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {donations.map((donation) => (
              <div
                key={donation.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b"
              >
                <div>
                  <h3 className="font-semibold">{donation.cause.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>₹{donation.amount}</span>
                    <span>•</span>
                    <span>{donation.createdAt.toLocaleDateString()}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/causes/${donation.cause.id}`}>View Cause</Link>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="py-6">
          <CardHeader>
            <CardTitle>Impact Summary</CardTitle>
            <CardDescription>
              The difference your donations have made
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="font-medium">
                  Supported education for 10 children
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Healthcare</p>
                <p className="font-medium">
                  Provided medical care for 25 individuals
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Clean Water</p>
                <p className="font-medium">
                  Helped provide clean water to 2 villages
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Disaster Relief</p>
                <p className="font-medium">
                  Supported 5 families affected by floods
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="py-6">
          <CardHeader>
            <CardTitle>Recommended Causes</CardTitle>
            <CardDescription>Based on your donation history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">
                    Women&apos;s Skill Development
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Empowering women through vocational training
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/causes/women-empowerment">View</Link>
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Child Nutrition Program</h3>
                  <p className="text-sm text-muted-foreground">
                    Combating malnutrition among children
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/causes/child-nutrition">View</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
