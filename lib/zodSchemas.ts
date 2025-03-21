import * as z from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const volunteerFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().optional(),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(1, { message: "Please select a state" }),
  pincode: z.string().min(6, { message: "Please enter a valid PIN code" }),
  interests: z
    .string()
    .min(1, { message: "Please select an area of interest" }),
  availability: z
    .string()
    .min(1, { message: "Please select your availability" }),
  commitment: z
    .string()
    .min(1, { message: "Please select your time commitment" }),
  startDate: z.date().optional(),
  skills: z.string().optional(),
  motivation: z
    .string()
    .min(10, { message: "Please tell us why you want to volunteer" }),
  references: z.boolean().optional(),
  backgroundCheck: z.boolean().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

export const donationFormSchema = z.object({
  amount: z.string().min(1, { message: "Please select or enter an amount" }),
  customAmount: z.string().optional(),
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().optional(),
});

export type DonationFormValues = z.infer<typeof donationFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  remember: z.boolean().optional(),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" }),
    lastName: z
      .string()
      .min(1, { message: "Last name must be at least 1 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerFormSchema>;

export const causeFormSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  category: z.string().min(1, { message: "Please select a category" }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters" }),
  longDescription: z
    .string()
    .min(100, { message: "Long description must be at least 100 characters" }),
  goal: z.string().min(1, { message: "Please enter a fundraising goal" }),
  location: z.string().min(2, { message: "Location is required" }),
  startDate: z.date(),
  endDate: z.date(),
  featured: z.boolean(),
  image: z.string(),
});

export type CauseFormValues = z.infer<typeof causeFormSchema>;
