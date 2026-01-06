"use client";

import Button from "../../components/Button";
import TextField from "../../components/Form/TextField";

export default function LoginPage() {
  return (
    <article className="min-h-screen flex items-center justify-center bg-main-purple">
      <div className="w-full max-w-lg bg-white p-14 rounded-2xl">
        <h1 className="text-black/70 text-3xl font-semibold text-center my-20"> Faça seu Login</h1>
        <form>
          <TextField className="border-b-3 rounded-b-lg border-main-purple mb-6" label="E-mail" />
          <TextField className="border-b-3 rounded-b-lg border-main-purple mb-4" label="Password" type="password" />
        <Button className="mb-20"> Continuar </Button>
        </form>
      </div>
    </article>
  );
}
