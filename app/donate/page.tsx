import Image from "next/image";
import Link from "next/link";
import { Shield, Heart, Receipt, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DonationForm } from "@/components/donation-form";

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-3">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Make a Donation</h1>
            <p className="text-xl text-muted-foreground">
              Your generosity can transform lives across India. Every
              contribution, no matter the size, makes a difference.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-3">
          <Tabs defaultValue="general" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="general">General Donation</TabsTrigger>
              <TabsTrigger value="specific">Specific Cause</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-6 space-y-8">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">
                        Donate to Our General Fund
                      </h2>
                      <p className="text-muted-foreground">
                        Your donation to our general fund allows us to allocate
                        resources where they&apos;re needed most, responding
                        quickly to emerging needs across all our programs.
                      </p>
                    </div>
                    <DonationForm />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specific" className="mt-6 space-y-8">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold">
                        Choose a Specific Cause
                      </h2>
                      <p className="text-muted-foreground">
                        Select a cause that resonates with you and direct your
                        donation to support that specific initiative.
                      </p>
                    </div>

                    <div className="grid gap-4">
                      {[
                        {
                          id: "education-for-all",
                          title: "Education for All",
                          description:
                            "Support quality education for underprivileged children",
                          image: "https://placehold.co/100",
                        },
                        {
                          id: "clean-water-initiative",
                          title: "Clean Water Initiative",
                          description:
                            "Provide clean water access to rural communities",
                          image: "https://placehold.co/100",
                        },
                        {
                          id: "rural-healthcare",
                          title: "Rural Healthcare",
                          description:
                            "Bring essential healthcare to remote villages",
                          image: "https://placehold.co/100",
                        },
                        {
                          id: "flood-relief",
                          title: "Flood Relief",
                          description:
                            "Support communities affected by devastating floods",
                          image: "https://placehold.co/100",
                        },
                      ].map((cause) => (
                        <Card key={cause.id} className="overflow-hidden">
                          <Link
                            href={`/causes/${cause.id}`}
                            className="flex items-center p-4 hover:bg-muted/50 transition-colors"
                          >
                            <Image
                              src={cause.image || "/placeholder.svg"}
                              alt={cause.title}
                              width={60}
                              height={60}
                              className="rounded-md mr-4"
                            />
                            <div>
                              <h3 className="font-medium">{cause.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {cause.description}
                              </p>
                            </div>
                            <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground" />
                          </Link>
                        </Card>
                      ))}
                    </div>

                    <div className="text-center">
                      <Button asChild variant="outline">
                        <Link href="/causes">View All Causes</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-3 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">
              Why Donate to Helping Hands India?
            </h2>
            <p className="text-muted-foreground">
              Your donation makes a real difference in the lives of those who
              need it most. Here&apos;s why you can trust us with your
              generosity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Transparency</h3>
                <p className="text-muted-foreground">
                  We maintain complete transparency in our operations and
                  finances. Detailed reports show exactly how your donation is
                  used.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Maximum Impact</h3>
                <p className="text-muted-foreground">
                  85% of your donation goes directly to program expenses,
                  ensuring maximum impact for those in need across India.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Receipt className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Tax Benefits</h3>
                <p className="text-muted-foreground">
                  All donations are eligible for tax deduction under Section 80G
                  of the Income Tax Act. You&apos;ll receive a receipt
                  immediately.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16">
        <div className="container mx-auto px-3 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Other Ways to Give</h2>
            <p className="text-muted-foreground">
              Beyond one-time donations, there are many ways you can support our
              mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Monthly Giving</h3>
                <p className="text-muted-foreground">
                  Join our community of monthly donors and provide sustained
                  support that helps us plan long-term projects with confidence.
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Convenient automatic monthly donations</li>
                  <li>Special updates on the impact of your support</li>
                  <li>Easily modify or cancel at any time</li>
                </ul>
                <Button asChild>
                  <Link href="#monthly">Become a Monthly Donor</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">
                  Corporate Partnerships
                </h3>
                <p className="text-muted-foreground">
                  Partner with us to fulfill your CSR goals while making a
                  meaningful difference in communities across India.
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Customized partnership opportunities</li>
                  <li>Employee engagement programs</li>
                  <li>Impact reporting and recognition</li>
                </ul>
                <Button asChild>
                  <Link href="/corporate-partnerships">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Legacy Giving</h3>
                <p className="text-muted-foreground">
                  Create a lasting impact by including Helping Hands India in
                  your will or estate planning.
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Leave a meaningful legacy</li>
                  <li>Support causes you care about for generations</li>
                  <li>Potential tax benefits for your estate</li>
                </ul>
                <Button asChild>
                  <Link href="/legacy-giving">Learn About Legacy Giving</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Fundraise for Us</h3>
                <p className="text-muted-foreground">
                  Create your own fundraising campaign for birthdays,
                  anniversaries, or special events.
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Easy-to-use online fundraising platform</li>
                  <li>Share with friends and family</li>
                  <li>Track your impact in real-time</li>
                </ul>
                <Button asChild>
                  <Link href="/start-fundraiser">Start a Fundraiser</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-3">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Find answers to common questions about donations and tax
                benefits.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Is my donation tax-deductible?",
                  answer:
                    "Yes, all donations to Helping Hands India are eligible for tax deduction under Section 80G of the Income Tax Act. You will receive a tax receipt via email immediately after your donation.",
                },
                {
                  question: "Can I donate in memory or honor of someone?",
                  answer:
                    "During the donation process, you can indicate if your gift is in memory or honor of someone special. We can also send a notification of your tribute gift to a designated recipient.",
                },
                {
                  question: "How secure is my payment information?",
                  answer:
                    "We use industry-standard encryption and security protocols to protect your payment information. We do not store your credit card details on our servers.",
                },
                {
                  question: "Can I donate if I'm outside India?",
                  answer:
                    "Yes, we accept international donations. The payment gateway will automatically convert your currency to Indian Rupees at the current exchange rate.",
                },
                {
                  question: "How can I get a receipt for my donation?",
                  answer:
                    "A receipt will be automatically emailed to you immediately after your donation is processed. If you don't receive it, please check your spam folder or contact our donor support team.",
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
                  Contact our donor support team
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-3 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Your support today can transform lives across India. Join us in
            creating lasting change.
          </p>
          <div className="pt-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="#top">Donate Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
