import { useState, useEffect } from "react";
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

var index = 0;
const headers = [
  "Thanks for Contacting Me!",
  "Goodbye",
  "Let me know if you have other questions!",
];

const Contact = () => {
  // Step One - Create the state variable, the function to update it and put a default inside.
  const [header_text, setHeader] = useState("Contact Me!");
  const [pageleft, setLeft] = useState("-100%");
  // const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {}, 50);
    setLeft(0);
  }, []);

  useEffect(() => {
    setLeft(20);
    setTimeout(() => {
      setLeft(0);
    }, 500);
  }, [header_text]);
  return (
    // Step Two - Connect the state variable to the UI
    <div id="ContactApp" style={{ left: pageleft }}>
      <Header fontSize="24px" text={header_text} />
      <CustomButton
        text="email"
        onClick={() => {
          // Step Three - Connect the state function() to an interaction/figure out when you want to update the interface
          setHeader(headers[index]);
          index++;
          if (index > headers.length - 1) {
            index = 0;
          }
        }}
      />
      <MdContacts fontSize="3em" />
      {/* <CustomButton onClick={GoHome} text="back to home" /> */}
      {/* <Link href="/../"></Link> */}
    </div>
  );
};

export default Contact;
