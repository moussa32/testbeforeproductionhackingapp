import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import CustomSelect from "../../../shared/components/FormFields/CustomSelect";
import BlogCard from "./BlogCard";
import Pagination from "./layout/Pagination";

const BlogsList = ({ categories, blogsList }) => {
  const perPage = 5;
  const sortOptions = [
    { id: 0, label: "الأحدث", value: "الأحدث" },
    { id: 1, label: "الأقدم", value: "الأقدم" },
  ];
  const [categoriesFilters, setCategoriesFilters] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [sortedBlogs, setSortedBlogs] = useState([]);
  const [currentPageBlogs, setCurrentPageBlogs] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [currentSort, setCurrentSort] = useState({ id: 0, label: "الأحدث", value: "الأحدث" });

  useEffect(() => {
    let sortedBlogs = [...blogsList];
    let blogsCount = blogsList.length;

    if (currentFilter) {
      sortedBlogs = blogsList.filter(
        (blog) => blog.category === currentFilter.id
      );
      blogsCount = sortedBlogs.length;
    }

    if (currentSort.id === 0) {
      sortedBlogs.sort((a, b) => new Date(b.publish) - new Date(a.publish));
    } else {
      sortedBlogs.sort((a, b) => new Date(a.publish) - new Date(b.publish));
    }

    setSortedBlogs([...sortedBlogs]);
    setCurrentPageBlogs([...sortedBlogs.slice(0, perPage)]);
    setPageCount(blogsCount / perPage);
  }, [blogsList, currentFilter, currentSort]);

  useEffect(() => {
    const filters = [];

    if (categories) {
      categories.forEach((category) =>
        filters.push({
          id: category.id,
          label: category.title,
          value: category.title,
        })
      );
      setCategoriesFilters([...filters]);
    }
  }, [categories]);

  const onFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const onSortChange = (option) => {
    setCurrentSort(option);
  };

  const handlePageClick = (data) => {
    const selected = data.selected;
    const offset = Math.ceil(selected * perPage);
    setCurrentPageBlogs([...sortedBlogs.slice(offset, offset + perPage)]);
  };

  return (
    <div className="blogs-list mb-4">
      <div className="blogs-list-title mb-4 text-center">
        <h2>{currentSort === 0 ? "أحدث المدونات" : "أقدم المدونات"}</h2>
      </div>
      <div className="blogs-list-body row">
        <div className="sidenav col-md-3">
          <CustomSelect
            id="category"
            value={currentFilter}
            options={categoriesFilters}
            isClearable={true}
            isSearchable={true}
            placeholder="الفئة"
            label="فلترة بحسب الفئة"
            classNames="form-group w-100 categories-filters"
            onChange={onFilterChange}
          />
          <CustomSelect
            id="sort"
            value={currentSort}
            options={sortOptions}
            isSearchable={true}
            label="ترتيب حسب"
            classNames="form-group w-100 sort-options"
            onChange={onSortChange}
          />
        </div>
        <div className="main p-0 col-md-9">
          {sortedBlogs.length > 0 ? (
            currentPageBlogs.length > 0 &&
            currentPageBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                category={
                  categories.filter(
                    (category) => category.id === blog.category
                  )[0]
                }
              />
            ))
          ) : (
            <div className="alert alert-dark text-center" role="alert">
              لا يوجد أي مدونات تحت هذه الفئة حتى الآن، يمكنك المحاولة مرة آخرى
              لاحقًا.
            </div>
          )}
        </div>
      </div>
      {sortedBlogs.length > perPage ? (
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ blogs }) => {
  return {
    categories: blogs.categories,
    blogsList: blogs.blogsList,
  };
};

export default connect(mapStateToProps)(BlogsList);
