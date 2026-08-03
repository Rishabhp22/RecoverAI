import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/features/auth/components/forgot-password-form";

export const metadata: Metadata = {
  title: "Reset Password — RecoverAI",
  description: "Request a password reset link for your RecoverAI account.",
};

export default function ForgotPasswordPage(): React.JSX.Element {
  return <ForgotPasswordForm />;
}
