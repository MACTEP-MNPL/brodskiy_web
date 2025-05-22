import { TG_LINK, WA_LINK } from "@/shared/const/social";
import { TgIcon } from "@/shared/ui/icons/TgIcon";
import { WSIcon } from "@/shared/ui/icons/WSIcon";
import Link from "next/link";

export function MediaLinks() {
  return (
    <div className="flex items-center gap-[20px]">
      <Link
        href={TG_LINK}
        className="md:bg-GRIN_500 md:p-[7px] md:rounded-[50%]"
      >
        <TgIcon />
      </Link>
      <Link
        href={WA_LINK}
        className="md:bg-GRIN_500 md:p-[7px] md:rounded-[50%]"
      >
        <WSIcon />
      </Link>
    </div>
  );
}
