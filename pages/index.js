import Link from "next/link";
import Router from "next/router";
import { MdSearch } from "react-icons/Md";
import { MdMessage } from "react-icons/Md";
import { MdContacts } from "react-icons/Md";
import { FaHandsHelping } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "./index.css";

function ClickIndex() {
  //   if (confirm("Are you sure?")) {
  //     Router.push("/ChatPage");
  document.querySelector("#MainApp").style.right = "-100%";
  setTimeout(function () {
    Router.push("/ChatPage");
  }, 1000);
}

const Index = () => (
  <div id="MainApp">
    <div onClick={ClickIndex}>Index</div>
    <MdSearch />
    <Link href="/ChatPage">
      <button>
        <MdMessage /> Chats
      </button>
    </Link>
    <Link href="/Blog">
      <button>
        <FaBlog /> Blog
      </button>
    </Link>
    <Link href="/Contact">
      <button>
        <MdContacts /> Contact
      </button>
    </Link>
    <Link href="/About">
      <button>
        <FaUser /> About
      </button>
    </Link>
    <FaHandsHelping color="fab" />
  </div>
);
export default Index;
