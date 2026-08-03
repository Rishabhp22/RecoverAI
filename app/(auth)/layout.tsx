import type { ReactNode } from "react";
import Link from "next/link";
import { Shield, Sparkles } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps): ReactNode {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Top Header Bar */}
      <header className="bg-slate-900 text-slate-100 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 rounded-lg bg-blue-700 flex items-center justify-center text-white shadow-md group-hover:bg-blue-600 transition-colors">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <span className="font-bold text-lg text-white tracking-wide block">RecoverAI</span>
              <span className="text-[10px] uppercase text-blue-300 tracking-wider font-semibold block">
                Stolen Device Ecosystem
              </span>
            </div>
          </Link>
          <div className="flex items-center space-x-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/50">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span className="text-xs text-slate-300 font-medium">Official Recovery Portal</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-medium text-slate-700 dark:text-slate-300">
            RecoverAI — ChatGPT Codex India Hackathon 2026
          </p>
          <p>
            Secure 256-bit encrypted authentication & device recovery management.
          </p>
        </div>
      </footer>
    </div>
  );
}
