import { db } from "../../utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;

    await db.collection("checkIns").add({
      name,
      status: "checked-in",
      timestamp: new Date().toISOString(),
    });

    res.status(200).json({ message: "Child checked in successfully." });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
