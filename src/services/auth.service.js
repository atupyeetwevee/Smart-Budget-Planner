import { supabase } from "@/lib/supabase";

const signUpUser = async ({ name, email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,

    options: {
      data: {
        full_name: name,
      },
    },
  });

  if (error) throw error;

  return data;
};

export default signUpUser;
