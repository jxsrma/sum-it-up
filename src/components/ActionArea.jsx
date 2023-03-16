import { AppContext } from "App";
import React, { useContext, useReducer, useState } from "react";
import TextArea from "./Textarea";

const reducer = (state, action) => {
  if (["input", "output"].includes(action?.target?.name))
    return { ...state, [action?.target?.name]: action?.target?.value };
  return state;
};

const ActionArea = () => {
  const [state, dispatch] = useReducer(reducer, { input: "", output: "" });
  const { mode } = useContext(AppContext);

  return (
    <div className="flex flex-1 gap-4">
      {/* input textarea */}
      <TextArea
        placeholder="Type or Paste here..."
        name="input"
        value={state.input}
        onChange={dispatch}
        actions={
          <button
            className="
          rounded-md py-1 px-2
          outline
          bg-green-200 text-green-600   
          hover:bg-green-100 active:bg-green-300
          "
          >
            {mode.name}
          </button>
        }
      />
      {/* output textarea */}
      <TextArea
        placeholder="You will see the output here..."
        name="output"
        value={state.output}
        onChange={dispatch}
      />
    </div>
  );
};

export default ActionArea;
