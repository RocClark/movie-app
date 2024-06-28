"use client"
import Image from 'next/image'
import MovieHeader from '../../../components/movieComponents/movieHeader'
import { SetStateAction, useContext, useState } from "react";
import { UserContext } from "@/components/Contexts/userContext";
import Link from "next/link";

export default function Categories() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const { user, updateUser } = useContext(UserContext);

  const handleUsernameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setUsername(e.target.value);
  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setPassword(e.target.value);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!username || !password) {
      setFormError("Both username and password are required.");
      return;
    }
    // Perform sign-up logic here
    console.log("Form submitted:", { username, password });
    setFormSuccess("Sign-up successful!");
    setFormError(""); // Clear error message on success

    // Update the user in the context
    updateUser({ name: username, id: username + "ID" }); // Adjust the id as needed
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="mb-1 text-black">
            <input
              type="text"
              placeholder="Username"
              autoComplete="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-1 text-black">
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </fieldset>
        {formError && <p style={{ color: "red" }}>{formError}</p>}
        {formSuccess && <p style={{ color: "green" }}>{formSuccess}</p>}
      </form>
      <Link href="/">Home</Link>
      userId = {user.id}
    </main>
  );
}
