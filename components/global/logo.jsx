import React from "react";

export default function Logo() {
  return (
    <span className="flex gap-x-3 items-center">
      <img className="w-44 max-sm:w-24" src="/images/cafe-logo.png" alt="cafe-logo" />
      <p className="sm:text-4xl text-2xl text-primary-500">کـافه رستـوران میدون</p>
    </span>
  );
}