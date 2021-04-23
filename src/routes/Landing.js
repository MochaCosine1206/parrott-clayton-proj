import React, { useEffect, useContext } from "react";
import FlexContainer from "../components/FlexContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeCard from "../components/HomeCard";
import HomeCardGrid from "../components/HomeCardGrid";
import LoadMoreButton from "../components/LoadMoreButton";
import SortingSection from "../components/SortingSection";
import SortingSectionContainer from "../components/SortingSectionContainer";
import { Context as DataContext } from "../context/DataContext";

const Landing = () => {
  const { state, getData } = useContext(DataContext);
  const { data } = state;

  useEffect(() => {
    getData();
  }, []);

  return (
    <FlexContainer>
      <Header />
      <SortingSectionContainer>
        <SortingSection />
      </SortingSectionContainer>
      <HomeCardGrid>
        {data.map((item) => (
          <HomeCard
            key={item.homeName}
            imageURL={item.imageURL}
            homeName={item.homeName}
            startingPrice={item.startingPrice}
            sqft={item.sqft}
            beds={item.beds}
            baths={item.baths}
            isMultiSection={item.isMultiSection}
          />
        ))}
      </HomeCardGrid>
      <LoadMoreButton />
      <Footer />
    </FlexContainer>
  );
};

export default Landing;
