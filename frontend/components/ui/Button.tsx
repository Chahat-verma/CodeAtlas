import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}