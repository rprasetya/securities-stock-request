import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "default-secret-key";

const accounts = [
  { username: "akun1", password: "passwordakun1" },
  { username: "akun2", password: "passwordakun2" },
];

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const user = accounts.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: "Username atau password salah" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

    const response = NextResponse.json({ message: "Login berhasil" });
    response.cookies.set({
      name: "authToken",
      value: token,
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict", 
      maxAge: 3600,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Terjadi kesalahan server", details: error.message },
      { status: 500 }
    );
  }
}
