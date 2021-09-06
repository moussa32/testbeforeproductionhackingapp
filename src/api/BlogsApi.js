import axios from "axios";
import { apiUrl } from "./Constants";

const blogsURL = apiUrl + "/blogs";

export const getCategoriesList = () => axios.get(`${blogsURL}/categories/`);

// export const getBlogs = (pageNumber, status) =>
//   axios.get(`${blogsURL}/?page=${pageNumber}&${status}`);

export const getBlogsList = pageNumber => axios.get(`${blogsURL}/?page=${pageNumber}`);

export const getBlogsBySearch = (queryPageNum, keyword) =>
  axios.get(`${apiUrl}/blogs/?page=${queryPageNum}&search=${keyword}`);

export const getBlogsBySearchCategory = (queryPageNum, keyword, category) =>
  axios.get(`${apiUrl}/blogs/?page=${queryPageNum}&search=${keyword}&category__title=${category}`);

export const getBlogDetails = id => axios.get(`${blogsURL}/${id}/`);

export const getFeaturedBlogs = () => axios.get(`${blogsURL}/important`);

export const getBlogsByCategory = (category, currentPage) =>
  axios.get(`${blogsURL}/?category__title=${category}&page=${currentPage}`);
