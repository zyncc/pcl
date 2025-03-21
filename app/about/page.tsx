import Image from "next/image";
import Link from "next/link";
import { Award, Heart, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-3">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              About Helping Hands India
            </h1>
            <p className="text-xl text-muted-foreground">
              We are dedicated to creating sustainable change and improving
              lives across India through community-driven initiatives.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Helping Hands India was founded in 2010 by a group of passionate
                individuals who witnessed the stark disparities across different
                regions of India. What began as a small initiative to provide
                educational support to children in rural areas has grown into a
                comprehensive organization addressing multiple social
                challenges.
              </p>
              <p className="text-muted-foreground">
                Over the past decade, we have expanded our reach to 15 states
                across India, partnering with local communities, NGOs, and
                government bodies to create sustainable solutions to pressing
                challenges.
              </p>
              <p className="text-muted-foreground">
                Our approach has always been to empower communities rather than
                create dependency. We believe in working alongside people,
                respecting their knowledge and agency, while providing resources
                and expertise to overcome systemic barriers.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://placehold.co/600x500"
                alt="Our team working in the field"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower underprivileged communities across India through
                  sustainable development initiatives in education, healthcare,
                  clean water, and disaster relief, creating lasting positive
                  change and self-sufficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  A just and equitable India where every person has access to
                  quality education, healthcare, clean water, and the
                  opportunity to live with dignity, regardless of their
                  socioeconomic background or geographic location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className=" space-y-12 container mx-auto px-3">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
            <p className="text-muted-foreground">
              These principles guide our work and decision-making at every level
              of our organization.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="h-8 w-8 text-primary" />,
                title: "Compassion",
                description:
                  "We approach our work with empathy and understanding, recognizing the dignity of every individual we serve.",
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Integrity",
                description:
                  "We maintain the highest ethical standards, ensuring transparency and accountability in all our operations.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Collaboration",
                description:
                  "We believe in the power of partnerships and work closely with communities and organizations to maximize impact.",
              },
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "Innovation",
                description:
                  "We continuously seek creative and effective solutions to complex social challenges.",
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className=" space-y-12 container mx-auto px-3">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Our Leadership Team</h2>
            <p className="text-muted-foreground">
              Meet the dedicated individuals guiding our mission and vision.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Founder & CEO",
                image: "https://placehold.co/300",
                bio: "With over 20 years of experience in the social sector, Priya founded Helping Hands India with a vision to create sustainable change across the country.",
              },
              {
                name: "Rajiv Mehta",
                role: "Chief Operations Officer",
                image: "https://placehold.co/300",
                bio: "Rajiv oversees all program operations, ensuring efficient and effective implementation of our initiatives across all regions.",
              },
              {
                name: "Ananya Patel",
                role: "Director of Programs",
                image: "https://placehold.co/300",
                bio: "Ananya leads the development and evaluation of our programs, focusing on creating measurable impact in communities.",
              },
              {
                name: "Vikram Singh",
                role: "Chief Financial Officer",
                image: "https://placehold.co/300",
                bio: "Vikram ensures financial transparency and sustainability, managing our resources to maximize impact for every rupee donated.",
              },
              {
                name: "Meera Reddy",
                role: "Director of Partnerships",
                image: "https://placehold.co/300",
                bio: "Meera builds and nurtures relationships with corporate partners, foundations, and government agencies to expand our reach.",
              },
              {
                name: "Arjun Kapoor",
                role: "Director of Volunteer Engagement",
                image: "https://placehold.co/300",
                bio: "Arjun coordinates our nationwide volunteer network, mobilizing thousands of individuals to support our mission.",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="space-y-2">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className=" space-y-12 container mx-auto px-3">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Our Impact</h2>
            <p className="text-muted-foreground">
              Through the generous support of our donors and volunteers,
              we&apos;ve achieved significant milestones in our journey.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">200+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">50,000+</p>
              <p className="text-muted-foreground">Lives Impacted</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">15</p>
              <p className="text-muted-foreground">States Reached</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">10,000+</p>
              <p className="text-muted-foreground">Active Volunteers</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Education Initiatives</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Established 50 learning centers in rural areas</li>
                  <li>Provided scholarships to 2,000+ students</li>
                  <li>
                    Trained 500+ teachers in modern teaching methodologies
                  </li>
                  <li>Distributed educational materials to 10,000+ children</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Healthcare Access</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Conducted 100+ health camps serving 25,000+ patients</li>
                  <li>Established 15 mobile health clinics in remote areas</li>
                  <li>Trained 300+ community health workers</li>
                  <li>Provided essential medicines to 30,000+ individuals</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Clean Water Projects</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Installed 75 water purification systems in villages</li>
                  <li>Built 500+ rainwater harvesting structures</li>
                  <li>Revitalized 30 traditional water bodies</li>
                  <li>Provided clean water access to 100,000+ people</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Disaster Relief</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Responded to 25+ major disasters across India</li>
                  <li>
                    Provided emergency relief to 75,000+ affected individuals
                  </li>
                  <li>Rebuilt 500+ homes after natural disasters</li>
                  <li>Established 20 disaster preparedness programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className=" space-y-8 container mx-auto px-3">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">
              Transparency & Accountability
            </h2>
            <p className="text-muted-foreground">
              We are committed to complete transparency in our operations and
              finances. Review our annual reports and financial statements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[2023, 2022, 2021, 2020].map((year) => (
              <Card key={year} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <h3 className="text-xl font-semibold">
                    Annual Report {year}
                  </h3>
                  <p className="text-muted-foreground">
                    Complete overview of our activities, impact, and financial
                    statements for the year {year}.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href={`#report-${year}`}>Download PDF</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center pt-4">
            <p className="text-muted-foreground">
              For additional financial information or specific queries, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary text-primary-foreground">
        <div className=" text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Mission</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Together, we can create lasting change across India. Support our
            work through donations or volunteering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/donate">Make a Donation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/volunteer">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
