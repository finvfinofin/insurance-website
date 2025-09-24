"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@/utils/useMediaQuary";

export default function CursorBall() {
  const pathname = usePathname();
  const ref = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const isScreen640 = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    //  check if DOM element referenced by ref has been mounted
    if (ref.current) {
      const handlePointerMove = ({
        clientX,
        clientY,
      }: {
        clientX: number;
        clientY: number;
      }) => {
        const element: any = ref.current;
        if (element) {
          // calculate x and y coordinates
          const x = clientX - element.offsetLeft - element.offsetWidth / 2;
          const y = clientY - element.offsetTop - element.offsetHeight / 2;
          // update state
          setCoordinates({ x, y });
        }
      };

      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }
  }, []);

  return pathname.startsWith("/admin") || isScreen640 ? (
    <></>
  ) : (
    <motion.div
      ref={ref}
      className="w-[15px] h-[15px] rounded-full bg-ballYellow z-[1000] fixed pointer-events-none"
      animate={{ x: coordinates.x, y: coordinates.y }}
      transition={{
        type: "just",
      }}
    />
  );
}
