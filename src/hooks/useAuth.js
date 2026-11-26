import { signUpUser, loginUser } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUpUser, //tells React Query which service function to execute.
  });
};

export const useLogIn = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
