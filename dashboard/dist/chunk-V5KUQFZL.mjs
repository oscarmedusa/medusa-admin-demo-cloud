import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/auth.tsx
import { useMutation } from "@tanstack/react-query";
var useSignInWithEmailPassword = (options) => {
  return useMutation({
    mutationFn: (payload) => sdk.auth.login("user", "emailpass", payload),
    onSuccess: async (data, variables, context) => {
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useSignUpWithEmailPass = (options) => {
  return useMutation({
    mutationFn: (payload) => sdk.auth.register("user", "emailpass", payload),
    onSuccess: async (data, variables, context) => {
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useLogout = (options) => {
  return useMutation({
    mutationFn: () => sdk.auth.logout(),
    ...options
  });
};

export {
  useSignInWithEmailPassword,
  useSignUpWithEmailPass,
  useLogout
};
