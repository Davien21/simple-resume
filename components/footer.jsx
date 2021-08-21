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
              <div className="d-flex ">
                <div className="col-auto  ">
                  <TwitterImage />
                </div>
                <div className="col-auto">
                  <GithubImage />
                </div>
                <div className="col-auto ">
                  <LinkedinImage />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactButton />
      </div>
      <div className="bottom mt-3">
        <p className="">
          Developed with <span className="">♥</span> by me
        </p>
      </div>
    </footer>
  );
}

export default Footer;
