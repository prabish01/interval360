import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof (body as { email?: unknown })?.email === "string"
    ? (body as { email: string }).email.trim().toLowerCase()
    : "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    await prisma.subscriber.create({ data: { email } });
  } catch (err) {
    const isDuplicate =
      err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002";
    if (!isDuplicate) {
      console.error("Newsletter subscribe failed:", err);
      return NextResponse.json({ error: "Something went wrong. Try again later." }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
