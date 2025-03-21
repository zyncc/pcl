"use server";

import { UUID } from "@/lib/create-uuid";
import { prisma } from "@/lib/prisma";
import { CauseFormValues, DonationFormValues } from "@/lib/zodSchemas";
import { User } from "@prisma/client";

export async function CreateCause(data: CauseFormValues) {
  const goal = parseInt(data.goal);
  await prisma.cause.create({
    data: {
      id: UUID(),
      raised: 0,
      donors: 0,
      goal,
      category: data.category,
      description: data.description,
      longDescription: data.longDescription,
      title: data.title,
      location: data.location,
      startDate: data.startDate,
      endDate: data.endDate,
      featured: data.featured,
      image: data.image,
    },
  });
}

export async function CreateDonation(
  data: DonationFormValues,
  causeId: string,
  razorPayOrderId: string
) {
  let user: User | null = null;

  try {
    user = await prisma.user.create({
      data: {
        id: UUID(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        emailVerified: false,
      },
    });
  } catch (error) {
    console.error("User creation failed, trying to find existing user:");
    console.error(error);
    user = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!user) {
      throw new Error("User creation failed and existing user not found.");
    }
  }

  const finalAmount =
    data.amount && data.amount !== "custom"
      ? Number(data.amount)
      : Number(data.customAmount);

  await prisma.donation.create({
    data: {
      id: UUID(),
      razorPayOrderId,
      amount: finalAmount,
      causeId: causeId,
      userId: user.id,
    },
  });
}
