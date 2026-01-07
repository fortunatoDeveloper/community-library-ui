declare module "next-auth" {
    interface Session {
    accessToken: string;
    user: {
      id: number;
      email: string;
      name: string;
      password: string;
    };
  }

  interface User {
    id: string;
    access_token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    access_token?: string;
  }
}