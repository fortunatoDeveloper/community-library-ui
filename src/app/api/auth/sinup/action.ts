"use server";

import axios from "../../../../api";
import { signupService } from "../../../../lib/authService";

interface FormState {
  success?: boolean;
  error?: boolean;
  message?: string;
}

export async function signup(_: FormState, formData: FormData): Promise<FormState> {
  try {
    const payload = await signupService(formData);
    await axios.post("/auth/register", payload);

    return {
      success: true,
      error: false,
      message: "Conta criada com sucesso! Redirecionando para o login...",
    };
  } catch (error) {
    console.log("Register signup error: ", { error });

    return {
      ..._,
      error: true,
      message: "Não foi possível cadastrar usuário",
    };
  }
}
