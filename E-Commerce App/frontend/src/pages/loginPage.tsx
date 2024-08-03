import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
import { useRef } from "react";

function LoginPage() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit() {
    const userData = {
      username: usernameRef.current!.value,
      password: passwordRef.current!.value,
    };
    try {
      await login(userData);
      navigate("/", { replace: true });
    } catch (error: any) {
      console.log("TypeError");
      console.log(error);
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Eenter your username and password</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Username</p>
          <Input placeholder="Username" ref={usernameRef}></Input>
        </CardContent>
        <CardContent>
          <p>Password</p>
          <Input placeholder="Password" ref={passwordRef}></Input>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default LoginPage;
