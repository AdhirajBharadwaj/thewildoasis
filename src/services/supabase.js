
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://yonehmmhwvwtrwzuhyuc.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvbmVobW1od3Z3dHJ3enVoeXVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4NzA1NzcsImV4cCI6MjAzNzQ0NjU3N30.DOP_ccHnGWhFMgYMnaL6SLzChIgrNhxCUdC6Gk7zWHI"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

