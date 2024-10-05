import ClientWrapper from "@/components/ui/clientWrapper";
import { promises as fs } from "fs";

async function getData() {
  const file = await fs.readFile(
    process.cwd() + "/public/characters.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return data;
}

export default async function Home() {
  const data = await getData();

  return <ClientWrapper initialData={data} />;
}
