// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iuhqxuptuehjbfdyjifd.supabase.co"; // Twój URL do Supabase
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1aHF4dXB0dWVoamJmZHlqaWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NjA1NDQsImV4cCI6MjA0OTMzNjU0NH0.Ipg-8BnplkVtZ2e55WraH75bv1uBUnTqDSsIjoxypt4"; // Twój klucz anonimowy
 const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
