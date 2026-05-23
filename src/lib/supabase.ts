import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;


export const supabase = createClient(supabaseUrl, supabaseKey);

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}
