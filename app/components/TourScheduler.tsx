"use client";

interface TourSchedulerProps {
  open: boolean;
  onClose: () => void;
}

export default function TourScheduler({ open, onClose }: TourSchedulerProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100"
        >
          ✕
        </button>

        <iframe
          src="https://charles.rentbamboo.com/embed/schedule?clientId=bamboo_7mkc8jx3&propertyId=0fe25d45-61b8-428e-b563-788155a1f8e3&color=1e3872"
          title="Schedule a Tour"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
