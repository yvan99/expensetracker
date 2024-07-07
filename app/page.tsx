import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";
import AddTransaction from "@/components/AddTransaction";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }
  return (
    <main>
      <h2>Welcome, {user.firstName}</h2>
      <AddTransaction/>
    </main>
  );
};

export default HomePage;
