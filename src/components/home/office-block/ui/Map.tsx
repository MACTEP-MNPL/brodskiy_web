import Image from "next/image";
import { useInView } from "react-intersection-observer";

export function Map() {
  const { ref, inView } = useInView();
  return (
    <div className="ml-[-16px] relative w-[calc(100%+32px)]">
      <Image
        ref={ref}
        priority
        style={{
          transformStyle: "preserve-3d",
        }}
        alt="карта мира"
        className={`w-[1000px] h-[900px] top-[-200px] absolute lg:top-[-80px] lg:h-[800px] overflow-x-hidden lg:w-[1800px] ${inView ? "animate-customRotate" : " animate-fadeOut"} object-cover lg:object-contain`}
        width={1000}
        quality={100}
        height={1000}
        src="/image/map.png"
      />
    </div>
  );
}
