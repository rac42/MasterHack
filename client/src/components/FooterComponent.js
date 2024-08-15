/* eslint-disable react/no-unescaped-entities */
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook,BsInstagram,BsGithub,BsTwitter,BsLinkedin} from 'react-icons/bs'

export default function FooterComponent() {
  return (
    <Footer container className="border-t-4 border-teal-500 p-6 text-white">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mt-5 mb-6 md:mb-0">
            <Link
              to="/"
              className="text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-lightgreen-500 to-yellow-500 rounded-lg text-white">
                NGO's 
              </span>
              <span className="text-black">Name</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <Footer.Title title="Connect" className="text-teal-400" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/RushikeshGaikwad78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Mail
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/rushikesh-gaikwad-74614b293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Helpline
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Resources" className="text-teal-400" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:underline">
                  Documentation
                </Footer.Link>
                <Footer.Link href="#" className="hover:underline">
                  Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Company" className="text-teal-400" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:underline">
                  About Us
                </Footer.Link>
                <Footer.Link href="#" className="hover:underline">
                  Contact
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="text-black">
          <Footer.Copyright
            href="#"
            by="NGO's NAME"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook}/>
            <Footer.Icon href="#" icon={BsInstagram}/>
            <Footer.Icon href="#" icon={BsGithub}/>
            <Footer.Icon href="#" icon={BsLinkedin}/>
            <Footer.Icon href="#" icon={BsTwitter}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
