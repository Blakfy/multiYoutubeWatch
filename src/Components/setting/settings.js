"use client";
import React, { useState } from "react";

export default function Settings({ handleClick }) {
  return (
    <div className="absolute bottom-10 right-10  w-24 h-24 rounded-full">
      <button
        onClick={handleClick}
        type="button"
        className="bg-slate-700 w-24 h-24 rounded-full text-white text-lg text">
        Settings
      </button>
    </div>
  );
}
