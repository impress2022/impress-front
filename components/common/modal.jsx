import Text from "../typography/text";
import React, { useState } from "react";
import Pulse from "react-reveal/Pulse";

export default function Modal({ header, content, signature, defaultActive }) {
  const [active, setActive] = useState(defaultActive ? defaultActive : true);
  return (
    <div
      className="fixed top-0 left-0 z-60 w-screen h-screen flex justify-center items-center"
      style={{
        display: active ? "flex" : "none",
      }}
    >
      <div
        className="fixed top-0 left-0 z-60 w-screen h-screen bg-modal"
        onClick={() => setActive(false)}
      />
      <div className="relative z-60 bg-white py-24 px-12 shadow-dark-wide">
        <div className="absolute right-0 top-0 p-4">
          <button onClick={() => setActive(false)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.192 6.34375L11.949 10.5858L7.70697 6.34375L6.29297 7.75775L10.535 11.9998L6.29297 16.2418L7.70697 17.6558L11.949 13.4137L16.192 17.6558L17.606 16.2418L13.364 11.9998L17.606 7.75775L16.192 6.34375Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <Pulse>
          <Text size="h3" custom="text-center">
            {header}
          </Text>
        </Pulse>
        <Text size="body-18" custom="max-w-500 text-center mb-16">
          {content}
        </Text>
        <Text size="body-bold-16" custom="text-center">
          {signature}
        </Text>
      </div>
    </div>
  );
}
