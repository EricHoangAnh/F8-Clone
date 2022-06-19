import React from "react";
import "./style.css"

export default function TopicList({ props }) {
  return (
    <ul className="topic_list p-0">
      {props.map((item) => (
        <li className="pb-2 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#f05123"
            class="bi bi-check-lg"
            viewBox="0 0 16 16"
          >
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
          </svg>
          <span className="px-2">{item}</span>
        </li>
      ))}
    </ul>
  );
}
