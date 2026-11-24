import { supabase } from "@/lib/supabase";

const signUpApi = async ({ email, password }) =>
  await supabase.auth.signUp({
    email,
    password,
  });
