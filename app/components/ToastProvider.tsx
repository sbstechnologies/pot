// components/ToastProvider.tsx
"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      data-rht-toaster=""
      position="top-right"
      toastOptions={{
        duration: 5000,
        style: {
          background: "#1E3872",
          color: "#fff",
          borderRadius: "12px",
        },
      }}
    />
  );
}
