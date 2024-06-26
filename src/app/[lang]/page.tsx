import { LangParams } from "@/types/lang";
import AboutUs from "../components/sections/AboutUs";
import ContactUs from "../components/sections/ContactUs";
import HomeCarousel from "../components/sections/HomeCarousel";
import OurServices from "../components/sections/OurServices";
import OurTeam from "../components/sections/OurTeam";

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default function Home({ params }: LangParams) {

  return (
    <main>
      <p>Lang: {params.lang}</p>
      <p></p>
      <HomeCarousel />
      <AboutUs />
      <OurServices />
      <OurTeam />
      <ContactUs />
    </main>
  );
}
