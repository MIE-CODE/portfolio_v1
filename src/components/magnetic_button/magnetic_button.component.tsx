import gsap from "gsap";
import { useEffect, useRef } from "react";

type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};
export const MagneticButton = ({
  children,
  className = "",
  ...rest
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: relX * 0.15, y: relY * 0.12, duration: 0.3 });
    };
    const leave = () =>
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
    el.addEventListener("mousemove", handler);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", handler);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <button
      ref={ref}
      className={`rounded-2xl px-6 py-2 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
