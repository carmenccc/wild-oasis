import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mftjiinogqzvywaavbxl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mdGppaW5vZ3F6dnl3YWF2YnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2ODcxMTEsImV4cCI6MjA1MzI2MzExMX0.IJnmjlNlHTj0dTGruUul6XEsjaP_XItxFgIPpYyI45A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
