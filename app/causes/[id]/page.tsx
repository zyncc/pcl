import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Share2, Heart, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DonationForm } from "@/components/donation-form";
import { prisma } from "@/lib/prisma";
import WomenSkills from "@/public/women-skills.jpg";
import ChildNutrition from "@/public/child-nutrition.jpg";

export default async function CausePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const cause = await prisma.cause.findUnique({ where: { id } });
  if (!cause) {
    return (
      <div className="container mx-auto px-3 py-20 text-center">
        <h1 className="text-2xl font-bold">Cause not found</h1>
        <p className="mt-4 text-muted-foreground">
          The cause you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Button asChild className="mt-6">
          <Link href="/causes">View All Causes</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px] w-full bg-muted">
          <Image
            src={cause.image || "https://placehold.co/300"}
            alt={cause.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-3">
              <div className="max-w-3xl space-y-4">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  {cause.category.toUpperCase()}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {cause.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-3">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{cause.location}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    Started: {new Date(cause.startDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{cause.donors} Donors</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>
                    {new Date(cause.endDate) > new Date()
                      ? `${Math.ceil(
                          (new Date(cause.endDate).getTime() -
                            new Date().getTime()) /
                            (1000 * 60 * 60 * 24)
                        )} days left`
                      : "Completed"}
                  </span>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  <Share2 className="h-4 w-4 mr-2" /> Share
                </Button>
              </div>
              <h1 className="text-2xl font-semibold">About</h1>
              <p className="prose prose-sm max-w-none dark:prose-invert">
                {cause.longDescription}
              </p>
              <div className="space-y-6 pt-8">
                <h3 className="text-xl font-bold">Similar Causes</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[1, 2].map((_, index) => (
                    <Card key={index} className="overflow-hidden">
                      <Image
                        src={index === 0 ? WomenSkills : ChildNutrition}
                        placeholder="blur"
                        alt="Similar cause"
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover"
                        priority
                      />
                      <CardContent className="p-4 space-y-2">
                        <h4 className="font-semibold">
                          {index === 0
                            ? "Women's Skill Development"
                            : "Child Nutrition Program"}
                        </h4>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${index === 0 ? 65 : 55}%` }}
                          />
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="w-full mt-2"
                        >
                          <Link
                            href={
                              index === 0
                                ? "/causes/women-empowerment"
                                : "/causes/child-nutrition"
                            }
                          >
                            Learn More
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Raised</span>
                      <span className="font-medium">
                        ₹{(cause.raised / 100000).toFixed(1)}L
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Goal: ₹{(cause.goal / 100000).toFixed(1)}L</span>
                      <span>
                        {Math.round((cause.raised / cause.goal) * 100)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{
                          width: `${Math.min(
                            100,
                            (cause.raised / cause.goal) * 100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                  <DonationForm causeId={id} />
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>{cause.donors} people have donated</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-3 text-center space-y-6">
          <h2 className="text-2xl font-bold">
            Can&apos;t Donate? You Can Still Help!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Share this cause with your friends and family or consider
            volunteering your time and skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" /> Share This Cause
            </Button>
            <Button asChild>
              <Link href="/volunteer" className="gap-2">
                <Users className="h-4 w-4" /> Become a Volunteer
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
