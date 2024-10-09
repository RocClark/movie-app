'use client';
import { useContext } from "react";
import { UserContext } from "../contexts/userContext"; 
import Link from 'next/link'

function Header() {
  const { user } = useContext(UserContext); // Destructure user from the context

    return (
        <div className="navbar">
            <header className="flex bg-white shadow ">
                <div className="absolute left-0 mx-auto max-w-9xl  py-4 ">
                <h1 className=" text-3xl font-bold tracking-tight text-gray-900">MovieTitle</h1>
                </div>
                <div className="flex right-0 mx-auto max-w-9xl px-2 py-4 sm:px-4 lg:px-1">
                <p className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-gray-900">Hello: {user?.id}</p>
                <Link
                  href="/movieHome"
                    className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-gray-900">
                        Home
                </Link>

                <Link
                  href="/movieHome/signup"
                    className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-gray-900">
                        SignUp
                </Link>
                <Link
                  href="/movieHome/logIn"
                    className=" sm:px-4 lg:px-8 text-1xl font-bold tracking-tight text-gray-900">
                        Login
                </Link>
                </div>
            </header>
        </div>
    );
}

export default Header;
