import { getComments, addComment } from "@/lib/db";

export async function GET() {
  return Response.json(getComments());
}

export async function POST(req) {
  const { text } = await req.json();
  const updated = addComment({ text });
  return Response.json(updated);
}
