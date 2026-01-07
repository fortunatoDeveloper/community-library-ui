import { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "../api";
import { JWT } from "next-auth/jwt";

type LoginResponse = {
  token: string;
};

type UserResponse = {
  id: number | string;
  name?: string;
  email?: string;
};

type Token = JWT & {
  id?: string;
  access_token?: string;
  name?: string;
  email?: string;
};

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "E-mail", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) throw new Error("No credentials provided");

        try {
          const { data: loginData } = await api.post<LoginResponse>(
            "/auth/login",
            {
              email: credentials.email,
              password: credentials.password
            }
          )

          const access_token = loginData?.token;
          if (!access_token) {
            console.error("No access_token in login response", loginData);
            return null;
          }

          const payload = JSON.parse(
            Buffer.from(access_token.split(".")[1], "base64").toString()
          );
          const userId = payload?.id;

          const { data: user } = await api.get<UserResponse>(
            `/users/${userId}`,
            {
              headers: { Authorization: `Bearer ${access_token}` },
            }
          );

          return {
            id: String(user.id),
            name: user.name,
            email: user.email,
            access_token,
          };
        } catch (error) {
          console.error("authorize error:", error);
          return null;
        }
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }: { token: Token; user: UserResponse | null }): Promise<Token> {
      if (user) {
        const AuthUser = user as unknown as Token;
        return { ...(token as Token), ...AuthUser };
      }
      return token as Token;
    },

    async session({ session, token }: { session: Session; token: Token }): Promise<Session> {
      const UserToken = token as Token;
      session.user = {
        id: UserToken.id ?? session.user?.id,
        name: UserToken.name,
        email: UserToken.email,
        access_token: UserToken.access_token,
      } as unknown as Session["user"];

      return session;
    },
  },

  pages: { signIn: "/login" },
}