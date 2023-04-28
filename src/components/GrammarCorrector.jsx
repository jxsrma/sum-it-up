import React from "react";

const GrammarCorrector = ({ sentence }) => {
  const [selected, setSelected] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => setModal(!modal);
  React.useEffect(() => {
    setSelected(sentence.text);
  }, [sentence]);

  return (
    <>
      <span onClick={toggleModal}>
        {sentence.text === selected ? (
          <span className={`cursor-pointer ${sentence.color}`}>{selected}</span>
        ) : (
          <span className={`cursor-pointer text-black bg-gray-300`}>
            {selected}
          </span>
        )}
      </span>
      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 grid place-items-center z-10 bg-white/50">
          <div className="flex flex-col bg-white rounded-md shadow-lg">
            <div className="flex items-center border-b justify-between">
              <h2 className="px-2">{sentence?.data?.message}</h2>
              <button
                className="bg-red-400 text-white p-2"
                onClick={toggleModal}
              >
                X
              </button>
            </div>
            <div className="p-2 text-sm flex flex-col gap-2">
              Select Replacement
              <div className="flex gap-2 flex-wrap">
                {sentence?.data?.replacements?.map((replacement) => (
                  <button
                    className="bg-gray-600 py-1 px-2 rounded-md text-white"
                    onClick={() => {
                      setSelected(replacement);
                      toggleModal();
                    }}
                  >
                    {replacement}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GrammarCorrector;
