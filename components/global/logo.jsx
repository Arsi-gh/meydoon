import React from "react";

export default function Logo() {
  return (
    <span className="flex gap-x-3 items-center">
      <img className="w-44 max-sm:w-24" src="/images/cafe-logo.png" alt="cafe-logo" />
      <strong className="sm:text-4xl text-lg text-primary-500">کـافه رستـوران میدون</strong>
    </span>
  );
}