import {
  GET_CATEGORIES,
  GET_BLOGS,
  GET_BLOG,
  GET_HOME_ADS,
  GET_BLOG_AD,
  GET_BLOGS_COUNT,
} from "../actions/types";

const initialState = {
  categories: [],
  blogsList: [],
  blogsCount: {},
  blog: null,
};

export default function blogs(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };
    case GET_BLOGS:
      return {
        ...state,
        blogsList: [...action.blogs],
      };
    case GET_BLOGS_COUNT:
      return {
        ...state,
        blogsCount: action.blogsCount,
      };
    case GET_BLOG:
      return {
        ...state,
        blog: { ...action.blog },
      };
    case GET_HOME_ADS:
      return {
        ...state,
        homeAds: [...action.homeAds],
      };
    case GET_BLOG_AD:
      return {
        ...state,
        blogAd: { ...action.blogAd },
      };
    default:
      return state;
  }
}
