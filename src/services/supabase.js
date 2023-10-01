import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://traxgpezajucfbzmvloz.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyYXhncGV6YWp1Y2Ziem12bG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNjQ2NTIsImV4cCI6MjAxMTc0MDY1Mn0.JN5LDJroYL9hydumExUsggv-ap6agOrnI0j4xAKUU1o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;