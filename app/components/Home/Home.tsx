import React from "react";
import Hero from "./Hero";
import JobCategory from "./JobCategory";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedJobs />
      <JobCategory />
    </div>
  );
};

export default Home;
