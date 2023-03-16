import ActionArea from "components/ActionArea";
import InitialLoader from "components/InitialLoader";
import Textarea from "components/Textarea";
import PageWrapper from "components/wrappers/PageWrapper";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);
  const loaded = () =>
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => setHide(true), 500);
    }, 3000);

  return (
    <>
      <div
        className={`transition ease-in-out delay-150 duration-500 
            ${!loading ? "opacity-0" : "opacity-100"}
            ${hide ? "hidden" : "block"}
        `}
      >
        <InitialLoader loaded={loaded} />
      </div>

      {!loading && (
        <PageWrapper>
          <ActionArea />
        </PageWrapper>
      )}
    </>
  );
};

export default MainPage;
