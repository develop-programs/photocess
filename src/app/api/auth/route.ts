import { NextResponse, NextRequest } from "next/server";
import { hashPassword } from "@/function/encryption";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(Request: NextRequest) {
  await prisma.$connect();
  try {
    const subscription = Request.nextUrl.searchParams.get("subscription")?.toString();
    const email = Request.nextUrl.searchParams.get("email")?.toString();

    if (subscription === true.toString()) {
      const user = await prisma.user.findUnique({
        where: { email },
      });
      const subscription = await prisma.subscription.findUnique({
        where: { userId: user?.id },
      });

      if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
      }
      return NextResponse.json({ message: "User found", user, subscription }, { status: 200 });
    } else {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
      }
      return NextResponse.json({ message: "User found", data: user }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(Request: NextRequest) {
  await prisma.$connect();
  try {
    const body = await Request.json();
    const Encrypted_Password = hashPassword(body.password);
    const userExists = await prisma.user.findUnique({ where: { email: body.email } });

    if (userExists) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: Encrypted_Password.toString(),
        image: body.image ? body.image : `https://ui-avatars.com/api/?name=${body.name}&size=256&background=random&color=FFFFFF&bold=true`,
      },
    });

    await prisma.subscription.create({
      data: {
        userId: user.id,
        credit: 400,
        plan: "FREE",
      },
    });

    return NextResponse.json({ message: "User created", data: user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function PATCH(Request: NextRequest) {
  await prisma.$connect();
  try {
    const body = await Request.json();
    const email = Request.nextUrl.searchParams.get("email")?.toString();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const updatedUser = await prisma.user.update({
      where: { email },
      data: { ...body },
    });

    return NextResponse.json({ message: "User updated", data: updatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(Request: NextRequest) {
  await prisma.$connect();
  try {
    const email = Request.nextUrl.searchParams.get("email")?.toString();

    const isUserFind = await prisma.user.findUnique({ where: { email } });

    if (!isUserFind) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const response = await prisma.user.delete({ where: { email } });

    return NextResponse.json({ message: "User deleted", data: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
