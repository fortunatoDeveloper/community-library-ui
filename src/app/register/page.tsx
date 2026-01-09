"use client";
import Button from "../../components/Button";
import TextField from "../../components/Form/TextField";

export default function RegisterPage() {
  return (
    <article className="min-h-screen flex items-center justify-center bg-main-purple">
      <div className="w-full max-w-lg bg-white p-14 rounded-2xl">
        <h1 className="text-black/70 text-3xl font-semibold text-center mb-15">
          Crie sua conta
        </h1>
        <form>
          <TextField
            className="border-b-3 rounded-b-lg border-main-purple mb-4"
            id="name"
            label="Nome"
          />
          <TextField
            className="border-b-3 rounded-b-lg border-main-purple mb-4"
            id="email"
            label="E-mail"
          />
          <TextField
            className="border-b-3 rounded-b-lg border-main-purple mb-4"
            id="password"
            label="Senha"
            type="password"
          />
          <TextField
            className="border-b-3 rounded-b-lg border-main-purple mb-4"
            id="confirm-password"
            label="Confirmar Senha"
            type="password"
          />
          <Button type="submit" className="mb-5">
            Continuar
          </Button>
        </form>
      </div>
    </article>
  );
}
