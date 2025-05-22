"use client";
import { getToken } from "@/shared/api/getCourse";
import { CourseMobile } from "./ui/course-mobile/CourseMobile";
import { Timer } from "./ui/timer/Timer";
import { useEffect, useState } from "react";
import { useBreakPoints } from "@/shared/hooks/useBreackPoints";

export function CourseModuleMobile() {
  const [isLoading, setIsLoading] = useState(true);
  const { isMobile } = useBreakPoints();

  const fetchToken = async () => {
    setIsLoading(true);
    const res = await getToken();
    if (res && res?.buy && res?.sall) {
      setCourse({
        buy: res.buy,
        sall: res.sall,
      });
      setIsLoading(false);
    }
  };
  const [course, setCourse] = useState<{
    buy: null | string;
    sall: null | string;
  }>({ buy: null, sall: null });

  useEffect(() => {
    fetchToken();
  }, []);

  if (!isMobile) return;

  return (
    <div
      id="course-section"
      className="flex mt-[60px] w-full md:mt-0 flex-col gap-[24px] md:hidden"
    >
      <Timer isLoading={isLoading} getToken={fetchToken} />
      <div className="flex flex-col items-center gap-[24px]">
        <CourseMobile
          isReverse={false}
          coursFrom={isLoading ? null : course.buy}
          coursTo={!isLoading ? "1" : ""}
        />
        <CourseMobile
          isReverse
          coursFrom={isLoading ? null : course.sall}
          coursTo={!isLoading ? "1" : ""}
        />
      </div>
    </div>
  );
}
