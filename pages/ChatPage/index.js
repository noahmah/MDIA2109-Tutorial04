import React, { useState, useEffect } from "react";
import "./chatpage.css";
import Chat from "../../comps/Chat";
import CustomButton from "../../comps/CustomButton";
import Header from "../../comps/Header";
import Input from "../../comps/Input";
import Link from "next/link";
import { MdMessage } from "react-icons/Md";

// var welcome = "Welcome to my App";
// function setWelcome() {
//   welcome_state = "Start with sending a message";
//   document.querySelector(".welcome").innerText = welcome_state;
// }

const ChatPage = ({}) => {
  const [welcome, setWelcome] = useState("Welcome to my App");
  const [msg, setMsg] = useState("Please type something");
  const [resp, setResp] = useState("Let me respond to you");
  const [color, setColor] = useState("#333");
  const [text, setText] = useState("Default");

  useEffect(() => {
    setTimeout(() => {}, 50);
    document.querySelector("#chatpage").style.left = 0;
  }, []);

  return (
    <div id="chatpage">
      <div className="welcome">
        <Header fontSize={32} text={welcome} />
      </div>
      <div
        className="chats"
        onClick={() => setWelcome("Start with sending a message")}
      >
        <Chat msg={msg} name={"User One"} />
        <p />
        <Chat
          msg={resp}
          backgroundColor={"#fab"}
          name={"Chat Bot"}
          img={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcore3.imgix.net%2F59afd70fd1abalogo1250x250.png%3Fauto%3Dformat%26q%3D40&f=1&nofb=1"
          }
        />
      </div>
      <div className="controls">
        <Input
          onClick={(val) => {
            setMsg(val);
            var new_resp = CheckResponse(val);
            setResp(new_resp);
            // if (val === "hi") {
            //   setResp("I love pie");
            // }
          }}
        />
      </div>
      <div className="custom_button">
        When the button is clicked, change its color and text
        <CustomButton
          text={text}
          color={color}
          onClick={() => {
            setColor("#fab");
            setText("Changed");
          }}
        />
      </div>
    </div>
  );
};

function CheckResponse(inp) {
  switch (inp.toLowerCase) {
    case "hi":
      return "I love pie";
    case "how are you?":
      return "Great";

    default:
      return "I don't understand what you are trying to say";
  }
}

ChatPage.defaultProps = {};

export default ChatPage;
