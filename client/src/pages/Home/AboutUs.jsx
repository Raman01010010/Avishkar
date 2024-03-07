import styles, { layout } from "../../style";
import logo from "./culrav/assets/culravAviskarLogo.png";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";
const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          {/* <img src={BackGroundImage1} alt="Background Image" /> */}
          <div className="record">
            <span>
              <img src={logo} alt="Logo" />
            </span>
          </div>
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>

        <div className={layout.sectionInfo}>
          <h2
            className="text-3xl text-black font-bold mb-4 flex justify-center rumoura-font "
            style={{
              fontSize: "xx-large",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            About Us
          </h2>
          <h6 className="protest-revolution-regular text-xl text-justify rumoura-font">
            MOTILAL NEHRU NATIONAL INSTITUTE OF TECHNOLOGY ALLAHABAD, PRAYAGRAJ
            an Institute of National Importance (by GOI), MNNIT ranks 3rd among
            The 30 NITs in India, as per QS Universities Rankings 2017. It was
            established as one of The seventeen Regional Engineering Colleges
            (RECs) of India in 1961 as a joint enterprise of The Government of
            India And The Government of Uttar Pradesh.
          </h6>

          {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
