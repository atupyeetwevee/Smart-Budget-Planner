import {
  signUpUser,
  loginUser,
  resetPassword,
  updatePassword,
  logoutUser,
} from "@/services/auth.service";
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

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
  });
};

export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: updatePassword,
  });
};

export const useLogOut = () => {
  return useMutation({
    mutationFn: logoutUser,
  });
};
