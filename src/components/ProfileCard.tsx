"use client";

import { useSmartAccountClient, useUser } from "@alchemy/aa-alchemy/react";

import { SendUOButton } from "./SendUOButton";
import { useEffect } from "react";

export const ProfileCard = () => {
  const user = useUser();
  const { client } = useSmartAccountClient({
    type: "MultiOwnerModularAccount",
  });

  function openTab() {
    if (client?.account.address) {
      window.open(
        `https://monumints.vercel.app/?walletAddress=${client.account.address}`,
      );
    }
  }

  return (
    <div className="flex flex-row rounded-lg bg-white p-10 dark:bg-[#0F172A]">
      <div className="flex flex-col gap-8">
        <div className="text-lg font-semibold">Welcome to your profile!</div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div>Account address</div>
            <div className="text-wrap rounded-lg p-3 dark:bg-[#1F2937] dark:text-[#CBD5E1]">
              {client?.account.address}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Email</div>
            <div className="text-wrap rounded-lg p-3 dark:bg-[#1F2937] dark:text-[#CBD5E1]">
              {user?.email}
            </div>
          </div>
        </div>
        <button
          className="w-full transform rounded-lg bg-red-500 p-3 font-semibold text-[#FBFDFF] transition duration-500 ease-in-out hover:scale-105 disabled:bg-[#C0D4FF] disabled:hover:scale-100 dark:disabled:bg-[#4252C5]"
          onClick={openTab}
        >
          <div className="flex flex-row items-center justify-center gap-3">
            Visit MonuMints!
          </div>
        </button>
        <SendUOButton />
      </div>
    </div>
  );
};
