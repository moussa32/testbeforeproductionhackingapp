import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, handlePageClick, resetNumber }) => {
  return (
    <ReactPaginate
      previousLabel={"السابق"}
      nextLabel={"التالي"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      initialPage={0}
      forcePage={resetNumber}
      containerClassName={"pagination d-flex justify-content-center flex-wrap"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
