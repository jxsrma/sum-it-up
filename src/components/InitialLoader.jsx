import React, { useEffect, useState } from "react";

const InitialLoader = ({ loaded }) => {
  const originalContent = "SUM-IT-UP";
  const [content, setContent] = useState("sum-it-up");
  useEffect(() => {
    const timeoutFunction = (content, time) => {
      if (content === originalContent) return loaded();

      const length = content.length;
      const i = Math.round(Math.random() * (length - 1));
      const randChar = String.fromCharCode(Math.round(Math.random() * 25) + 65);

      if (content[i] === originalContent[i])
        return timeoutFunction(content, time);

      const newContent = content
        .split("")
        .map((char, index) =>
          content[index] === originalContent[index]
            ? char
            : index === i
            ? randChar
            : char
        )
        .join("");

      setContent(newContent);

      setTimeout(
        () => timeoutFunction(newContent, time === 10 ? 10 : time - 10),
        time
      );
    };
    timeoutFunction(content, 100);
  }, []);

  return (
    <div
      className={`
      bg-slate-300 
      h-screen w-screen 
      grid place-content-center 
     font-mono text-5xl
     ${
       content === originalContent
         ? "text-slate-700 text-6xl"
         : "text-slate-400"
     }
    ease-in-out delay-150 duration-500
     transition-all
      `}
    >
      {content}
    </div>
  );
};

export default InitialLoader;
