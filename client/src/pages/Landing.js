import React from "react";
import { Card } from "flowbite-react";
import landingImage from "../assets/landingimg.jpg";

function Landing() {
  return (
    <>
      <div className="mb-5 flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-4xl mx-auto mt-10">
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
    </>
  );
}

export default Landing;
