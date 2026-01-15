import api from "../api";

type SignupPayload = {
  username: string;
  email: string;
  password: string;
}

export async function signupService(formData: FormData) {
  const payload: SignupPayload = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  return { ...payload };
}

export async function loginService(payload: {
  email: string;
  password: string;
}) {
  const { data } = await api.post("/auth/login", payload);
  return data;
}