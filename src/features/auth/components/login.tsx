import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { api } from "~/trpc/react";

const Login = () => {
  const router = useRouter();
  const utils = api.useUtils();

  const login = api.auth.login.useMutation({
    onSuccess: async () => {
      await utils.auth.me.invalidate();
      console.log("user logged in successfully.");
      router.push("/");
    },
  });

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate(form);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="m@example.com"
                required
                type="email"
                value={form.email}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  href="#"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                type="password"
                value={form.password}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full" onClick={handleSubmit} type="submit">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
