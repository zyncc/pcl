import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import charity from "@/public/charity.jpg";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const causes = await prisma.cause.findMany({
    where: {
      featured: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });
  return (
    <div className="flex flex-col">
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 container mx-auto px-3">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Your Kindness Can{" "}
              <span className="text-primary">Change Lives</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Join us in our mission to create a better future for those in need
              across India. Every donation makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/causes">Donate Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/causes">Explore Causes</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              src={charity}
              alt="Children smiling"
              placeholder="blur"
              priority
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">₹2.5Cr+</p>
              <p className="text-muted-foreground">Funds Raised</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">50,000+</p>
              <p className="text-muted-foreground">Lives Impacted</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="text-muted-foreground">States Covered</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">10,000+</p>
              <p className="text-muted-foreground">Volunteers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 container mx-auto px-3">
        <div className="space-y-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">Featured Causes</h2>
            <p className="text-muted-foreground">
              Support these urgent causes and help make a significant impact in
              the lives of those in need across India.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((cause, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={cause.image || "https://placehold.co/300x200"}
                  alt={cause.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-semibold text-lg">{cause.title}</h3>
                  <div className="space-y-2">
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
                    <div className="flex justify-between text-sm">
                      <span>
                        Raised: ₹{(cause.raised / 100000).toFixed(1)}L
                      </span>
                      <span>Goal: ₹{(cause.goal / 100000).toFixed(1)}L</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/causes/${cause.id}`}>Donate Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/causes" className="flex items-center gap-2">
                View All Causes <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="space-y-12 container px-2 mx-auto">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">How We Work</h2>
            <p className="text-muted-foreground">
              Our approach ensures that your donations create maximum impact for
              those who need it most.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background py-6">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Identify Needs</h3>
                <p className="text-muted-foreground">
                  We work closely with local communities to identify the most
                  pressing needs and develop effective solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background py-6">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Mobilize Resources</h3>
                <p className="text-muted-foreground">
                  We gather funds, volunteers, and partners to create
                  sustainable solutions that address root causes.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background py-6">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Measure Impact</h3>
                <p className="text-muted-foreground">
                  We track and report on the impact of every project, ensuring
                  transparency and accountability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="space-y-8 container mx-auto px-3">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Success Stories</h2>
            <p className="text-muted-foreground">
              Hear from the people whose lives have been transformed through
              your generous support.
            </p>
          </div>
          <Tabs defaultValue="story1" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="story1">Meera&apos;s Story</TabsTrigger>
              <TabsTrigger value="story2">Rajesh&apos;s Village</TabsTrigger>
              <TabsTrigger value="story3">Priya&apos;s Education</TabsTrigger>
            </TabsList>
            <TabsContent value="story1" className="mt-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <Image
                  src="https://placehold.co/300x300"
                  alt="Meera's Story"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Meera&apos;s Healthcare Journey
                  </h3>
                  <p className="text-muted-foreground">
                    &quot;The mobile health clinic that visits our village has
                    changed everything for me. I was suffering from chronic pain
                    for years with no access to proper healthcare. The doctors
                    diagnosed my condition and provided treatment that has
                    allowed me to work and support my family again. I&apos;m
                    forever grateful to the donors who made this possible.&quot;
                  </p>
                  <p className="font-medium">Meera, 45, Rajasthan</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="story2" className="mt-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <Image
                  src="https://placehold.co/300x300"
                  alt="Rajesh's Village"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Clean Water for Rajesh&apos;s Village
                  </h3>
                  <p className="text-muted-foreground">
                    &quot;Our village struggled with contaminated water for
                    generations. Children were constantly sick, and we spent
                    hours each day collecting water from distant sources. The
                    new water purification system has transformed our community.
                    Illness rates have dropped dramatically, and our children
                    can focus on education instead of water collection.&quot;
                  </p>
                  <p className="font-medium">
                    Rajesh, Village Head, Maharashtra
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="story3" className="mt-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <Image
                  src="https://placehold.co/300x300"
                  alt="Priya's Education"
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    Priya&apos;s Educational Journey
                  </h3>
                  <p className="text-muted-foreground">
                    &quot;I never thought I would be able to continue my
                    education after 10th standard. My parents couldn&apos;t
                    afford it, and girls in my village rarely study beyond that.
                    The scholarship I received changed everything. I&apos;ve now
                    completed my Bachelor&apos;s degree in Computer Science and
                    have a job at a technology company in Bangalore. I hope to
                    inspire other girls from my village.&quot;
                  </p>
                  <p className="font-medium">Priya, 23, Karnataka</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="space-y-8 container mx-auto px-3">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about donations, volunteering,
              and our work.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How is my donation used?</AccordionTrigger>
                <AccordionContent>
                  We ensure that at least 100% of your donation goes directly to
                  program expenses. We maintain complete transparency with
                  detailed financial reports available on our website.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is my donation tax-deductible?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all donations to Helping Hands India are eligible for tax
                  deduction under Section 80G of the Income Tax Act. You will
                  receive a tax receipt via email immediately after your
                  donation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I donate to a specific cause?
                </AccordionTrigger>
                <AccordionContent>
                  During the donation process, you can select the specific cause
                  you wish to support. If you don&apos;t see a particular cause
                  listed, please contact us, and we&apos;ll help direct your
                  donation appropriately.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How can I volunteer with Helping Hands India?
                </AccordionTrigger>
                <AccordionContent>
                  We welcome volunteers across India! Visit our Volunteer page
                  to see current opportunities and fill out our volunteer
                  application form. We have both in-person and virtual
                  volunteering options available.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Can I set up a recurring donation?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer monthly, quarterly, and annual recurring
                  donation options. Recurring donations help us plan long-term
                  projects and provide sustained support to communities in need.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="text-center space-y-6 container mx-auto px-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Your support can transform lives across India. Join us in creating
            lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/causes">Donate Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
