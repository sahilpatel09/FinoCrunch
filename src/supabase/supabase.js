import { createClient } from '@supabase/supabase-js'

//Do not forget to change the variables in .env file. Rename .env.example to .env.
const supabaseUrl = process.env.VUE_APP_SUPABASE_URL
const supabaseAnonKey = process.env.VUE_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)