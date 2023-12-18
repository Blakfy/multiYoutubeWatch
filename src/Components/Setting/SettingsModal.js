"use client";

import React from "react";
export default function SettingsModal(props) {
  return (
    <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-prime-petrel">
      <button
        onClick={() => props.view()}
        type="button"
        className="w-24 h-24 text-prime font-bold px-5 py-2.5 mr-2 mb-2">
        Settings
      </button>
    </div>
  );
}
