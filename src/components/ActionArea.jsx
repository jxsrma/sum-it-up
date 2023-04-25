import { AppContext } from "App";
import modes from "constants/modes";
import React, { useContext, useReducer, useState } from "react";
import TextArea from "./Textarea";

const reducer = (state, action) => {
  if (action?.set) return { ...state, ...action.set };
  if (["input", "output"].includes(action?.target?.name))
    return { ...state, [action?.target?.name]: action?.target?.value };
  return state;
};

const ActionArea = () => {
  const [state, dispatch] = useReducer(reducer, { input: "", output: "" });
  const { mode, loading, setLoading } = useContext(AppContext);
  console.log(mode);

  const handleExecute = async () => {
    const { input } = state;
    const datatToSend = {
      operation: mode.name,
      paragraph: input,
      minLength: parseInt(mode.value),
    };

    // if (mode.name === modes.summarize) {
    //   datatToSend["minLength"] = mode.value;
    //   datatToSend["maxLength"] = mode.value;
    // }
    setLoading(true);

    const res = await fetch("send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datatToSend),
    });
    const data = await res.json();
    console.log(data);
    dispatch({ set: { output: data?.data || "Something went wrong" } });
    setLoading(false);
  };

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
            onClick={handleExecute}
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
