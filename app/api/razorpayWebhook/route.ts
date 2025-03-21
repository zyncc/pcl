import { NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const rzp_response = await req.json();
  const paymentId = rzp_response.payload.payment.entity.id;
  const orderId = rzp_response.payload.payment.entity.order_id;
  const razorpaySignature = req.headers.get("x-razorpay-signature");
  const generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(JSON.stringify(rzp_response))
    .digest("hex");

  if (generatedSignature !== razorpaySignature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const donation = await prisma.donation.update({
    where: {
      razorPayOrderId: orderId,
    },
    data: {
      paymentId,
      paymentStatus: true,
    },
  });

  await prisma.cause.update({
    where: {
      id: donation.causeId,
    },
    data: {
      raised: {
        increment: donation.amount,
      },
    },
  });

  console.log(paymentId);
  console.log(orderId);
  return NextResponse.json({ status: "ok" }, { status: 200 });
}
