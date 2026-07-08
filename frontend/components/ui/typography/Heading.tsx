import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type HeadingProps = HTMLAttributes<HTMLHeadingElement>;

export default function Heading({
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}