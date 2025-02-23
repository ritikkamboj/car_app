import { Camp, Features, Getapp, Guide, Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <Getapp />
    </>
  );
}
