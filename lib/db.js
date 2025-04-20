import { supabase } from './supabase';

export async function getComments() {
  // Ambil data komentar dari Supabase
  const { data, error } = await supabase.from('comments').select('*');
  if (error) {
    console.error('Error fetching comments:', error.message);
    return [];
  }
  return data;
}

export async function addComment(commentText) {
  // Menambahkan komentar baru ke Supabase
  const { data, error } = await supabase
    .from('comments')
    .insert([{ text: commentText }]);

  if (error) {
    console.error('Error adding comment:', error.message);
    return []; // Jika error, kembalikan array kosong
  }

  // Mengambil data komentar terbaru setelah penambahan
  const { data: updatedComments, error: fetchError } = await supabase
    .from('comments')
    .select('*');
  
  if (fetchError) {
    console.error('Error fetching updated comments:', fetchError.message);
    return [];
  }

  return updatedComments; // Mengembalikan komentar terbaru
}

export async function getRating() {
  // Ambil data rating dari Supabase
  const { data, error } = await supabase.from('ratings').select('value');
  if (error) {
    console.error('Error fetching ratings:', error.message);
    return { average: 0, totalVotes: 0 };
  }

  const totalVotes = data.length;
  const average = totalVotes
    ? (data.reduce((a, b) => a + b.value, 0) / totalVotes).toFixed(1)
    : 0;

  return { average, totalVotes };
}

export async function addRating(value) {
  // Menambahkan rating baru ke Supabase
  const { data, error } = await supabase.from('ratings').insert([{ value }]);
  if (error) {
    console.error('Error adding rating:', error.message);
    return { average: 0, totalVotes: 0 };
  }

  // Mengambil dan mengembalikan nilai rata-rata dan total vote setelah penambahan
  return await getRating();
}
