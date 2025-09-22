'use client'
import Nav from "./components/navbar";
import { Homehero } from "./components/homeparallax";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-neutral-200">
        <Nav />
        <Homehero/>
      
      </div>
    </>
  );
}
