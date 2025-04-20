// app/api/rating/route.js
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("ratings")
    .select("value");

  if (error) {
    console.error("GET rating error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  const totalVotes = data.length;
  const average = totalVotes > 0
    ? data.reduce((sum, r) => sum + r.value, 0) / totalVotes
    : 0;

  return new Response(JSON.stringify({
    average: Number(average.toFixed(1)),
    totalVotes
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  const { value } = await req.json();

  if (typeof value !== "number" || value < 1 || value > 5) {
    return new Response(JSON.stringify({ error: "Invalid rating" }), {
      status: 400,
    });
  }

  const { error: insertError } = await supabase
    .from("ratings")
    .insert([{ value }]);

  if (insertError) {
    return new Response(JSON.stringify({ error: insertError.message }), {
      status: 500,
    });
  }

  // Setelah insert, ambil data baru
  const { data, error: fetchError } = await supabase
    .from("ratings")
    .select("value");

  if (fetchError) {
    return new Response(JSON.stringify({ error: fetchError.message }), {
      status: 500,
    });
  }

  const totalVotes = data.length;
  const average = totalVotes > 0
    ? data.reduce((sum, r) => sum + r.value, 0) / totalVotes
    : 0;

  return new Response(JSON.stringify({
    average: Number(average.toFixed(1)),
    totalVotes
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
