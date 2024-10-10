"use client";

import TabSwitcher from "@/components/TabSwitcher";
import React from "react";

interface CardProps {
  title: string;
  subHeading: string;
  description: string;
  imageSrc: string;
  buttonLabel?: string;
  onClick?: () => void;
}

const CardOne: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  buttonLabel,
  onClick,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      {buttonLabel && (
        <div className="px-6 pt-4 pb-2">
          <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {buttonLabel}
          </button>
        </div>
      )}
    </div>
  );
};

const CardTwo: React.FC<CardProps> = ({
  title,
  subHeading,
  description,
  imageSrc,
  buttonLabel,
  onClick,
}) => {
  return (
    <div className="max-w-lg bg-white flex">
      <img className="w-52 h-[200px] object-cover" src={imageSrc} alt={title} />
      <div className="px-6 py-4 flex flex-col">
        <div className="font-bold text-xl mb-1">{title}</div>
        <p className="text-gray-500 text-sm">{subHeading}</p>
        <p className="text-gray-700 text-xl text-wrap">{description}</p>
        {buttonLabel && (
          <div className="">
            <button
              onClick={onClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {buttonLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const CardOneCode = `import React from 'react'

const Card: React.FC<CardProps> = ({ title, description, imageSrc, buttonLabel, onClick }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
     
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      {buttonLabel && (
        <div className="px-6 pt-4 pb-2">
          <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {buttonLabel}
          </button>
        </div>
      )}
    </div>
  );
}

export default Card`;

const CardTwoCode = ``;
const Card = () => {
  return (
    <div>
      <div>
        <p className="text-xl font-bold text-white mb-3">
          1. Simple Card Example
        </p>
        <TabSwitcher
          language="tsx"
          codeString={CardOneCode}
          previewComponent={
            <CardOne
              title="Card Heading"
              subHeading="14/may/2023"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
              imageSrc="https://picsum.photos/200/300"
              buttonLabel=""
              onClick={() => {}}
            />
          }
        />
      </div>
      <div>
        <p className="text-xl font-bold text-white mb-3 mt-5">
          2. Second Card Example
        </p>
        <TabSwitcher
          language="tsx"
          codeString={CardTwoCode}
          previewComponent={
            <CardTwo
              title="Card Heading"
              subHeading="14/may/2023"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
              imageSrc="https://picsum.photos/200/300"
              buttonLabel=""
              onClick={() => {}}
            />
          }
        />
      </div>
    </div>
  );
};

export default Card;
