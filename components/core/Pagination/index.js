import cx from "classnames";
import { ELLIPSIS } from "./constants";

const Pagination = ({
  paginationList,
  setCurrentPage,
  currentPage,
  numberOfPages,
}) => {
  const handlePreviousPageClick = () =>
    setCurrentPage((prevPage) => prevPage - 1);
  const handleNextPageClick = () => setCurrentPage((prevPage) => prevPage + 1);
  const handlePageNumberClick = ({ target: { name } }) =>
    setCurrentPage(Number(name));

  const isPrevButtonDisabled = currentPage <= 1;
  const isNextButtonDisabled = currentPage >= numberOfPages;

  const renderPaginationButtons = () =>
    paginationList.map((pageNumber) => {
      const isSelectedPage = pageNumber === currentPage;

      if (pageNumber === ELLIPSIS)
        return <div className="pointer-events-none">{pageNumber}</div>;

      return (
        <button
          key={pageNumber}
          className={cx({ "font-bold": isSelectedPage })}
          onClick={handlePageNumberClick}
          name={pageNumber}
          type="button"
        >
          {pageNumber}
        </button>
      );
    });

  return (
    <div className="flex text-sm leading-5 gap-2">
      <button
        onClick={handlePreviousPageClick}
        disabled={isPrevButtonDisabled}
        type="button"
      >
        {"<"}
      </button>
      {renderPaginationButtons()}
      <button
        onClick={handleNextPageClick}
        disabled={isNextButtonDisabled}
        type="button"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
