import { createClient } from '@supabase/supabase-js';

const supabaseUrl :string = 'https://snrzdpnftozbwkokelfw.supabase.co'; // Your Supabase project URL
const supabaseAnonKey :string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucnpkcG5mdG96Yndrb2tlbGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5NTI4MzQsImV4cCI6MjAyNDUyODgzNH0.BfekWYb-l-sowoxrP1pPXNXUfpdJWwZXmFctXzvVcJs'; // Your Supabase anonymous key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
