import React from "react";
import MainHeaderSection from "../sections/MainHeaderSection/MainHeaderSection";
import AdvertisementSection from "../sections/AdvertisementSection/AdvertisementSection";
import CategorySection from "../sections/CategorySection/CategorySection";
import BestSellerSection from "../sections/BestSellerSection/BestSellerSection";
import ListSection from "../sections/ListSection/ListSection";
import ReviewSection from "../sections/ReviewSection/ReviewSection";
import FAQSection from "../sections/FAQSection/FAQSection";
import MainFooterSection from "../sections/MainFooterSection/MainFooterSection";


const Homepage: React.FC = () => {
  return (
    <>
      <MainHeaderSection />
      <AdvertisementSection/>
      <CategorySection/>
      <BestSellerSection/>
      <ListSection/>
      <ReviewSection/>
      <FAQSection/>
      <MainFooterSection/>
    </>
  );
};

export default Homepage;
