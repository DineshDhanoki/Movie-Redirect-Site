'use client';

import { useEffect, useState } from 'react';

interface PopupAdProps {
  enabled?: boolean;
  delay?: number;
  onPopupShown?: () => void;
}

export default function PopupAd({ enabled = true, delay = 2000, onPopupShown }: PopupAdProps) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const timer = setTimeout(() => {
      setShowPopup(true);
      onPopupShown?.();
    }, delay);

    return () => clearTimeout(timer);
  }, [enabled, delay, onPopupShown]);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-4 relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h3 className="text-lg font-bold mb-4">Special Offer!</h3>
        <p className="text-gray-600 mb-4">
          Get premium access to all movies with our exclusive deal!
        </p>
        <a
          href="https://example-affiliate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
