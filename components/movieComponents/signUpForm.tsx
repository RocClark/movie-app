"use client";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";   
import Link from "next/link";

function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");

    const { user, updateUser } = useContext(UserContext);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username || !password) {
            setFormError("Both username and password are required.");
            setFormSuccess(""); // Clear success message on error
            return;
        }

        // Perform sign-up logic here
        console.log("Form submitted:", { username, password });
        setFormSuccess("Sign-up successful!");
        setFormError(""); // Clear error message on success

        // Update the user in the context
        updateUser({ name: username, id: username  }); // Adjust the id as needed
    };

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    
                    <form onSubmit={handleSubmit}>
                        <input
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            type="text"
                            placeholder="Username"
                            autoComplete="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />

                        <input 
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handlePasswordChange}
                        />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green text-black   hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>
                    </form>

                    {formError && <p className="text-red-500 text-center">{formError}</p>}
                    {formSuccess && <p className="text-green-500 text-center">{formSuccess}</p>}

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> 
                    </div>
                </div>

                <Link href="/">Home</Link>
                

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="/movieHome/logIn">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;