import { SessionProvider } from "next-auth/react";
import { BASE_PATH, auth } from "@/auth";
import AuthButtonClient from "./auth-button.client";

export default async function AuthButton() {
    const session = await auth();
    if (session && session.user) {
        session.user = {
            name: session.user.name,
            email: session.user.email,
        };
    }
    return (
        <SessionProvider session={session} basePath={BASE_PATH}>
            <AuthButtonClient />
        </SessionProvider>
    );
}
