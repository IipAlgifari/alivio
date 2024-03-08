import { Fragment } from "react";
import SectionBanner from "../SectionBanner";
import SectionWorks from "../SectionWorks";
import SectionGallery from "../SectionGallery";
import SectionVideo from "../SectionVideo";
import SectionProduct from "../SectionProduct";

const Main = () => {
  return (
     <Fragment>
        <SectionBanner/>
        <SectionWorks/>
        <SectionGallery/>
        <SectionVideo/>
        <SectionProduct/>
     </Fragment>
  );
};

export default Main;
