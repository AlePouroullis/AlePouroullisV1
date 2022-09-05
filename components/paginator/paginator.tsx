import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

type Props = {
  skip?: number;
  range: number[];
  handlePaginationChange: Function;
};

const Paginator: FunctionComponent<Props> = ({
  skip,
  range,
  handlePaginationChange,
}) => {
  skip = !!skip ? skip : 0;

  const [page, setPageNumber] = useState(1);
  useEffect(() => {
    // @ts-ignore
    return setPageNumber(skip);
  }, [skip]);

  const moveToPreviousPage = () => {
    if (page > 1) {
      handlePaginationChange(page - 1);
      return setPageNumber(page - 1);
    }

    return null;
  };

  const moveToNextPage = () => {
    if (page < range[range.length - 1]) {
      handlePaginationChange(page + 1);
      return setPageNumber(page + 1);
    }

    return null;
  };

  const moveToPage = (pageNumber: number) => {
    handlePaginationChange(pageNumber);
    return setPageNumber(pageNumber);
  };

  const renderPageIndicators = (num, index) => (
    <span
      className={`page-number ${num === page ? "selected" : ""}`}
      key={index}
      onClick={() => moveToPage(num)}
    >
      {num}
    </span>
  );

  return (
    <Fragment>
      <div className="paginator">
        {range.length > 1 ? (
          <button className="button" onClick={moveToPreviousPage}>
            <FontAwesomeIcon className="left-indicator" icon={faAngleLeft} />
          </button>
        ) : null}

        {range.map(renderPageIndicators)}

        {range.length > 1 ? (
          <button className="button" onClick={moveToNextPage}>
            <FontAwesomeIcon className="right-indicator" icon={faAngleRight} />
          </button>
        ) : null}
      </div>
    </Fragment>
  );
};

export default Paginator;
