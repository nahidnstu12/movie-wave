import React, { useState } from 'react';

const AccordionItem = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col overflow-hidden rounded-sm">
      <input
        type="checkbox"
        id={title}
        className="toggle hidden"
        checked={isOpen}
        onChange={toggleAccordion}
      />
      <label
        className={`relative title block lg:text-md text-xs px-6 pt-6 lg:px-10 lg:pt-10 cursor-pointer bg-dark text-white rounded-sm ${
          isOpen ? 'rounded-b-none rounded-r-none' : 'rounded-sm pb-6 lg:pb-10'
        }`}
        htmlFor={title}
      >
        {title}
        {isOpen ? (
          <img
            src="/images/icons/chevron-up.svg"
            className={
              'absolute top-7 lg:top-11 right-10 w-4 h-4 lg:w-8 lg:h-8'
            }
          />
        ) : (
          <img
            src="/images/icons/chevron-down.svg"
            className={
              'absolute top-7 lg:top-10 right-10 w-4 h-4 lg:w-8 lg:h-8'
            }
          />
        )}
      </label>

      <div
        className={`content bg-dark overflow-hidden rounded-b-sm  ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="xs:px-6 sm:px-10 lg:px-10 xs:py-6 sm:py-10 lg:py-10 text-xxs lg:text-2sm font-normal text-white">
          <div className="h-[1px] bg-gray opacity-50 mb-6"></div>
          {content}
        </div>
      </div>
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="container lg:max-w-5xl mb-32 lg:mb-[200px]">
      <h2
        className={
          'text-md lg:text-h2 text-white text-center max-w-xl mx-auto mb-8 lg:mb-16'
        }
      >
        FAQs–What You Need to Know
      </h2>
      <div
        className="p-[1px] rounded-sm mb-2"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, .6))'
        }}
      >
        <AccordionItem
          title="What is Moviewave?"
          content="Moviewave is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want."
        />
      </div>
      <div
        className="p-[1px] rounded-sm mb-2"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, .5))'
        }}
      >
        <AccordionItem
          title="How much does Moviewave cost?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
      </div>
      <div
        className="p-[1px] rounded-sm mb-2"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, .5))'
        }}
      >
        <AccordionItem
          title="Where can I watch?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
      </div>
      <div
        className="p-[1px] rounded-sm mb-2"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, .5))'
        }}
      >
        <AccordionItem
          title="How do I cancel?"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
      </div>
    </div>
  );
};

export default Faqs;
