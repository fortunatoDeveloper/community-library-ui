"use client";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import TextField from "../../components/Form/TextField";
import { signup } from "../api/auth/sinup/action";
import PasswordFields from "./PasswordFields";
import Alert from "../../components/Alert";

const initialState = {
  success: false,
  error: false,
  message: "",
};

export default function RegisterPage() {
  const router = useRouter();
  const [state, formAction] = useActionState(signup, initialState);

  useEffect(() => {
    if (state.success) {
      const timeout = setTimeout(() => {
        router.push("/login");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [state.success, router]);

  return (
    <article className="min-h-screen flex items-center justify-center bg-main-purple">
      <div className="w-full max-w-lg bg-white p-14 rounded-2xl">
        <h1 className="text-black/70 text-3xl font-semibold text-center mb-15">
          Crie sua conta
        </h1>
        {state.error && (
          <Alert type="danger">
            {state.message ?? "Ocorreu um erro ao criar a conta."}
          </Alert>
        )}

        {state.success && (
          <Alert type="success">
            {state.message ?? "Conta criada com sucesso!"}
          </Alert>
        )}

        <form action={formAction}>
          <TextField
            className="border-b-3 rounded-b-lg border-main-purple mb-4"
            id="username"
            name="username"
            label="Nome de usuário"
          />
          <TextField
            className="border-b-3 rounded-b-lg border-main-purple mb-4"
            id="email"
            name="email"
            label="E-mail"
          />
          <PasswordFields />
          <Button type="submit" className="mb-5">
            Continuar
          </Button>
        </form>
      </div>
    </article>
  );
}
