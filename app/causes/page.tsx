import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function CausesPage() {
  const causes = await prisma.cause.findMany();
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-3">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Our Causes</h1>
            <p className="text-xl text-muted-foreground">
              Support these initiatives and help us create lasting positive
              change across India.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-3 space-y-8">
          <h2 className="text-2xl font-bold">Featured Causes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {causes
              .filter((cause) => cause.featured)
              .map((cause) => (
                <Card key={cause.id} className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src={cause.image || "https://placehold.co/500x300"}
                      alt={cause.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {cause.category.toLocaleUpperCase()}
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{cause.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {cause.location}
                      </p>
                    </div>
                    <p className="text-muted-foreground">{cause.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>
                          Raised: ₹{(cause.raised / 100000).toFixed(1)}L
                        </span>
                        <span>Goal: ₹{(cause.goal / 100000).toFixed(1)}L</span>
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
                    <div className="flex gap-4 pt-2">
                      <Button asChild className="flex-1">
                        <Link href={`/causes/${cause.id}`}>Donate Now</Link>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <Link href={`/causes/${cause.id}`}>Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-3 space-y-8">
          <h2 className="text-2xl font-bold">All Causes</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {causes
              .filter((cause) => !cause.featured)
              .map((cause) => (
                <Card key={cause.id} className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src={cause.image || "https://placehold.co/500x300"}
                      alt={cause.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {cause.category.toUpperCase()}
                    </div>
                  </div>
                  <CardContent className="px-5 py-3 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold">{cause.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {cause.location}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {cause.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>
                          Raised: ₹{(cause.raised / 100000).toFixed(1)}L
                        </span>
                        <span>Goal: ₹{(cause.goal / 100000).toFixed(1)}L</span>
                      </div>
                      <div className="w-full h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
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
                    <Button asChild className="w-full">
                      <Link href={`/causes/${cause.id}`}>Donate Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-3">
          <div className="bg-primary/10 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Start Your Own Fundraiser
                </h2>
                <p className="text-muted-foreground">
                  Have a cause you&apos;re passionate about? Create your own
                  fundraising campaign and rally your network to support it.
                </p>
                <div className="pt-2">
                  <Button asChild>
                    <Link
                      href="/start-fundraiser"
                      className="flex items-center gap-2"
                    >
                      Start a Fundraiser <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://placehold.co/400x300"
                  alt="Start a fundraiser"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-3 text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Can&apos;t Decide? Support Our General Fund
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Your donation to our general fund allows us to allocate resources
            where they&apos;re needed most, responding quickly to emerging
            needs.
          </p>
          <div className="pt-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/causes">Donate to General Fund</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
