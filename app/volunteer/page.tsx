import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Clock,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VolunteerForm } from "@/components/volunteer-form";

export default function VolunteerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-3">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Volunteer With Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our community of dedicated volunteers and help us create
              positive change across India.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Why Volunteer With Us?</h2>
              <p className="text-muted-foreground">
                Volunteering with Helping Hands India offers a meaningful way to
                contribute to social change while developing new skills and
                connections. Our volunteers are essential to our mission and
                impact.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Make a Real Difference",
                    description:
                      "Work directly with communities and see the tangible impact of your contribution.",
                  },
                  {
                    title: "Develop New Skills",
                    description:
                      "Gain valuable experience and skills that enhance your personal and professional growth.",
                  },
                  {
                    title: "Connect with Like-minded People",
                    description:
                      "Join a community of passionate individuals committed to creating positive change.",
                  },
                  {
                    title: "Flexible Opportunities",
                    description:
                      "Choose from a variety of roles that match your interests, skills, and availability.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://placehold.co/600x500"
                alt="Volunteers working together"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-3 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Volunteer Opportunities</h2>
            <p className="text-muted-foreground">
              We offer a variety of volunteer roles to match different skills,
              interests, and time commitments.
            </p>
          </div>
          <Tabs defaultValue="in-person" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="in-person">
                In-Person Volunteering
              </TabsTrigger>
              <TabsTrigger value="virtual">Virtual Volunteering</TabsTrigger>
            </TabsList>
            <TabsContent value="in-person" className="mt-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Education Support",
                    location: "Multiple Locations",
                    commitment: "4-8 hours/week",
                    description:
                      "Assist teachers in our learning centers, help with homework, conduct extracurricular activities, and inspire children to learn.",
                  },
                  {
                    title: "Healthcare Assistance",
                    location: "Rural Health Camps",
                    commitment: "Weekend Camps",
                    description:
                      "Support medical professionals at health camps by managing registrations, guiding patients, and assisting with basic health checks.",
                  },
                  {
                    title: "Community Outreach",
                    location: "Various Communities",
                    commitment: "Flexible",
                    description:
                      "Help conduct awareness programs on health, education, water conservation, and other important topics in rural and urban communities.",
                  },
                  {
                    title: "Disaster Response",
                    location: "As Needed",
                    commitment: "On-call",
                    description:
                      "Join our emergency response team to provide immediate assistance during natural disasters and other emergencies.",
                  },
                ].map((opportunity, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold">
                        {opportunity.title}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{opportunity.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{opportunity.commitment}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {opportunity.description}
                      </p>
                      <Button asChild>
                        <Link href="#volunteer-form">Apply Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="virtual" className="mt-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Content Creation",
                    skills: "Writing, Design, Video",
                    commitment: "3-5 hours/week",
                    description:
                      "Create compelling content for our website, social media, newsletters, and fundraising campaigns to raise awareness about our work.",
                  },
                  {
                    title: "Digital Marketing",
                    skills: "Social Media, SEO, Analytics",
                    commitment: "4-6 hours/week",
                    description:
                      "Help manage our social media presence, improve our website's SEO, and analyze digital performance to expand our reach.",
                  },
                  {
                    title: "Translation Services",
                    skills: "Multilingual Proficiency",
                    commitment: "Flexible",
                    description:
                      "Translate our materials into regional Indian languages to help us communicate effectively with diverse communities.",
                  },
                  {
                    title: "Virtual Mentoring",
                    skills: "Subject Expertise, Teaching",
                    commitment: "2-4 hours/week",
                    description:
                      "Provide virtual mentoring and tutoring to students in our education programs, helping them excel academically and develop life skills.",
                  },
                ].map((opportunity, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold">
                        {opportunity.title}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4 text-primary" />
                          <span>Skills: {opportunity.skills}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{opportunity.commitment}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {opportunity.description}
                      </p>
                      <Button asChild>
                        <Link href="#volunteer-form">Apply Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-3 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Volunteer Stories</h2>
            <p className="text-muted-foreground">
              Hear from some of our dedicated volunteers about their experiences
              and impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ananya Sharma",
                role: "Education Volunteer",
                image: "https://placehold.co/300",
                quote:
                  "Teaching at the learning center has been incredibly rewarding. Seeing the children's excitement when they master a new concept makes every minute worthwhile. I've learned as much from them as they have from me.",
              },
              {
                name: "Vikram Patel",
                role: "Healthcare Volunteer",
                image: "https://placehold.co/300",
                quote:
                  "As a medical student, volunteering at health camps has given me practical experience while serving communities that lack access to basic healthcare. The gratitude in people's eyes is something I'll never forget.",
              },
              {
                name: "Priya Mehta",
                role: "Digital Marketing Volunteer",
                image: "https://placehold.co/300",
                quote:
                  "Working remotely as a digital marketing volunteer has allowed me to use my professional skills for a cause I believe in. It's flexible enough to fit around my full-time job, and I can see the direct impact of my contribution.",
              },
            ].map((volunteer, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={volunteer.image || "https://placehold.co/300"}
                  alt={volunteer.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-xl">{volunteer.name}</h3>
                    <p className="text-primary">{volunteer.role}</p>
                  </div>
                  <p className="text-muted-foreground italic">
                    &quot;{volunteer.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-3 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Upcoming Volunteer Events</h2>
            <p className="text-muted-foreground">
              Join us for these upcoming events and make an immediate impact.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Tree Planting Drive",
                date: "April 22, 2023",
                location: "Cubbon Park, Bangalore",
                image: "https://placehold.co/300x200",
                description:
                  "Join us in planting 500 trees to increase green cover and combat air pollution in the city.",
              },
              {
                title: "Education Fair",
                date: "May 15, 2023",
                location: "Community Hall, Delhi",
                image: "https://placehold.co/300x200",
                description:
                  "Help organize a fair that connects underprivileged students with educational resources and scholarships.",
              },
              {
                title: "Health Camp",
                date: "June 5, 2023",
                location: "Rural Outskirts, Mumbai",
                image: "https://placehold.co/300x200",
                description:
                  "Support medical professionals in providing free health check-ups and consultations to rural communities.",
              },
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={event.image || "https://placehold.co/300x200"}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <CardContent className="p-5 space-y-4">
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="#volunteer-form">Sign Up</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/events" className="flex items-center gap-2">
                View All Events <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section id="volunteer-form" className="py-16">
        <div className="container mx-auto px-3">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Become a Volunteer</h2>
              <p className="text-muted-foreground">
                Fill out the form below to express your interest in volunteering
                with us. Our volunteer coordinator will contact you to discuss
                opportunities that match your interests and availability.
              </p>
            </div>

            <Card>
              <CardContent className="p-6 md:p-8">
                <VolunteerForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-3">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Find answers to common questions about volunteering with us.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  question: "Do I need special qualifications to volunteer?",
                  answer:
                    "Most of our volunteer roles don't require specific qualifications, just enthusiasm and commitment. For specialized roles like medical camps or technical support, relevant qualifications may be necessary.",
                },
                {
                  question: "How much time do I need to commit?",
                  answer:
                    "We offer opportunities with varying time commitments, from one-time events to regular weekly roles. You can choose what works best for your schedule.",
                },
                {
                  question: "Can I volunteer if I'm a student?",
                  answer:
                    "We welcome student volunteers and can provide certificates for community service hours. We also offer internship opportunities for college students.",
                },
                {
                  question: "Is there an age requirement for volunteering?",
                  answer:
                    "For most in-person roles, volunteers should be at least 18 years old. However, we do have family-friendly events where younger volunteers can participate with parental supervision.",
                },
                {
                  question: "Will I receive training as a volunteer?",
                  answer:
                    "Yes, all volunteers receive orientation and training specific to their role. We want to ensure you have the knowledge and skills to be effective and comfortable in your volunteer position.",
                },
                {
                  question:
                    "Can I volunteer remotely from another city or country?",
                  answer:
                    "Yes, we offer virtual volunteering opportunities that can be done from anywhere with an internet connection, including content creation, digital marketing, translation, and virtual mentoring.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <p className="text-muted-foreground">
                Have more questions?{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact our volunteer coordinator
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-3 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Join our community of volunteers and help us create positive change
            across India.
          </p>
          <div className="pt-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="#volunteer-form">Apply Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
