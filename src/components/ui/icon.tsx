"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface IconProps {
  src: StaticImport;
  size?: number;
  alt?: string;
}

export const Icon: React.FC<IconProps> = ({ src, size = 36, alt = "" }) => {
  return (
    <Image
      className="hover:text-rose-600 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src={src}
      alt={alt}
      width={size}
      height={size}
      priority
    />
  );
};
