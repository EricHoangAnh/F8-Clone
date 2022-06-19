import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Lesson() {
  return (
    <div className="lesson d-flex flex-row align-items-center justify-content-between w-100">
      <div className=" d-flex flex-row align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#f05123"
          class="bi bi-play-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
        </svg>
        <span className="px-3">1. Bài học đầu tiên </span>
      </div>
      <span className="">9:40</span>
    </div>
  );
}
