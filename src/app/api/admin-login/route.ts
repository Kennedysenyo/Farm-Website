import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();
  const adminSecret = process.env.ADMIN_SECRET;

  if (!adminSecret) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  if (password === adminSecret) {
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_auth", adminSecret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/" // Ensure it's accessible across all routes
    });
    return res;
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
