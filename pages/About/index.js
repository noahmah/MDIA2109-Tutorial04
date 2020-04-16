import { useEffect } from "react";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import "./About.css";
import { FaUser } from "react-icons/fa";

// function GoHome() {
//   //   if (confirm("Are you sure?")) {
//   //     Router.push("/ChatPage");
//   document.querySelector("#ContactApp").style.opacity = 0;
//   setTimeout(function () {
//     Router.push();
//   }, 1000);
// }

const About = () => {
  useEffect(() => {
    setTimeout(() => {}, 50);
    document.querySelector("#AboutApp").style.left = 0;
  }, []);

  return (
    <div id="AboutApp">
      <Header fontSize="24px" text="About" /> <FaUser />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {/* <CustomButton onClick={GoHome} text="back to home" /> */}
    </div>
  );
};

export default About;
