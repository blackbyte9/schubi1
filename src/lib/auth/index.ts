import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials): Promise<User | null> {
                const users = [
                    {
                        id: "admin1",
                        userName: "admin",
                        name: "Admin",
                        password: "admin",
                        email: "admin@donotreplay.com",
                    },
                ];

                const user = users.find(
                    (user) =>
                        user.userName === credentials?.username &&
                        user.password === credentials?.password
                );

                return user
                    ? {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    }
                    : null;
            }
        }),
    ],
    basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
