export default async function handler(req, res) {
  console.log("revalidating...");
  let revalidated = false;
  try {
    await res.revalidate("/isr-on-demand");
    revalidated = true;
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.json({
    revalidated,
  });
}
