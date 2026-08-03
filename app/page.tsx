"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, LogIn, UserPlus, LogOut, User, Lock, Sparkles, FileText, Cpu, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function HomePage(): React.JSX.Element {
  const { user, isLoading, signOut } = useAuth();

  const handleSignOut = async (): Promise<void> => {
    const result = await signOut();
    if (result.success) {
      toast.success("Signed Out", {
        description: "You have been signed out successfully.",
      });
    } else {
      toast.error("Sign Out Failed", {
        description: result.message,
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Top Header Navigation */}
      <header className="bg-slate-900 text-slate-100 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 rounded-lg bg-blue-700 flex items-center justify-center text-white shadow-md group-hover:bg-blue-600 transition-colors">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <span className="font-bold text-lg text-white tracking-wide block">RecoverAI</span>
              <span className="text-[10px] uppercase text-blue-300 tracking-wider font-semibold block">
                Stolen Device Ecosystem
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-3">
            {isLoading ? (
              <div className="h-8 w-24 bg-slate-800 animate-pulse rounded-md" />
            ) : user ? (
              <div className="flex items-center space-x-3">
                <div className="hidden sm:flex items-center space-x-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/50">
                  <User className="h-4 w-4 text-blue-400" />
                  <span className="text-xs font-medium text-slate-200">
                    {user.displayName || user.email}
                  </span>
                </div>
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  size="sm"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-blue-700 hover:bg-blue-800 text-white font-medium shadow-sm">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col justify-center">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-4 w-4" />
            <span>Sprint 2 — Authentication Module Complete</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Intelligent Smartphone Theft Recovery & Prevention Ecosystem
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            RecoverAI streamlines the post-theft process with secure authentication, automated invoice OCR parsing, AI-assisted FIR generation, and unified recovery tracking.
          </p>

          {/* User Status / Auth Call to Action Card */}
          <div className="pt-6">
            {user ? (
              <Card className="border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30 max-w-md mx-auto shadow-sm">
                <CardHeader className="pb-3 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 mb-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Authenticated Session Active
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600 dark:text-slate-400">
                    Logged in as <span className="font-semibold text-blue-700 dark:text-blue-400">{user.email}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    User ID: <code className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-[11px]">{user.id}</code>
                  </p>
                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    className="w-full border-blue-300 dark:border-blue-800 text-blue-800 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out Account
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <Link href="/login" className="flex-1">
                  <Button size="lg" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-md">
                    <LogIn className="mr-2 h-5 w-5" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/register" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full border-slate-300 dark:border-slate-700 font-semibold">
                    <UserPlus className="mr-2 h-5 w-5" />
                    Create Account
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="space-y-2">
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center">
                <Lock className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-bold">Secure Authentication</CardTitle>
              <CardDescription>
                Firebase-backed email/password and Google OAuth authentication with encrypted sessions and protected routes.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="space-y-2">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-bold">Document & OCR Parsing</CardTitle>
              <CardDescription>
                Automatic IMEI extraction and invoice parsing for rapid documentation during recovery case filing.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="space-y-2">
              <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-400 flex items-center justify-center">
                <Cpu className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-bold">AI FIR Assistance</CardTitle>
              <CardDescription>
                AI-driven draft FIR generator for police complaints with structured legal information templates.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-medium text-slate-700 dark:text-slate-300">
            RecoverAI — ChatGPT Codex India Hackathon 2026
          </p>
          <p>
            Documentation-First Development • Next.js 15 • Firebase Auth • Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
