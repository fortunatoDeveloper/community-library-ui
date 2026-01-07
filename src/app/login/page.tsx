"use client";

import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import TextField from "../../components/Form/TextField";
import { FormEvent } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    const response = await signIn("credentials", {
      redirect: false,
      email,
      password
    });

    if (response?.ok) {
      router.push("/");
    } else {
      alert("Login failed");
    }
  }

  return (
    <article className="min-h-screen flex items-center justify-center bg-main-purple">
      <div className="w-full max-w-lg bg-white p-14 rounded-2xl">
        <h1 className="text-black/70 text-3xl font-semibold text-center my-20"> Faça seu Login</h1>
        <form onSubmit={handleSubmit}>
          <TextField className="border-b-3 rounded-b-lg border-main-purple mb-6" id="email" label="E-mail" />
          <TextField className="border-b-3 rounded-b-lg border-main-purple mb-4" id="password" label="Password" type="password" />
          <Button  type="submit"  className="mb-20"> Continuar </Button>
        </form>
      </div>
    </article>
  );
}
