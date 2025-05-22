"use client";

import { getToken } from "@/shared/api/getCourse";
import { useBreakPoints } from "@/shared/hooks/useBreackPoints";
import { useEffect, useState } from "react";
import { Timer } from "./ui/timer/Timer";
import { CourseDesktop } from "./ui/course-desktop/CourseDesktop";

export function CourseMobuleDesktop() {
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

  if (isMobile) return;

  return (
    <div
      id="course-section"
      className="flex w-full md:mt-0 flex-col gap-[15px]"
    >
      <Timer isLoading={isLoading} getToken={fetchToken} />
      <div className="flex flex-col items-center gap-[10px]">
        <CourseDesktop
          isReverse={false}
          coursFrom={isLoading ? null : course.buy}
          coursTo={!isLoading ? "1" : ""}
        />
        <CourseDesktop
          isReverse
          coursFrom={isLoading ? null : course.sall}
          coursTo={!isLoading ? "1" : ""}
        />
      </div>
    </div>
  );
}
