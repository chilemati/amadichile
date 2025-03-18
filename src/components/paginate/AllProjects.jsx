import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProjectCards from "./ProjectCards";

// Example items, to simulate fetching from another resources.

function AllProjects({ itemsPerPage, items }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&  <ProjectCards data={currentItems} show={2} />  }
          
      </>
    );
  }

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={">"}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel={'<'}
        renderOnZeroPageCount={null}
        className="Paginate myScrollBar flexBetween xl:flexCenter flex-nowrap w-full mt-[34px] mb-[64px] px-1 xl:px-[24px] "
      />
    </>
  );
}

export default React.memo(AllProjects);
