import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const btnEl = btnRef.current;
    const spanEl = spanRef.current;

    if (!btnEl || !spanEl) return; // safeguard

    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanEl.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanEl.animate({ left: "50%" }, { duration: 100, fill: "forwards" });
    };

    btnEl.addEventListener("mousemove", handleMouseMove);
    btnEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (btnEl) {
        btnEl.removeEventListener("mousemove", handleMouseMove);
        btnEl.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-6 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Shop Now
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

export default SpotlightButton;
