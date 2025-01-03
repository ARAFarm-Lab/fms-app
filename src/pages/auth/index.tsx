import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase.config";
import { createLazyRoute } from "@tanstack/react-router";
import { toaster } from "@/components/ui/toaster";

const AuthPage = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    toaster.create({
      type: "success",
      title: "success",
      description: JSON.stringify(result.user),
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <h1>Login</h1>
      <button
        onClick={handleGoogleSignIn}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          backgroundColor: "#4285F4",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export const AuthRoute = createLazyRoute("/auth")({
  component: AuthPage,
});
