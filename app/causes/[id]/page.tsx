import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Share2, Heart, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DonationForm } from "@/components/donation-form";

const getCauseData = (id: string) => {
  const causes = {
    "education-for-all": {
      id: "education-for-all",
      title: "Education for All",
      category: "Education",
      image: "https://placehold.co/800x500",
      description:
        "Providing quality education to underprivileged children across rural India through learning centers, teacher training, and educational materials.",
      longDescription: `
        <p>Education is a fundamental right, yet millions of children in rural India lack access to quality education. Our Education for All initiative aims to bridge this gap by establishing learning centers in underserved communities, training teachers in modern pedagogical methods, and providing essential educational materials.</p>
        
        <p>Through this program, we've already established 50 learning centers across 10 states, benefiting over 5,000 children. Our approach focuses on:</p>
        
        <ul>
          <li>Creating safe, engaging learning environments</li>
          <li>Providing trained teachers who understand local contexts</li>
          <li>Supplying textbooks, stationery, and digital learning tools</li>
          <li>Engaging parents and communities in the educational process</li>
          <li>Offering scholarships for higher education to promising students</li>
        </ul>
        
        <p>Your support will help us expand this program to reach an additional 5,000 children in the next year, opening doors to opportunities they would otherwise never have.</p>
      `,
      raised: 850000,
      goal: 1500000,
      donors: 342,
      location: "Multiple States",
      startDate: "2023-01-15",
      endDate: "2023-12-31",
      gallery: [
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
      ],
      updates: [
        {
          date: "2023-10-15",
          title: "New Learning Center in Rajasthan",
          content:
            "We're excited to announce the opening of our newest learning center in rural Rajasthan, which will serve 100 children from 5 surrounding villages.",
        },
        {
          date: "2023-08-22",
          title: "Teacher Training Program Completed",
          content:
            "50 teachers have successfully completed our intensive training program, equipping them with modern teaching methodologies and child-centric approaches.",
        },
        {
          date: "2023-06-10",
          title: "Digital Library Initiative Launched",
          content:
            "We've launched our digital library initiative, providing tablets loaded with educational content to 20 learning centers across India.",
        },
      ],
      testimonials: [
        {
          name: "Sunita Devi",
          role: "Parent",
          image: "https://placehold.co/100x100",
          quote:
            "My daughter never had the opportunity to attend school regularly until the learning center opened in our village. Now she's top of her class and dreams of becoming a teacher.",
        },
        {
          name: "Rahul Kumar",
          role: "Student",
          image: "https://placehold.co/100x100",
          quote:
            "I used to struggle with mathematics, but the teachers at the learning center helped me understand concepts in a way that makes sense. I now love solving problems!",
        },
        {
          name: "Meena Sharma",
          role: "Teacher",
          image: "https://placehold.co/100x100",
          quote:
            "The training I received has transformed how I teach. I now use interactive methods that engage students and make learning fun and effective.",
        },
      ],
    },
    "clean-water-initiative": {
      id: "clean-water-initiative",
      title: "Clean Water Initiative",
      category: "Water",
      image: "https://placehold.co/800x500",
      description:
        "Installing water purification systems in villages affected by contaminated water sources, preventing waterborne diseases and improving health outcomes.",
      longDescription: `
        <p>Access to clean water is a basic necessity, yet millions in rural India struggle with contaminated water sources that cause serious health issues. Our Clean Water Initiative addresses this critical need by installing community water purification systems, revitalizing traditional water bodies, and educating communities about water conservation and hygiene.</p>
        
        <p>Through this program, we've already:</p>
        
        <ul>
          <li>Installed 75 water purification systems serving over 100,000 people</li>
          <li>Revitalized 30 traditional water bodies like step wells and ponds</li>
          <li>Built 500+ rainwater harvesting structures</li>
          <li>Trained 200 community members as water quality monitors</li>
          <li>Reduced waterborne diseases by 60% in target communities</li>
        </ul>
        
        <p>Your support will help us expand this vital work to more villages in Maharashtra, Gujarat, and Rajasthan, where water scarcity and contamination are severe problems affecting thousands of families.</p>
      `,
      raised: 1200000,
      goal: 2000000,
      donors: 528,
      location: "Maharashtra, Gujarat, Rajasthan",
      startDate: "2023-02-10",
      endDate: "2023-12-31",
      gallery: [
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
      ],
      updates: [
        {
          date: "2023-10-05",
          title: "New Purification Systems in 10 Villages",
          content:
            "We've successfully installed water purification systems in 10 additional villages in drought-prone regions of Maharashtra.",
        },
        {
          date: "2023-07-18",
          title: "Water Conservation Training Completed",
          content:
            "300 community members have completed our water conservation training program, learning techniques to maximize water efficiency.",
        },
        {
          date: "2023-05-22",
          title: "Traditional Step Well Restoration",
          content:
            "We've completed the restoration of a 200-year-old step well in Rajasthan, providing a sustainable water source for three villages.",
        },
      ],
      testimonials: [
        {
          name: "Lakshmi Patel",
          role: "Village Resident",
          image: "https://placehold.co/100x100",
          quote:
            "Before the water purification system, my children were constantly sick with stomach problems. Now they're healthy and can attend school regularly.",
        },
        {
          name: "Ramesh Singh",
          role: "Community Leader",
          image: "https://placehold.co/100x100",
          quote:
            "The transformation in our village has been remarkable. Women no longer have to walk miles for clean water, giving them time for other productive activities.",
        },
        {
          name: "Dr. Anjali Desai",
          role: "Local Physician",
          image: "https://placehold.co/100x100",
          quote:
            "I've seen a dramatic decrease in waterborne diseases in communities with these purification systems. It's saving lives and reducing healthcare burdens.",
        },
      ],
    },
    "rural-healthcare": {
      id: "rural-healthcare",
      title: "Rural Healthcare Access",
      category: "Healthcare",
      image: "https://placehold.co/800x500",
      description:
        "Bringing essential healthcare services to remote villages through mobile clinics, telemedicine, and training community health workers.",
      longDescription: `
        <p>Healthcare access remains a significant challenge in rural India, with many communities located far from the nearest medical facilities. Our Rural Healthcare Access program bridges this gap through innovative solutions that bring quality healthcare directly to underserved communities.</p>
        
        <p>Our comprehensive approach includes:</p>
        
        <ul>
          <li>Operating 15 mobile health clinics that visit remote villages on a regular schedule</li>
          <li>Establishing telemedicine centers connecting patients with specialists in urban hospitals</li>
          <li>Training local community health workers to provide basic care and health education</li>
          <li>Conducting regular health camps focusing on preventive care and early detection</li>
          <li>Providing essential medicines and diagnostic services at minimal or no cost</li>
        </ul>
        
        <p>To date, we've provided healthcare services to over 75,000 individuals across Uttar Pradesh, Bihar, and Jharkhand. Your support will help us expand our reach to more villages and introduce specialized care for maternal health, chronic diseases, and mental health.</p>
      `,
      raised: 750000,
      goal: 1800000,
      donors: 289,
      location: "Uttar Pradesh, Bihar, Jharkhand",
      startDate: "2023-03-05",
      endDate: "2024-03-04",
      gallery: [
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
      ],
      updates: [
        {
          date: "2023-09-28",
          title: "New Mobile Clinic Launched",
          content:
            "We've added a new fully-equipped mobile clinic to serve 15 additional villages in northern Bihar.",
        },
        {
          date: "2023-08-12",
          title: "Telemedicine Centers Expanded",
          content:
            "Five new telemedicine centers have been established, connecting patients with specialists in cardiology, dermatology, and pediatrics.",
        },
        {
          date: "2023-06-30",
          title: "Community Health Worker Training",
          content:
            "50 new community health workers have completed their training and are now serving their local communities.",
        },
      ],
      testimonials: [
        {
          name: "Geeta Devi",
          role: "Patient",
          image: "https://placehold.co/100x100",
          quote:
            "The mobile clinic diagnosed my diabetes early and helped me manage it. Without them, I wouldn't have known until it was much worse.",
        },
        {
          name: "Sanjay Yadav",
          role: "Community Health Worker",
          image: "https://placehold.co/100x100",
          quote:
            "Being able to help my own community is incredibly rewarding. I've seen firsthand how early intervention saves lives.",
        },
        {
          name: "Dr. Priya Sharma",
          role: "Mobile Clinic Doctor",
          image: "https://placehold.co/100x100",
          quote:
            "The gratitude we receive from patients is overwhelming. Many tell us they haven't seen a doctor in years before our clinic arrived.",
        },
      ],
    },
    "flood-relief": {
      id: "flood-relief",
      title: "Flood Relief & Rehabilitation",
      category: "Disaster Relief",
      image: "https://placehold.co/800x500",
      description:
        "Providing emergency assistance and long-term rehabilitation support to communities affected by devastating floods in Eastern India.",
      longDescription: `
        <p>Every year, devastating floods affect millions of people across Eastern India, destroying homes, crops, and livelihoods. Our Flood Relief & Rehabilitation program provides both immediate emergency response and long-term support to help communities recover and build resilience against future disasters.</p>
        
        <p>Our comprehensive disaster response includes:</p>
        
        <ul>
          <li>Rapid deployment of emergency relief teams with food, clean water, and medical aid</li>
          <li>Temporary shelter and essential supplies for displaced families</li>
          <li>Reconstruction of homes and community infrastructure</li>
          <li>Livelihood restoration through replacement of lost tools, equipment, and livestock</li>
          <li>Disaster preparedness training to reduce vulnerability to future floods</li>
        </ul>
        
        <p>In the past year alone, we've provided emergency relief to over 25,000 flood-affected individuals and helped rebuild 500 homes. Your support will strengthen our capacity to respond quickly to future disasters and expand our rehabilitation efforts in the most vulnerable communities.</p>
      `,
      raised: 950000,
      goal: 1200000,
      donors: 412,
      location: "Assam, West Bengal, Bihar",
      startDate: "2023-06-15",
      endDate: "2024-06-14",
      gallery: [
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
        "https://placehold.co/400x300",
      ],
      updates: [
        {
          date: "2023-09-10",
          title: "Rehabilitation Work in Assam",
          content:
            "Reconstruction of 100 homes has been completed in flood-affected villages of Assam, with families moving back into permanent housing.",
        },
        {
          date: "2023-08-05",
          title: "Emergency Response to New Flooding",
          content:
            "Our teams have been deployed to newly affected areas in Bihar, providing immediate relief to 5,000 displaced individuals.",
        },
        {
          date: "2023-07-22",
          title: "Livelihood Restoration Program",
          content:
            "300 farming families have received seeds, tools, and livestock to restart their agricultural activities after devastating floods.",
        },
      ],
      testimonials: [
        {
          name: "Ajit Das",
          role: "Flood Survivor",
          image: "https://placehold.co/100x100",
          quote:
            "We lost everything in the floods - our home, our crops, our belongings. The immediate help we received kept us going, and now with our rebuilt home, we can start again.",
        },
        {
          name: "Mamata Sarkar",
          role: "Community Leader",
          image: "https://placehold.co/100x100",
          quote:
            "The disaster preparedness training has made a huge difference. This year, we were able to move people and some belongings to safety before the worst flooding hit.",
        },
        {
          name: "Ravi Kumar",
          role: "Farmer",
          image: "https://placehold.co/100x100",
          quote:
            "Receiving new seeds and tools after the floods meant I could plant again and feed my family. Without this support, we would have had to migrate to the city.",
        },
      ],
    },
  };

  return causes[id as keyof typeof causes];
};

export default async function CausePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cause = getCauseData((await params).id);
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
            src={cause.image || "/placeholder.svg"}
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
                  {cause.category}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {cause.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-3">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Cause Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Info */}
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

              {/* Tabs */}
              <Tabs defaultValue="about">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-6 pt-4">
                  <div
                    className="prose prose-sm max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: cause.longDescription }}
                  />

                  <h3 className="text-xl font-bold mt-8">Testimonials</h3>
                  <div className="grid sm:grid-cols-2 gap-6 mt-4">
                    {cause.testimonials.map((testimonial, index) => (
                      <Card key={index}>
                        <CardContent className="p-6 space-y-4">
                          <div className="flex items-center gap-4">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={60}
                              height={60}
                              className="rounded-full"
                            />
                            <div>
                              <h4 className="font-semibold">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                          <p className="text-muted-foreground italic">
                            &quot;{testimonial.quote}&quot;
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="updates" className="space-y-6 pt-4">
                  <div className="space-y-6">
                    {cause.updates.map((update, index) => (
                      <Card key={index}>
                        <CardContent className="p-6 space-y-2">
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold">{update.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {new Date(update.date).toLocaleDateString()}
                            </p>
                          </div>
                          <p className="text-muted-foreground">
                            {update.content}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {cause.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-video overflow-hidden rounded-lg"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Gallery image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Similar Causes */}
              <div className="space-y-6 pt-8">
                <h3 className="text-xl font-bold">Similar Causes</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[1, 2].map((_, index) => (
                    <Card key={index} className="overflow-hidden">
                      <Image
                        src="https://placehold.co/300x200"
                        alt="Similar cause"
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover"
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

            {/* Right Column - Donation Form */}
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
                  <DonationForm />
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>{cause.donors} people have donated</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold">Need Help?</h3>
                  <p className="text-sm text-muted-foreground">
                    Have questions about this cause or how to donate? Our team
                    is here to help.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
