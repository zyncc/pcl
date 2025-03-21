import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-3 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4 px-4 md:px-0">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span>RiseTogether</span>
          </Link>
          <p className="text-muted-foreground">
            Making a difference in the lives of people across India through your
            generous support.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4 px-4 md:px-0">
          <h3 className="font-medium text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/causes"
                className="text-muted-foreground hover:text-primary"
              >
                Our Causes
              </Link>
            </li>
            <li>
              <Link
                href="/donate"
                className="text-muted-foreground hover:text-primary"
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                href="/volunteer"
                className="text-muted-foreground hover:text-primary"
              >
                Volunteer
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 px-4 md:px-0">
          <h3 className="font-medium text-lg">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/refund-policy"
                className="text-muted-foreground hover:text-primary"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-muted-foreground hover:text-primary"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 px-4 md:px-0">
          <h3 className="font-medium text-lg">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                123 Charity Lane, New Delhi, 110001, India
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground">+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span className="text-muted-foreground">
                info@risetogether.org
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-3 mt-8 pt-8 border-t">
        <p className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} RiseTogether. All rights reserved.
          Registered Charity No. 123456789
        </p>
      </div>
    </footer>
  );
}
