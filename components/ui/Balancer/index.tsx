"use client";

import {
  Balancer as RawBalancer,
  Provider as RawProvider,
} from "react-wrap-balancer";
import type { ComponentProps, ReactNode } from "react";

export type BalancerProps = ComponentProps<typeof RawBalancer>;

export function Balancer({ ratio = 0.88, ...props }: BalancerProps) {
  return <RawBalancer ratio={ratio} {...props} />;
}

export function BalancerProvider({ children }: { children: ReactNode }) {
  return <RawProvider>{children}</RawProvider>;
}
