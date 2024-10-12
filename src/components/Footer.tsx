import logo from "../assets/logos/gfg logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-row  relative font-Silkscreen justify-around  bg-green-500  w-full  text-black ftracking-wide text-[10px] sm:text-sm sm:mx-auto md:text-lg gap-1">
      <div className="flex flex-col sm:flex-row justify-center items-center mx-auto sm:gap-4 gap-2 m-2 sm:m-2 w-[45%]">
        <img src={logo} alt="" className="sm:h-22 w-48 h-40" />
      </div>
      <div className="flex flex-col m-2 mx-auto justify-center text-center sm:m-2 w-[40%]">
        <h1 className=" text-center leading-tight">
          SHRADHA PARK, B-37/39, HINGNA RD, MIDC, <br /> NAGPUR, MAHARASHTRA
          440028
        </h1>
      </div>
      <div className="flex flex-col font-Silkscreen m-2 mx-auto  justify-center text-center sm:m-2 leading-normal w-[40%]">
        <h1>FOLLOW US ON</h1>
        <div className="flex mx-auto justify-center gap-2 items-center sm:w-1/2 w-3/4 mt-2 ">
          <a
            href="https://www.instagram.com/gfg_ghrcemn/"
            target="_blank"
            className=""
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/gfg-ghrcemn/"
            target="_blank"
            className=""
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;