import React from "react";
import { Card } from "flowbite-react";
import landingImage from "../assets/landingimg.jpg";
import { FaUserFriends } from "react-icons/fa";
import Blogs from "../components/Blogs";
import BlogCollection from "../components/BlogCollection";

function Landing() {
  return (
    <>
      <div className="mb-5  flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-4xl mx-auto mt-12">
        <Card
          className="max-w-sm lg:max-w-md"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={landingImage}
        />
        <div className="flex flex-col justify-center lg:ml-8 mt-6 lg:mt-0 lg:text-left text-center">
          <h5 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-white mb-4">
            Together, We Can Make a Difference!!!
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            At [NGO Name], we believe in the power of collective action. Every
            life touched, every challenge overcome, and every dream realized is
            a step toward a brighter, more equitable world. Join us as we work
            tirelessly to uplift communities, empower individuals, and drive
            meaningful change. Your support can turn hope into reality, one
            mission at a time.
          </p>
        </div>
      </div>

  {/* animated icon */}
      <div className="flex justify-center  mt-10">
        <div className="heartbeat text-6xl text-blue-900">
          <FaUserFriends />
        </div>
      </div>

{/*divider */}
      <div className="flex flex-row justify-center items-center m-auto gap-2 mt-2 mb-2">
        <hr class="w-8 h-8  my-8 border-0 bg-red-300 rounded md:my-12 dark:bg-gray-700" />
        <hr class="w-8 h-8  my-8 border-0 bg-red-500 rounded md:my-12 dark:bg-gray-700" />
        <hr class="w-8 h-8  my-8 border-0 bg-red-700  rounded md:my-12 dark:bg-gray-700" />
      </div>

    
    {/* blogsss intro */}
      <div className="flex flex-col justify-center items-center m-auto ">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Inspiration, Insights, and Innovation
          </span>{" "}
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center">
          Dive into our collection of thought-provoking blogs where we share
          stories of impact, explore the latest trends, and offer insights that
          inspire change. Whether you're looking to stay informed or seeking a
          fresh perspective, our blogs are your go-to source for meaningful
          content and innovative ideas.
        </p>
      </div>

{/* actual blogs */}
      <BlogCollection />
    </>
  );
}

export default Landing;
