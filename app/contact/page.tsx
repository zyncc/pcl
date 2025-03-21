import Link from "next/link";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-3">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions or want to get involved? We&apos;d love to hear
              from you.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Whether you have a question about our programs, donations,
                  volunteering, or anything else, our team is ready to answer
                  all your questions.
                </p>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-muted-foreground mt-1">
                        For general inquiries:
                      </p>
                      <p className="text-primary">info@helpinghandsindia.org</p>
                      <p className="text-muted-foreground mt-1">
                        For donation support:
                      </p>
                      <p className="text-primary">
                        donations@helpinghandsindia.org
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-3">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Find quick answers to common questions.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  question: "How can I donate to a specific cause?",
                  answer:
                    "You can select a specific cause during the donation process on our website, or mention the cause in the memo line of your check.",
                },
                {
                  question: "Is my donation tax-deductible?",
                  answer:
                    "Yes, all donations to Helping Hands India are eligible for tax deduction under Section 80G of the Income Tax Act.",
                },
                {
                  question: "How can I volunteer with your organization?",
                  answer:
                    "Visit our Volunteer page to see current opportunities and fill out our volunteer application form.",
                },
                {
                  question: "Can my company partner with Helping Hands India?",
                  answer:
                    "Yes, we offer various corporate partnership opportunities. Please contact our partnerships team at partnerships@helpinghandsindia.org.",
                },
                {
                  question: "How is my donation used?",
                  answer:
                    "At least 85% of your donation goes directly to program expenses, with the remainder used for essential administrative costs and fundraising.",
                },
                {
                  question: "Can I visit your projects?",
                  answer:
                    "Yes, we organize periodic site visits for donors and supporters. Contact us to learn about upcoming opportunities.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold">{faq.question}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground">
                Don&apos;t see your question here?{" "}
                <Link
                  href="#contact-form"
                  className="text-primary hover:underline"
                >
                  Contact us
                </Link>{" "}
                for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-3">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to receive updates on our work, impact
              stories, and upcoming events.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="gap-2">
                <Send className="h-4 w-4" /> Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              We respect your privacy and will never share your information. You
              can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-3">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Find Us</h2>
              <p className="text-muted-foreground">
                Visit our office in New Delhi to learn more about our work.
              </p>
            </div>

            <div className="aspect-video bg-background rounded-lg overflow-hidden">
              {/* In a real application, you would embed a Google Map here */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">
                  Interactive Map Would Be Embedded Here
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button variant="outline" asChild>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
