import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "your-secret-key"; // Use a secure key in production

const accounts = [
  { username: "akun1", password: "passwordakun1" },
  { username: "akun2", password: "passwordakun2" },
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    const user = accounts.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      const token = jwt.sign({ username: user.username }, SECRET_KEY, {
        expiresIn: "1h",
      });
      return res.status(200).json({ token });
    }

    return res.status(401).json({ error: "Username atau password salah" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}