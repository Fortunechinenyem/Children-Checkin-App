import { db } from "../../utils/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const snapshot = await db
      .collection("checkIns")
      .where("status", "==", "checked-in")
      .get();
    const checkIns = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(checkIns);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
