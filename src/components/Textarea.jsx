import React from "react";

const TextArea = (props) => {
  const wordsLength = props?.value
    ?.split(/\s|\n/)
    .filter((word) => word).length;
  const { actions } = props;

  return (
    <div className="flex flex-1 flex-col shadow-lg outline-dotted outline-2 rounded-md outline-slate-400">
      <textarea
        {...props}
        className="w-full h-full p-4 font-mono resize-none rounded-sm outline-none"
      />
      <div className="flex bg-white px-8 py-4 justify-end gap-4 items-center">
        <div className="text-end ">Words : {wordsLength}</div>
        {actions || null}
      </div>
    </div>
  );
};

export default TextArea;
