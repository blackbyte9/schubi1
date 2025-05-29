"use client";
import { signIn, signOut } from "@/auth/helpers";
import { useSession } from "next-auth/react";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { useRouter } from "next/navigation";

export default function AuthButton() {
    const { data: session } = useSession();
    const router = useRouter();

    return session?.user ? (
        <button onClick={async () => {
                await signOut({ redirect: false });
            try {
                await router.push("/api/auth/signin");
            } catch (error) {
                if (isRedirectError(error)) {
                    // Handle redirect error
                    console.error("Redirect error:", error);
                } else {
                    console.error("Sign out error:", error);
                }
            }
        }}>
            {session.user?.name} Sign out
        </button>
    ) : (
        <button onClick={async () => { await signIn(); }}>
            Sign in
        </button>

    );
}