import { db } from "../../utils/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;

    const checkInDoc = await db
      .collection("checkIns")
      .where("name", "==", name)
      .where("status", "==", "checked-in")
      .get();

    if (!checkInDoc.empty) {
      const doc = checkInDoc.docs[0];
      await doc.ref.update({
        status: "checked-out",
        timestamp: new Date().toISOString(),
      });
      res.status(200).json({ message: "Child checked out successfully." });
    } else {
      res
        .status(404)
        .json({ message: "Child not found or already checked out." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
