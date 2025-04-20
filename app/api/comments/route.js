import { supabase } from '@/lib/supabase';

export async function GET() {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Supabase error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  const { text } = await req.json();

  const { error: insertError } = await supabase
    .from('comments')
    .insert([{ text }]);

  if (insertError) {
    return new Response(JSON.stringify({ error: insertError.message }), { status: 500 });
  }

  const { data, error } = await supabase
    .from('comments')
    .select('*') // ini penting!
    .order('created_at', { ascending: false });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
