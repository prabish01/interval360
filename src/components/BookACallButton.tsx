"use client";

import type { ButtonHTMLAttributes } from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "interval360";

let calApiPromise: ReturnType<typeof getCalApi> | null = null;
function getSharedCalApi() {
  if (!calApiPromise) calApiPromise = getCalApi();
  return calApiPromise;
}

export function BookACallButton({
  children,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      {...props}
      onClick={async (e) => {
        onClick?.(e);
        const cal = await getSharedCalApi();
        cal("modal", {
          calLink: CAL_LINK,
          config: { layout: "month_view" },
        });
      }}
    >
      {children}
    </button>
  );
}
