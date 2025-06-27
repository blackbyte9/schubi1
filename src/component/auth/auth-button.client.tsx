"use client";
import { signIn, signOut } from "@/auth/helpers";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { useRouter } from "next/navigation";

export default function AuthButton() {
    const { data: session } = useSession();
    const router = useRouter();

    return session?.user ? (
        <Button onClick={async () => {
                await signOut({ redirect: false });
            try {
                await router.push("/api/auth/signin");
            } catch (error) {
                if (isRedirectError(error)) {
                    // Handle redirect error
                    // eslint-disable-next-line no-console
                    console.error("Redirect error:", error);
                } else {
                    // eslint-disable-next-line no-console
                    console.error("Sign out error:", error);
                }
            }
        }}>
            {session.user?.name} Sign out
        </Button>
    ) : (
        <Button onClick={async () => { await signIn(); }}>
            Sign in
        </Button>

    );
}
