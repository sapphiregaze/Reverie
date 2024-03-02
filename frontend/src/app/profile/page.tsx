"use client";
import { useEffect, useState } from "react";

import { Navbar } from "@/components/Navbar";
import { getProfile } from "@/lib/api";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>({});
  const token = localStorage.getItem("token") as string;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await getProfile(token);
        console.log(profile);
        setProfile(profile);
      } catch (err) {
        console.error("Error fetching profile:", err);
        return (
          <p className="text-center text-2xl">
            Error loading profile. Please try again later.
          </p>
        );
      }
    };

    fetchData();
  }, [token]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start p-12 text-3xl text-black">
        <div>Username: {profile.username}</div>
        <div>Noctara Points: {profile.noctara_points}</div>
        <div>Streaks: {profile.streaks}</div>
        {profile.dreams?.map((dream: any, index: number) => (
          <div key={index}>{dream}</div>
        ))}
      </main>
      <Navbar />
    </>
  );
}
