"use client";

import { useEffect } from "react";

export default function RentBambooWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://charles.rentbamboo.com/w";
    script.async = true;

    script.setAttribute("data-client-id", "bamboo_7mkc8jx3");
    script.setAttribute("data-position", "right");
    script.setAttribute("data-color", "#1E3872");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
