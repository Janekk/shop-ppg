import { useEffect, useState } from "react";
import Api from "./api";

const useFeaturedCauses = () => {
  const [featuredCauses, setFeaturedCauses] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getFeaturedCauses = async () => {
    setIsFetching(true);
    try {
      const causes = await Api.getFeaturedCauses();
      setFeaturedCauses(causes);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getFeaturedCauses();
  }, []);

  return { featuredCauses, isFetching };
};

export default useFeaturedCauses;
