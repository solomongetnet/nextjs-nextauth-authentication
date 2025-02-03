import { Suspense } from "react";
import LoginForm from "./login-form";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

function LoginFormSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full animate-fade-in-up">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-center ">Log In</h1>
          <p className="text-xs">
            if you {"don't"} have an account{" "}
            <Link href={"/auth/signup"} className="text-blue-600">
              Create new account
            </Link>
          </p>
        </header>
        <Suspense fallback={<LoginFormSkeleton />}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
