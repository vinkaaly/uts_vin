import { getRatings, addRating } from "@/lib/db";

export async function GET() {
  const ratings = getRatings();
  const total = ratings.reduce((a, b) => a + b, 0);
  const average = ratings.length ? (total / ratings.length).toFixed(1) : 0;
  return Response.json({ average: parseFloat(average), totalVotes: ratings.length });
}

export async function POST(req) {
  const { value } = await req.json();
  const result = addRating(value);
  return Response.json(result);
}
