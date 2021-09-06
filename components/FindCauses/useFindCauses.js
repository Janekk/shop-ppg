import { useState } from "react";
import Api from "./api";

const useFindCauses = () => {
  const [foundCauses, setFoundCauses] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasPerformedSearch, setHasPerformedSearch] = useState(false);

  const findCauses = async () => {
    setHasPerformedSearch(true);
    setIsFetching(true);
    try {
      const causes = await Api.findCauses();
      setFoundCauses(causes);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
      setHasPerformedSearch(true);
    }
  };

  const resetResult = () => {
    setFoundCauses([]);
    setHasPerformedSearch(false);
  };

  return {
    findCauses,
    resetResult,
    foundCauses,
    hasPerformedSearch,
    isFetching,
  };
};

export default useFindCauses;
