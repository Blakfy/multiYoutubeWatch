"use client";
import React, { useState } from "react";

export default function Settings({ handleClick }) {
  return (
    <div
      className="absolute bottom-10 right-10 w-24
     h-24 rounded-full">
      <button
        onClick={handleClick}
        type="button"
        className="w-18 h-18 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
        focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
        dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        Settings
      </button>
    </div>
  );
}
