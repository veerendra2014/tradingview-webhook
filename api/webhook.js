export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method allowed" });
  }

  console.log("Webhook Received:", req.body);

  return res.status(200).json({
    status: "success",
    received: req.body
  });
}
