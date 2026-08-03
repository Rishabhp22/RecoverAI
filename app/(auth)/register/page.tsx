import type { Metadata } from "next";
import { RegisterForm } from "@/features/auth/components/register-form";

export const metadata: Metadata = {
  title: "Register — RecoverAI",
  description: "Create a new RecoverAI account to manage smartphone recovery cases.",
};

export default function RegisterPage(): React.JSX.Element {
  return <RegisterForm />;
}
