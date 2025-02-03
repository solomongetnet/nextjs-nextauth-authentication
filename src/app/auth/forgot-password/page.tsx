import { Suspense } from "react";
import ForgotPasswordForm from "./forgot-password-form";
import { Skeleton } from "@/components/ui/skeleton";

function ForgotPasswordFormSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full animate-fade-in-up">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Forgot Password
        </h1>
        <Suspense fallback={<ForgotPasswordFormSkeleton />}>
          <ForgotPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
