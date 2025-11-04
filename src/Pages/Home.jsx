import Hero from "../components/Hero";
import ServiceCards from "../components/ServiceCard";
import WhyChooseUs from "../Pages/WhyChooseUs"
import ProtectSection from "../Pages/Protectsection";
import YourHealth from "../Pages/YourHealth";
import { Helmet } from "react-helmet-async";
import InsuranceSection from "../Pages/InsuranceSection";


const Home = () => {
  return (
    <>
    <Helmet>
        <title>Insure American | Protect What Matters Most</title>
        <meta
          name="description"
          content="Insure American offers life and final expense insurance plans to secure your family's future. Get affordable coverage and peace of mind today."
        />
        <meta
          name="keywords"
          content="life insurance, final expense, affordable insurance, family protection, Insure American"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Hero />
      <ServiceCards />
      <ProtectSection/>
     <WhyChooseUs/>
     <YourHealth/>
     <InsuranceSection/>
    </>
  );
};

export default Home;
