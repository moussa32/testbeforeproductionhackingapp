import {
  GET_CATEGORIES,
  GET_BLOGS,
  GET_BLOG,
  GET_HOME_ADS,
  GET_BLOG_AD,
  GET_BLOGS_COUNT,
} from "./types";
import { getCategoriesList, getBlogsList, getBlogDetails } from "../../../api/BlogsApi";
import { getAllHomeAds, getSharedAd } from "../../../api/AdsApi";
// import { showLoading, hideLoading } from "react-redux-loading";

export function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories: [...categories],
  };
}

export function getBlogs(blogs) {
  return {
    type: GET_BLOGS,
    blogs: [...blogs],
  };
}

export function getBlogsCount(count) {
  return {
    type: GET_BLOGS_COUNT,
    blogsCount: count,
  };
}

export function getHomeAds(ads) {
  return {
    type: GET_HOME_ADS,
    homeAds: [...ads],
  };
}

export function getBlog(blog) {
  return {
    type: GET_BLOG,
    blog: { ...blog },
  };
}

export function getBlogAd(ad) {
  return {
    type: GET_BLOG_AD,
    blogAd: { ...ad },
  };
}

export function handleGetCategories() {
  return dispatch => {
    return getCategoriesList()
      .then(res => res.data)
      .then(categories => dispatch(getCategories(categories)));
  };
}

export function handleGetBlogs(fetchPageNumber) {
  return dispatch => {
    return getBlogsList(fetchPageNumber)
      .then(res => res.data)
      .then(blogs => {
        dispatch(getBlogsCount(blogs.count));
        dispatch(getBlogs(blogs.results));
      });
  };
}

export function handleGetBlog(id) {
  return dispatch => {
    return getBlogDetails(id)
      .then(res => res.data)
      .then(blog => dispatch(getBlog(blog)));
  };
}

export function handleGetHomeAds() {
  return dispatch => {
    return getAllHomeAds()
      .then(res => res.data)
      .then(ads => dispatch(getHomeAds(ads)));
  };
}

export function handleGetBlogAd() {
  return dispatch => {
    return getSharedAd()
      .then(res => res.data)
      .then(ad => dispatch(getBlogAd(ad)));
  };
}
