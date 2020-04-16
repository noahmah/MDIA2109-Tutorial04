import { useEffect } from "react";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import "./contact.css";
import Link from "next/link";
import { MdContacts } from "react-icons/Md";

// function GoHome() {
//   //   if (confirm("Are you sure?")) {
//   //     Router.push("/ChatPage");
//   document.querySelector("#ContactApp").style.opacity = 0;
//   setTimeout(function () {
//     Router.push("pages/index.js");
//   }, 1000);
// }

const Contact = () => {
  useEffect(() => {
    setTimeout(() => {}, 50);
    document.querySelector("#ContactApp").style.left = 0;
  }, []);

  return (
    <div id="ContactApp">
      <Header fontSize="24px" text="Contact Me!" />
      <CustomButton text="email" />
      <MdContacts fontSize="3em" />
      {/* <CustomButton onClick={GoHome} text="back to home" /> */}
      {/* <Link href="/../"></Link> */}
    </div>
  );
};

export default Contact;
