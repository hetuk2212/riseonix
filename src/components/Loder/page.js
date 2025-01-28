// components/Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <style jsx>{`
        .loader {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .lines {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 40px;
        }

        .line {
          width: 40px;
          height: 6px;
          background-color: #333;
          margin: 2px 0;
          border-radius: 3px;
          animation: slide 1.2s infinite ease-in-out;
        }

        .line:nth-child(1) {
          animation-delay: 0s;
        }

        .line:nth-child(2) {
          animation-delay: 0.2s;
        }

        .line:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes slide {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(15px);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
