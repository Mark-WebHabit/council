import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useSearchParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Input = ({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) => {
  return (
    <input
      type={type}
      className="w-[90%] my-4 border-2 border-white bg-[var(--gray)] px-4 py-4 rounded-[30px] placeholder:text-white placeholder:text-2xl placeholder:font-bold placeholder:text-center outline-0"
      placeholder={placeholder}
    />
  );
};

function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [search] = useSearchParams();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    const page = search.get("page");

    if (page && page.toLowerCase() === "register") {
      setIsSignup(true);
    } else {
      setIsSignup(false);
    }
  }, [search]);

  const handleChangePage = (val: boolean) => {
    setIsSignup(val);
  };

  return (
    <div className="max h-screen md:min-h-screen md:h-auto ">
      <NavBar />

      <div className=" pt-[80px] flex flex-col md:flex-row items-center">
        <div
          className="flex-1 h-full grid place-items-center mt-5"
          data-aos="fade-right"
        >
          <div className="w-full  max-w-[700px] border p-8 lg:p-16 linear-gradient-bg lg:rounded-[60px]">
            <h1 className="text-4xl text-white font-bold text-center">
              {isSignup ? "REGISTER FORM" : "LOGIN FORM"}
            </h1>

            <hr className="border-4 w-full border-white my-8" />
            <div className="flex items-center justify-center gap-8">
              <button
                className={`px-8 py-4 cursor-pointer ${
                  isSignup ? "about-button" : "linear-gradient-nav"
                } text-white font-bold text-xl lg:text-2xl rounded-full`}
                onClick={() => handleChangePage(true)}
              >
                SIGN UP
              </button>
              <button
                className={`px-8 py-4 cursor-pointer ${
                  !isSignup ? "about-button" : "linear-gradient-nav"
                } text-white font-bold text-xl lg:text-2xl rounded-full `}
                onClick={() => handleChangePage(false)}
              >
                SIGN IN
              </button>
            </div>

            <div className="w-[98%] md:w-[90%] bg-[var(--yellow)] p-4 mx-auto mt-8 rounded-[30px] flex  flex-col items-center pt-16 px-8">
              <Input type="email" placeholder="ENTER YOUR EMAIL" />
              <Input type="email" placeholder="ENTER YOUR PASSWORD" />
              {isSignup && (
                <Input type="email" placeholder="CONFIRM YOUR PASSWORD" />
              )}
              <div className="w-[90%]">
                {!isSignup && (
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-[20px] aspect-square bg-[var(--gray)] border-2 border-white" />
                    <p className="text-white text-xl font-bold">REMEMBER ME</p>
                  </div>
                )}
                {isSignup && (
                  <div className="flex items-center gap-2 mt-4 ">
                    <div className="w-[20px] aspect-square bg-[var(--gray)] border-2 border-white" />
                    <p
                      className="text-white text-md font-bold uppercase"
                      style={{
                        lineHeight: "16px",
                      }}
                    >
                      i have read the terms and conditions
                    </p>
                  </div>
                )}
              </div>

              {isSignup && (
                <small className="text-blue-700">TERMS AND CONDITIONS</small>
              )}

              <div className="w-full flex justify-end mt-4">
                <button className="linear-gradient-nav px-6 py-2 text-2xl text-white font-bold rounded-[30px] ">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full" data-aos="fade-left">
          <div className="w-full h-full p-16">
            <h1 className="text-center text-2xl md:text-3xl lg:text-5xl trend shadow-text text-white">
              sign in or sign up
            </h1>
            <small className="text-center block mt-4 text-[var(--pink)] trendOne shadow-text-pink text-md md:text-xl lg:text-2xl">
              And receive notification
            </small>

            <p className="mt-8 text-md md:text-xl lg:text-2xl text-[var(--pink)] uppercase font-semibold">
              by Signing up or signing in ensures a secure and personalized
              experience on our website. By logging in, Student Council members
              can manage posts, update event timelines, and contribute articles,
              while users can interact with content and engage in discussions.
              This system also helps maintain privacy, security, and
              accountability, ensuring that only authorized users have access to
              certain features while keeping the community safe and
              well-regulated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
