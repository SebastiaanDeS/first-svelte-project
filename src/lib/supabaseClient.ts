import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://snrzdpnftozbwkokelfw.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucnpkcG5mdG96Yndrb2tlbGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5NTI4MzQsImV4cCI6MjAyNDUyODgzNH0.BfekWYb-l-sowoxrP1pPXNXUfpdJWwZXmFctXzvVcJs'
)