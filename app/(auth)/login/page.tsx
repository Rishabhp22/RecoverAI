import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/components/login-form";

export const metadata: Metadata = {
  title: "Sign In — RecoverAI",
  description: "Sign in to access your RecoverAI stolen device recovery dashboard.",
};

export default function LoginPage(): React.JSX.Element {
  return <LoginForm />;
}
