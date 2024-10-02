"use client";

import { useQuery } from "@tanstack/react-query";
import { useCounterStore } from "./counterStore";

export default function Home() {
  useQuery({
    queryKey: ["counter"],
    queryFn: async () => {
      const response = await fetch("/api/counter");
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
  });

  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <main>
      <div>
        Count: <span>{count}</span>
      </div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </main>
  );
}
