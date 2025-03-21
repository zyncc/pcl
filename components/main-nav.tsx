"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "./ui/dialog";
import { authClient } from "@/lib/auth-client";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/causes",
    label: "Causes",
  },
  {
    href: "/volunteer",
    label: "Volunteer",
  },
  {
    href: "/login",
    label: "Login",
  },
];

export function MainNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: session } = authClient.useSession();
  return (
    <div className="flex items-center gap-6">
      <nav className="hidden md:flex items-center gap-6">
        {routes.map((route) => {
          if (route.href === "/login" && session?.session) {
            return (
              <Link
                key={"/account"}
                href={"/account"}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/account"
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                Account
              </Link>
            );
          }
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          );
        })}
      </nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <DialogTitle className="hidden">Menu</DialogTitle>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="px-6">
          <nav className="flex flex-col gap-4 mt-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  pathname === route.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-2 order-3">
        <Button
          asChild
          variant="default"
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link href="/causes">Donate Now</Link>
        </Button>
      </div>
    </div>
  );
}
