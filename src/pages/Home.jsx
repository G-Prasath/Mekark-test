import React from "react";
import Banner from "../components/Home/Banner";
import About from "../components/Home/About";
import ProductCards from "../components/Home/ProductCards";
import Whychoose from "../components/Home/Whychoose";
import DesignServices from "../components/Home/DesignServices";
import HomeForm from "../components/Home/HomeForm";
import Map from "../components/Home/Map";
import Testimonials from "../components/Home/Testimonials";
import ListofServiceCards from "../components/Home/ListofServiceCards";
import ClientList from "../components/Common/ClientList";
import Blog from "../components/Home/Blog";
import ManufacturingUnit from "../components/Home/ManufacturingUnit";
import Funfacts from "../components/Home/Funfacts";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <ListofServiceCards />
      <ManufacturingUnit />
      <ProductCards />
      <Funfacts />
      <DesignServices />
      <Whychoose />
      <Map />
      <HomeForm />
      <Blog />
      <ClientList />
      <Testimonials />
    </div>
  );
};

export default Home;
