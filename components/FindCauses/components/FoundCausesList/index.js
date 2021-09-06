import LoadingState from "../../../core/LoadingState";
import Pagination from "../../../core/Pagination";
import usePagination from "../../../core/Pagination/usePagination";
import CauseCard from "../CauseCard";

const FoundCausesList = ({ foundCauses, resetResult, isFetching }) => {
  const causesNumber = foundCauses.length;

  if (isFetching) return <LoadingState />;

  if (!causesNumber) return <h3>Empty state - Any causes found</h3>;

  const { sliceResultList, ...paginationProps } = usePagination({
    numberOfItems: causesNumber,
  });

  return (
    <div className="flex flex-col gap-10">
      <span className="text-sm font-normal uppercase">
        Results: {causesNumber} nonprofits
      </span>
      <div className="flex flex-col w-800px border-t-2">
        {sliceResultList(foundCauses).map((causeData) => (
          <CauseCard key={causeData.id} data={causeData} />
        ))}
        <div className="flex justify-between py-5 w-full">
          <Pagination {...paginationProps} />
          <button className="text-sm" onClick={resetResult} type="button">
            Close Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoundCausesList;
