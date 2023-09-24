"use client";

import React, { useState } from "react";
import Image from "next/image";

import TextField from "@/components/TextField";
import TraitGrid from "@/components/TraitGrid";

interface Trait {
  trait_type: string;
  value: string;
}

function WassieComponent(): JSX.Element {
  const [number, setNumber] = useState<string | null>(null);
  const [wassieSrc, setWassieSrc] = useState<string>("/loomlock_8921.png");
  const [traits, setTraits] = useState<Trait[]>([]);
  const [platitude, setPlatitude] = useState<string>("");
  const platitudes: string[] = [
    "looks rare",
    "excuse me ser this is one of a kind",
    "omg is this yours?",
    // Add the rest of your platitudes here
  ];

  const fetchTraits = async (number: string | null): Promise<void> => {
    if (number !== prev) {
      const wassieSrc = `https://arweave.net/ABckdetHKeV8VgUoIZ53TMDKkTi56LhTf-Gb1Mdqx9c/${number}.png`;
      setWassieSrc(wassieSrc);

      const url = `https://fruuydfac2a4b4v5rip3ovqv5gg2sbaqgcgwnbnztlbt7xed7ela.arweave.net/LGlMDKAWgcDyvYoft1YV6Y2pBBAwjWaFuZrDP9yD-RY/${number}.json`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: { attributes: Trait[] } = await response.json();
        setTraits(data.attributes);
        randomPlatitude();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const randomPlatitude = (): void => {
    const num: number = Math.floor(Math.random() * platitudes.length);
    setPlatitude(platitudes[num]);
  };

  const prev: string | null = null; // You can use state or useRef for this purpose

  return (
    <div className="text-center">
      <TextField
        label=""
        value={number || ""}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          fetchTraits(number);
        }}
      >
        Get Wassie
      </button>
      {platitude !== "" && (
        <div className="text-center">
          <h1>
            <span style={{ color: "gray" }}>Rank</span> 1
            <span style={{ color: "gray" }}>of</span> 12345
          </h1>
          {platitude}
        </div>
      )}
      <Image
        src={wassieSrc}
        alt="wassie"
        width={200}
        height={300}
        className="text-center"
      />
      {platitude !== "" && (
        <div className="text-center">
          <TraitGrid traits={traits} />
        </div>
      )}
    </div>
  );
}

export default WassieComponent;
