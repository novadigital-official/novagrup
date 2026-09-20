"use client";

import React from "react";

export function scrollToSection(e: React.MouseEvent<HTMLElement> | null, id: string) {
  if (e) {
    e.preventDefault();
  }
  if (typeof window === "undefined") return;

  const targetId = id.replace("#", "").replace("/", "");
  const element = document.getElementById(targetId);

  if (element) {
    const navOffset = 72;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    window.history.pushState(null, "", `#${targetId}`);
  } else {
    // Fallback
    window.location.hash = targetId;
  }
}
