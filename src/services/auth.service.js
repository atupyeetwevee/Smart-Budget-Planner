import { supabase } from "@/lib/supabase";

const signUpUser = async ({ email, password }) =>
  await supabase.auth.signUp({
    email,
    password,
  });

export default signUpUser;
