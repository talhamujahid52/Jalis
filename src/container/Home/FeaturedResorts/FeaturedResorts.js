import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Loader from "components/Loader/Loader";
import Container from "components/UI/Container/Container";
import Heading from "components/UI/Heading/Heading";
import TextLink from "components/UI/TextLink/TextLink";
import SectionTitle from "components/SectionTitle/SectionTitle";
import ProductCard from "components/ProductCard/ProductCard";
import ImageCard from "components/ImageCard/ImageCard";
import GlideCarousel, {
  GlideSlide,
} from "components/UI/GlideCarousel/GlideCarousel";
import useDataApi from "library/hooks/useDataApi";
import { LISTING_POSTS_PAGE } from "settings/constant";
import LocationWrapper, { CarouselSection } from "./FeaturedResorts.style";
const carouselOptions = {
  type: "carousel",
  perView: 3,
  gap: 30,
  hoverpause: true,
  breakpoints: {
    1440: {
      perView: 3,
      gap: 20,
    },
    1200: {
      perView: 3,
      gap: 10,
    },
    1100: {
      perView: 2,
      gap: 15,
    },
    750: {
      perView: 1,
      gap: 20,
    },
    480: {
      perView: 1,
      gap: 0,
    },
  },
};

const FeaturedResort = () => {
  // const [data, setData] = useState();
  const { data, loading } = useDataApi("/data/top-hotel.json");
  // console.log("Data in Top hotel ", data);

  // useEffect(() => {
  //   // const { data, loading } = useDataApi("/data/top-hotel.json");
  //   setData(data1);
  //   console.log("Data in Top hotel ", data);
  // }, [data1]);

  return (
    <LocationWrapper>
      <Container fluid={true}>
        <SectionTitle
          title={<Heading content="Featured Resorts" />}
          link={<TextLink link={LISTING_POSTS_PAGE} content="Show all" />}
        />

        <CarouselSection>
          {data.length !== 0 ? (
            <GlideCarousel
              carouselSelector="explore_carousel"
              prevButton={<IoIosArrowBack />}
              nextButton={<IoIosArrowForward />}
              options={carouselOptions}
            >
              <>
                {data.map((post, index) => (
                  <GlideSlide key={index}>
                    <ProductCard link="listing" {...post} />

                    {/* <ImageCard
                      link="listing"
                      imageSrc={post.locationImage.url}
                      title={post.city}
                      meta={`${post.numberOfPost} Hotels`}
                    /> */}
                  </GlideSlide>
                ))}
              </>
            </GlideCarousel>
          ) : (
            <Loader />
          )}
        </CarouselSection>
      </Container>
    </LocationWrapper>
  );
};

export default FeaturedResort;
