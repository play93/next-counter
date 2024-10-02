"use client";

import { useCounterStore } from "@/app/counterStore";
import { createContext, PropsWithChildren, useRef } from "react";

export const CounterContext = createContext<typeof useCounterStore | null>(
  null
);

type CounterProviderProps = PropsWithChildren;

export function CounterProvider({ children }: CounterProviderProps) {
  const storeRef = useRef<typeof useCounterStore>();
  if (!storeRef.current) {
    storeRef.current = useCounterStore;
  }

  return (
    <CounterContext.Provider value={storeRef.current}>
      {children}
    </CounterContext.Provider>
  );
}
