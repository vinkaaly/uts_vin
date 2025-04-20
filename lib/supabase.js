// lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rcqhrbwwswpmmxthiqoy.supabase.co"; // Ganti dengan milikmu
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjcWhyYnd3c3dwbW14dGhpcW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNDQ2NTksImV4cCI6MjA2MDYyMDY1OX0.GKK4cy97bJ8vVKnUywLoVRI_CBPc7exyraiqU-PRQvo"; // Ganti dengan milikmu
export const supabase = createClient(supabaseUrl, supabaseKey);
