"use client";
import { useEffect, useState } from "react";
type Props = {
  isLoading: boolean;
  getToken: () => void;
};
export function Timer(props: Props) {
  const { isLoading, getToken } = props;

  const [timer, setTimer] = useState(10);
  const getAsyncToken = async () => {
    await getToken();
    setTimer(10);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer !== 0) {
        setTimer((prev) => prev - 1);
      } else {
        getAsyncToken();
      }
    }, 1000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between md:px-[24px] w-full text-[18px] md:text-[14px] font-semibold gap-[10px]">
      <p className="md:font-light">Актуальный курс</p>
      <span
        className={`min-w-[70px] ${isLoading ? "backdrop-blur-2xl bg-[#9a879728] text-transparent animate-pulse" : "text-white bg-transparent blur-0"} rounded-[8px] pl-[7px] transition-colors duration-300`}
      >
        {"00:00:" + (timer >= 10 ? timer : "0" + timer)}
      </span>
    </div>
  );
}
