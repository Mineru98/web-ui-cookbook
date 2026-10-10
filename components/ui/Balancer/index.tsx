"use client";

import {
  Balancer as RawBalancer,
  Provider as RawProvider,
} from "react-wrap-balancer";
import {
  createElement,
  useEffect,
  useState,
  type ComponentProps,
  type ElementType,
  type ReactNode,
} from "react";

export type BalancerProps = ComponentProps<typeof RawBalancer>;

/**
 * 첫 hydration 이 끝나면 true. react-wrap-balancer 는 인스턴스마다 <script> 를 렌더링하는데,
 * hydration 이후 클라이언트에서 새로 마운트되는 인스턴스에서는 React 19 가 오류를 낸다.
 * 그런 인스턴스는 CSS `text-balance` 로 대체한다. (SSR/hydration 중에는 false 라 마크업이 일치)
 * 레이아웃의 Provider 는 페이지보다 먼저 hydrate 되므로, 플래그는 Balancer 인스턴스 자신의
 * effect(= 같은 hydration 패스의 모든 렌더가 끝난 뒤)에서 올린다.
 */
let hasHydrated = false;

export function Balancer({
  ratio = 0.88,
  as,
  className,
  children,
  preferNative: _preferNative,
  nonce: _nonce,
  ...props
}: BalancerProps) {
  const [usePlain] = useState(() => hasHydrated);

  useEffect(() => {
    hasHydrated = true;
  }, []);

  if (usePlain) {
    const Tag: ElementType = as ?? "span";
    return createElement(
      Tag,
      { ...props, className: ["text-balance", className].filter(Boolean).join(" ") },
      children,
    );
  }
  return (
    <RawBalancer
      ratio={ratio}
      as={as}
      className={className}
      preferNative={_preferNative}
      nonce={_nonce}
      {...props}
    >
      {children}
    </RawBalancer>
  );
}

export function BalancerProvider({ children }: { children: ReactNode }) {
  return <RawProvider>{children}</RawProvider>;
}
