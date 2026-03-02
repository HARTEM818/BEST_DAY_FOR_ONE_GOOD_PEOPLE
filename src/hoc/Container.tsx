import type { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export default function Container({
  className,
  children,
}: ContainerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}