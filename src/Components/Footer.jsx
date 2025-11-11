import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-white rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-5 space-x-5">
          <Link>
            <FaFacebook size={30} />
          </Link>
          <Link>
            <FaXTwitter size={30} />
          </Link>
          <Link>
            <FaGithub size={30} />
          </Link>
          <Link>
            <FaInstagram size={30} />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          DishDive LTD
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
