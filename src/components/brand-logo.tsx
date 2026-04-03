import Image from "next/image";

type BrandLogoProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ size = 56, className = "", priority }: BrandLogoProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/ethiochereta.png"
        alt="EthioChereta"
        width={size}
        height={size}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
