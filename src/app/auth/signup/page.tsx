import { Suspense } from "react";
import SignUpForm from "./signup-form";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

function SignUpFormSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full animate-fade-in-up">
        <header className="py-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8"></h1>
        </header>

        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-center ">Create an account</h1>
          <p className="text-xs">
            if you already have an account{" "}
            <Link href={"/auth/login"} className="text-blue-600">
              Login now
            </Link>
          </p>
        </header>
        <Suspense fallback={<SignUpFormSkeleton />}>
          <SignUpForm />
        </Suspense>
      </div>
    </div>
  );
}
