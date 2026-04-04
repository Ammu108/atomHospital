"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import Login from "~/features/auth/components/login";
import SignUp from "~/features/auth/components/signup";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "login";
  const [activeTab, setActiveTab] = useState(tab);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          {/* Tabs */}
          <div className="-mx-4 -mt-4 mb-4 flex gap-4 border-border border-b px-4 pt-4">
            <button
              className={`pb-3 font-medium transition-colors ${
                activeTab === "login"
                  ? "border-primary border-b-2 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("login")}
              type="button"
            >
              Login
            </button>
            <button
              className={`pb-3 font-medium transition-colors ${
                activeTab === "signup"
                  ? "border-primary border-b-2 text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("signup")}
              type="button"
            >
              Sign Up
            </button>
          </div>
        </CardHeader>

        <CardContent>
          {/* Content */}
          {activeTab === "login" ? <Login /> : <SignUp />}
        </CardContent>
      </Card>
    </div>
  );
}
