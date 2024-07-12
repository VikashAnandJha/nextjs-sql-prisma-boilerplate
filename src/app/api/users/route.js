import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
  const users = await prisma.user.findMany();
  return NextResponse.json({ users });
}
