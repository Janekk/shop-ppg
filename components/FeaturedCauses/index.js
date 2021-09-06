import LoadingState from "../core/LoadingState";
import CauseCard from "./components/CauseCard";
import useFeaturedCauses from "./useFeaturedCauses";

const MOCK_MERCHANT = {
  name: "Coach",
};

const FeaturedCauses = () => {
  const { featuredCauses, isFetching } = useFeaturedCauses();

  const renderFeaturedCauses = () => {
    if (isFetching)
      return (
        <div className="min-h-530px">
          <LoadingState />
        </div>
      );
    return featuredCauses.map((causeData) => (
      <CauseCard key={causeData.id} data={causeData} />
    ));
  };

  return (
    <div className="flex flex-col items-center gap-11">
      <p className="text-m text-center whitespace-pre-line leading-7">
        {`${MOCK_MERCHANT.name} is committed to creating an impact for the communities we serve and supporting the
        causes most important to our Insider members. Select a cause of your choice below from
        featured causes or search.`}
      </p>
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-lg font-extrabold uppercase">Featured Causes</h3>
        <p className="text-m">Support a charity that we love</p>
      </div>
      <div className="flex gap-6">{renderFeaturedCauses()}</div>
    </div>
  );
};

export default FeaturedCauses;
