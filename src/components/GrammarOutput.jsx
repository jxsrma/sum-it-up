import React from "react";
import GrammarCorrector from "./GrammarCorrector";

const randomColorTw = () => {
  const colors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
  ];
  return `text-white ${colors[Math.floor(Math.random() * colors.length)]}`;
};

const GrammarOutput = ({ input, grammarOutput }) => {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    if (grammarOutput.length === 0) return;
    let newState = [];
    let indices = [];

    grammarOutput.forEach((output) => {
      let s = output.offset;
      let e = s + output.errorLength;
      indices.push([s, e]);
    });
    let x = 0;
    let i = 0;
    while (x < input.length && i < indices.length) {
      const [start, end] = indices[i];
      newState.push({
        text: input.slice(x, start),
        incorrect: false,
      });
      x = end;
      newState.push({
        text: input.slice(start, end),
        incorrect: true,
        color: randomColorTw(),
        data: grammarOutput[i],
      });
      i++;
    }
    if (x < input.length) {
      newState.push({
        text: input.slice(x),
        incorrect: false,
      });
    }
    setState(newState);
  }, [input, grammarOutput]);
  console.log(grammarOutput);
  console.log(state);

  return (
    <div className="flex flex-1 flex-col shadow-lg outline-dotted outline-2 rounded-md outline-slate-400">
      <div className="w-full h-full p-4 font-mono resize-none rounded-sm outline-none">
        {state.map((sentence, index) =>
          sentence.incorrect ? (
            <GrammarCorrector sentence={sentence} />
          ) : (
            <span>{sentence.text}</span>
          )
        )}
      </div>
    </div>
  );
};

export default GrammarOutput;
