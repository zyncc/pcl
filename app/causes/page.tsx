import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const causes = [
  {
    id: "education-for-all",
    title: "Education for All",
    category: "Education",
    image: "https://placehold.co/500x300",
    description:
      "Providing quality education to underprivileged children across rural India through learning centers, teacher training, and educational materials.",
    raised: 850000,
    goal: 1500000,
    location: "Multiple States",
    featured: true,
  },
  {
    id: "clean-water-initiative",
    title: "Clean Water Initiative",
    category: "Water",
    image: "https://placehold.co/500x300",
    description:
      "Installing water purification systems in villages affected by contaminated water sources, preventing waterborne diseases and improving health outcomes.",
    raised: 1200000,
    goal: 2000000,
    location: "Maharashtra, Gujarat, Rajasthan",
    featured: true,
  },
  {
    id: "rural-healthcare",
    title: "Rural Healthcare Access",
    category: "Healthcare",
    image: "https://placehold.co/500x300",
    description:
      "Bringing essential healthcare services to remote villages through mobile clinics, telemedicine, and training community health workers.",
    raised: 750000,
    goal: 1800000,
    location: "Uttar Pradesh, Bihar, Jharkhand",
    featured: true,
  },
  {
    id: "flood-relief",
    title: "Flood Relief & Rehabilitation",
    category: "Disaster Relief",
    image: "https://placehold.co/500x300",
    description:
      "Providing emergency assistance and long-term rehabilitation support to communities affected by devastating floods in Eastern India.",
    raised: 950000,
    goal: 1200000,
    location: "Assam, West Bengal, Bihar",
    featured: true,
  },
  {
    id: "women-empowerment",
    title: "Women's Skill Development",
    category: "Empowerment",
    image: "https://placehold.co/500x300",
    description:
      "Empowering women through vocational training, financial literacy, and entrepreneurship support to achieve economic independence.",
    raised: 650000,
    goal: 1000000,
    location: "Tamil Nadu, Karnataka, Telangana",
    featured: false,
  },
  {
    id: "child-nutrition",
    title: "Child Nutrition Program",
    category: "Healthcare",
    image: "https://placehold.co/500x300",
    description:
      "Combating malnutrition among children under 5 through nutritional supplements, awareness programs, and community kitchens.",
    raised: 450000,
    goal: 800000,
    location: "Madhya Pradesh, Chhattisgarh",
    featured: false,
  },
  {
    id: "digital-literacy",
    title: "Digital Literacy for Youth",
    category: "Education",
    image: "https://placehold.co/500x300",
    description:
      "Equipping rural youth with digital skills through computer labs, training programs, and internet connectivity to enhance employability.",
    raised: 350000,
    goal: 700000,
    location: "Punjab, Haryana, Himachal Pradesh",
    featured: false,
  },
  {
    id: "elderly-care",
    title: "Elderly Care & Support",
    category: "Healthcare",
    image: "https://placehold.co/500x300",
    description:
      "Providing healthcare, companionship, and support services to elderly individuals without family support in urban and rural areas.",
    raised: 280000,
    goal: 600000,
    location: "Kerala, Goa, Maharashtra",
    featured: false,
  },
];

export default function CausesPage() {
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

      {/* Featured Causes */}
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
                      src={cause.image || "/placeholder.svg"}
                      alt={cause.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {cause.category}
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

      {/* All Causes */}
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
                      src={cause.image || "/placeholder.svg"}
                      alt={cause.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {cause.category}
                    </div>
                  </div>
                  <CardContent className="p-5 space-y-4">
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

      {/* Start Your Own Fundraiser */}
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

      {/* CTA Section */}
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
              <Link href="/donate">Donate to General Fund</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
