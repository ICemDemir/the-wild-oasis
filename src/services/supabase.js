import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uvpsbvlvncgvnlehxqfl.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2cHNidmx2bmNndm5sZWh4cWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMTAxMDksImV4cCI6MjAyNjY4NjEwOX0.11k0ZWXHz7hXHxHyUaELxEiWEH6yBiXEaJ1iT7Be81E`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
