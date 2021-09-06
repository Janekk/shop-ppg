import { useEffect, useState, useMemo } from "react";

import { ELLIPSIS, MAXIMUM_NUMBER_OF_PAGES } from "./constants";

const usePagination = ({ numberOfItems, maxItemsInPage = 8 }) => {
  const [paginationList, setPaginationList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = useMemo(
    () => Math.ceil(numberOfItems / maxItemsInPage),
    [numberOfItems, maxItemsInPage]
  );

  const getPagesRemaining = (totalPagesList) => {
    const pagesRemainingLeft = totalPagesList.filter(
      (page) => page < currentPage
    ).length;
    const pagesRemainingRight = totalPagesList.filter(
      (page) => page > currentPage
    ).length;

    return { pagesRemainingLeft, pagesRemainingRight };
  };

  const getCurrentPagesList = () => {
    const totalPagesList = Array.from(
      { length: numberOfPages },
      (_, i) => i + 1
    );
    const { pagesRemainingLeft, pagesRemainingRight } = getPagesRemaining(
      totalPagesList
    );

    const isPagesRemainingRightGreaterThanThree = pagesRemainingRight > 3;
    const isPagesRemainingLeftGreaterThanThree = pagesRemainingLeft > 3;

    const hasTooManyPages = numberOfPages > MAXIMUM_NUMBER_OF_PAGES;

    const currentPagesAvaiable = totalPagesList.filter(
      (page) =>
        !hasTooManyPages ||
        page === 1 ||
        page === numberOfPages ||
        page === currentPage - 1 ||
        page === currentPage ||
        page === currentPage + 1 ||
        // if the page is one of the last five pages and the remaining pages to the right is lesser than three, this page should be included into the pagination
        (page > numberOfPages - 5 && !isPagesRemainingRightGreaterThanThree) ||
        // if the page is one of the first five pages and the remaining pages to the left is lesser than three, this page should be included into the pagination
        (page <= 5 && !isPagesRemainingLeftGreaterThanThree)
    );

    if (hasTooManyPages && isPagesRemainingRightGreaterThanThree)
      currentPagesAvaiable.splice(currentPagesAvaiable.length - 1, 0, ELLIPSIS);

    if (hasTooManyPages && isPagesRemainingLeftGreaterThanThree)
      currentPagesAvaiable.splice(1, 0, ELLIPSIS);

    setPaginationList(currentPagesAvaiable);
  };

  const sliceResultList = (resultItems) => {
    const start = currentPage * maxItemsInPage - maxItemsInPage;
    const end = currentPage * maxItemsInPage;

    return resultItems.slice(start, end);
  };

  useEffect(() => {
    getCurrentPagesList();
  }, [numberOfItems, currentPage]);

  return {
    paginationList,
    sliceResultList,
    setCurrentPage,
    currentPage,
    numberOfPages,
  };
};

export default usePagination;
