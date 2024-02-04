"use client";
import { Navbar } from "@/components/Navbar";
import { getTasks } from "@/lib/api";
import { useEffect, useState } from "react";

export default function TasksPage() {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks: string[] = await getTasks();
        setTasks(tasks);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        return (
          <p className="text-center text-2xl">
            Error loading tasks. Please try again later.
          </p>
        );
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col justify-start p-12">
        <div className="text-2xl">
          To Do
          <span className="mx-2 rounded-lg bg-purple-300 px-2 text-xl">
            {tasks.length}
          </span>
        </div>
        <div>
          {tasks.map((task, index) => (
            <div key={index}>{task}</div>
          ))}
        </div>
      </main>
      <Navbar />
    </>
  );
}
