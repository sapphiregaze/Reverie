import fs from "fs";
import readline from "readline";

export async function getRandomTasks(filePath: string, numTasks: number) {
  const tasks: string[] = [];
  const randomTasks: string[] = [];

  const fileStream: fs.ReadStream = fs.createReadStream(filePath);
  const rl: readline.Interface = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    tasks.push(line);
  }

  while (randomTasks.length < numTasks && tasks.length > 0) {
    const random: number = Math.floor(Math.random() * tasks.length);
    randomTasks.push(tasks.splice(random, 1)[0]);
  }

  return randomTasks;
}
