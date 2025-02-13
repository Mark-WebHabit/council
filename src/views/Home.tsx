import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Highlight = ({ text }: { text: string }) => {
  return (
    <div className="mt-8 flex flex-wrap ">
      <div className="group">
        <img
          src="/images/selfie.jpg"
          alt="Highlight"
          className="aspect-video max-w-[500px] min-w-[250px] w-full rounded-4xl border-2 border-transparent transition-all duration-200 group-hover:border-[var(--pink)] "
        />
        <p className="text-3xl text-white font-medium my-4">{text}</p>
        <p className="text-4xl text-[var(--pink)] poppins-medium my-4">
          HEADLINE
        </p>
      </div>
    </div>
  );
};

const Council = () => {
  return (
    <div className="transition-all duration-200 w-full max-w-[450px] aspect-[2/2.5] rounded-2xl overflow-hidden relative z-10 flex flex-col justify-end items-center hover:scale-95">
      <img
        src="/images/council.jpg"
        alt="coucil"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <p className=" text-white text-3xl poppins-bold shadow-text mx-4 mt-8">
        JOHN DOE
      </p>
      <div className="  linear-gradient px-16 py-4 rounded-full text-2xl mt-5 border-2 border-transparent text-white poppins-bold cursor-pointer mb-8 hover:border-[var(--pink)]   overflow-hidden">
        ABOUT THEM
      </div>
    </div>
  );
};

function Home() {
  const [height, setHeight] = useState(0);
  const aboutUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutUsRef.current) {
      setHeight(aboutUsRef.current.offsetHeight * 1.2);
    }
  }, [aboutUsRef]);

  return (
    <div className="z-0">
      <NavBar />

      <div className="home h-[90vh]  pt-[80px] bg-[var(--bg)] relative flex justify-start">
        <img
          src="/images/abstract.png"
          alt="ASBTRACT"
          className="aspect-square w-full max-w-[600px] absolute center-y right-0 md:right-10 opacity-30 1600:opacity-100"
        />

        <div className=" h-full flex-1 max-w-[1100px] flex flex-col justify-center items-start px-8">
          <h1 className="text-5xl md:text-7xl lg:text-9xl poppins-extrabold text-white shadow-text">
            KNOW
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-9xl poppins-extrabold text-white shadow-text">
            YOUR WAY
          </h1>

          <p className="text-xl md:text-3xl lg:text-4xl bodoni font-bold playfair-display shadow-text-pink text-[#ff4ff3]">
            THROUGH US DEAR USER{" "}
          </p>
          <div className="flex items-center justify-between w-full max-w-[800px] mt-8">
            <button className="flex-1 mx-4 py-4 text-xl md:text-2xl lg:text-4xl poppins-bold text-white rounded-full linear-gradient cursor-pointer ">
              SIGN UP
            </button>
            <button className="flex-1 border  mx-4 py-4 text-xl md:text-2xl lg:text-4xl poppins-bold text-white rounded-full cursor-pointer">
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      <div className="highlights h-auto pb-16 bg-[var(--bg)] px-8 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl bodoni font-extrabold text-white shadow-text">
          HIGHLIGHTS
        </h1>
        <div className="flex gap-8 items-center overflow-x-scroll flex-nowrap w-full no-scrollbar">
          <Highlight text="POST" />
          <Highlight text="EVENTS" />
          <Highlight text="ARTICLES" />
        </div>
      </div>
      <div className="council h-auto pb-16 bg-[var(--bg)] px-8  pt-20 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl bodoni font-extrabold text-white shadow-text">
          YOUR COUNCIL
        </h1>
        <div className="flex gap-16 items-center justify-between overflow-x-scroll  w-full no-scrollbar py-10 flex-wrap">
          <Council />
          <Council /> <Council /> <Council /> <Council /> <Council />
        </div>
      </div>

      <div className="about w-full flex  items-center bg-[var(--bg)] px-8 py-16 gap-8">
        <div className="flex-1" ref={aboutUsRef}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl bodoni font-extrabold text-white shadow-text">
            ABOUT US
          </h1>
          <p className="text-2xl text-white poppins-medium my-16">
            Innovation and technology should make life simple. That's why, here
            at Nimble Signals, we make sure innovation works for you, your
            business, and your people.
          </p>
          <p className="text-2xl text-white poppins-medium my-16">
            Our reliable internet connection services enable you to enjoy your
            life more. Our technologies improve every day, so you can
            confidently focus on what really matters.
          </p>
        </div>
        {height > 0 && (
          <div
            className="flex-1 bg-[url(/images/about.jpg)] rounded-2xl hidden 900:block bg-center"
            style={{
              height,
            }}
          ></div>
        )}
      </div>

      <div className="contact  px-8 py-16  bg-[var(--bg)]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl bodoni font-extrabold text-white shadow-text mb-16">
          CONTACT US
        </h1>
        <div>
          <p className="text-5xl text-[var(--pink)] poppins-medium my-4">
            PHONE
          </p>
          <p className="text-2xl lg:text-3xl text-white poppins-medium my-4 w-full break-words">
            (123) 456-7890
          </p>
        </div>
        <div className="mt-16">
          <p className="text-5xl text-[var(--pink)] poppins-medium my-4">
            EMAIL
          </p>
          <p className="text-2xl lg:text-3xl text-white poppins-medium my-4 w-full break-words">
            hello@reallygreatsite.com
          </p>
        </div>
        <div className="mt-16">
          <p className="text-5xl text-[var(--pink)] poppins-medium my-4">
            Social
          </p>
          <div className="text-3xl text-white poppins-medium my-4 flex items-center flex-wrap gap-4">
            <Link to="/">
              <img
                src="/images/facebook.png"
                alt=""
                className="aspect-square w-[60px]"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/twitter.png"
                alt=""
                className="aspect-square w-[60px]"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/instagram.png"
                alt=""
                className="aspect-square w-[60px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
