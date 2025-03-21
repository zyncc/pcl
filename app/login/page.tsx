import { Heart } from "lucide-react";
import ClientLogin from "./_client";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
export default async function AuthPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.session) {
    return redirect("/");
  }
  return (
    <div className="container mx-auto px-3 flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex justify-center">
            <Heart className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome to RiseTogether
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in to your account or create a new one
          </p>
          <ClientLogin />
        </div>
      </div>
    </div>
  );
}
