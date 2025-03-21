"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormSuccessProps {
  title: string;
  description: string;
  buttonText: string;
  onReset: () => void;
}

export function FormSuccess({
  title,
  description,
  buttonText,
  onReset,
}: FormSuccessProps) {
  return (
    <div className="text-center py-8 space-y-4">
      <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
        <Check className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground px-4">{description}</p>
      <Button onClick={onReset} variant="outline" className="mt-4">
        {buttonText}
      </Button>
    </div>
  );
}
