import React from "react";
import MenuBar from "../../components/MenuBar/MenuBar";
import Hero from "../../components/Hero/Hero";
import Cards from "../../components/Cards/Cards";
function HomePage() {
  return (
    <>
    <MenuBar/>
      <Hero/>
      <div className="flex flex-col gap-10 ml-[6.4%]">
        <Cards title="Latest Releases" category="movie"/>
        <Cards title="Top Rated On IMBD" category="all"/>
        <Cards title="Comming Soon" category="tv"/>
      </div>
    </>
  );
}

export default HomePage;
