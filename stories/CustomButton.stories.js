import React from "react";
import CustomButton from "../comps/CustomButton";
import Header from "../comps/Header";
import Input from "../comps/Input";
import Chat from "../comps/Chat";
import ChatPage from "../pages/ChatPage";

export default {
  title: "My Comps",
  component: CustomButton,
};

function okayClick() {
  alert("Okay");
}
export const MyCustomButtonWithOptions = () => (
  <CustomButton color="#4CBB17" text="Okay" onClick={okayClick} />
);

export const MyCustomButton = () => <CustomButton />;

export const MyHeader = () => <Header />;
export const MyInput = () => <Input />;
export const MyInputWithPlaceHolder = () => (
  <Input placeholder="Custom Placeholder" />
);
export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />;

// export const PageWithCustomButtonsandHeaders = () => (
//   <div>
//     <CustomButton color="#4CBB17" text="Okay" onClick={okayClick} />
//     <CustomButton color="#3f3f3f" text="Cancel" onClick={cancelClick} />
//     <CustomButton color="#FF0080" text="Submit" />
//     <CustomButton text="Menu" />
//     <Header fontSize={16} color="white" />
//     <Header fontSize={24} color="skyblue" onMouseOver={skyblueMouseOver} />
//     <Header fontSize={36} color="lightpink" onMouseOver={lightpinkMouseOver} />
//   </div>
// );

// function skyblueMouseOver() {
//   alert("Sky Blue Mouse Over");
// }

// function lightpinkMouseOver() {
//   alert("Light Pink Mouse Over");
// }

// function cancelClick() {
//   alert("Cancel");
// }
