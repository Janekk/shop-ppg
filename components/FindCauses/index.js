import FoundCausesList from "./components/FoundCausesList";
import Form from "./components/Form";
import useFindCauses from "./useFindCauses";

const FindCauses = () => {
  const {
    findCauses,
    resetResult,
    foundCauses,
    hasPerformedSearch,
    isFetching,
  } = useFindCauses();

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-m font-bold uppercase">Find your Charity</h3>
        <p className="text-m">Support a charity that you love</p>
      </div>
      <div className="flex flex-col gap-20">
        <Form onSubmit={findCauses} />
        {hasPerformedSearch && (
          <FoundCausesList
            foundCauses={foundCauses}
            resetResult={resetResult}
            isFetching={isFetching}
          />
        )}
      </div>
    </div>
  );
};

export default FindCauses;
