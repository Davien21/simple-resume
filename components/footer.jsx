import GithubImage from "./icons/github";
import TwitterImage from "./icons/twitter";
import LinkedinImage from "./icons/linkedin";
import Image from "next/image";
import { hngLogo, hngLogos, logos } from "../images";
import ContactButton from "./contactButton";

function Footer(props) {
  return (
    <footer>
      <div className="row mx-0 top ">
        <div className="col-lg-8 socials">
          <div className="row align-items-center">
            <span className="col-auto mt-3 mt-md-0  title">Social Media:</span>
            <div className="col col-lg-auto px-0 mt-3 mt-md-0">
              <div className="row flex-nowrap justify-content-between">
                <div className="col-auto  ">
                  <TwitterImage />
                </div>
                <div className="col-auto  ">
                  <GithubImage />
                </div>
                <div className="col-auto ">
                  <LinkedinImage />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center logo-div ml-md-auto mt-4 mt-md-0 col-auto  ">
              <Image
                src={logos}
                alt="Zuri / I4G Logo"
                width={238}
                height={59}
              />
            </div>
          </div>
        </div>
        <ContactButton />
      </div>
      <div className="bottom mt-3 row align-items-center">
        <p className="col-auto">Developed with ♥ by Me for HNG</p>
        {/* <div className="col-auto">
          <Image src={logos} alt="Zuri / I4G Logo" width={250} height={62} />
        </div> */}
        {/* <div className="col-auto">
          <Image src={hngLogo} alt="HNG Logo" width={100} height={100} />
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
