"use client";

import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext<{
  user: { name: string; id: string };
  updateUser: (newUser: { name: string; id: string }) => boolean; // Update the type of updateUser function
}>({
  user: { name: "", id: "" },
  updateUser: () => false,
});

export const UserProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [user, setUser] = useState({
    name: "nameTest",
    id: "",
  });
  const updateUser = (newUser: { name: string; id: string }) => {
    setUser(newUser);
    return true;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

