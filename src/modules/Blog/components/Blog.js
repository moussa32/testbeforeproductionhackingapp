import React, { useEffect } from "react";
import { connect } from "react-redux";
import FeaturedBlogs from "../../Blog/components/Home/FeaturedBlogs";
import AdsBanner from "../../Blog/components/Home/AdsBanner";
import BlogsList from "../components/Blog/BlogsList";

import { handleGetCategories, handleGetBlogs, handleGetHomeAds } from "../actions/index";

const BlogHome = props => {
  const { dispatch, homeAds } = props;

  useEffect(() => {
    dispatch(handleGetCategories());
    dispatch(handleGetBlogs(1));
    dispatch(handleGetHomeAds());
  }, [dispatch]);

  return (
    <div className="home blog-wrapper">
      <FeaturedBlogs />
      <div className="container px-0">
        {homeAds && homeAds.length > 0 && <AdsBanner />}
        <BlogsList />
      </div>
    </div>
  );
};

const mapStateToProps = ({ blogs }) => {
  return {
    homeAds: blogs.homeAds,
  };
};

export default connect(mapStateToProps)(BlogHome);
