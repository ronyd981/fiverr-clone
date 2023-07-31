import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { ModalViewsContext, UserContext } from "@/context";
import "./index.css";

// Hooks
import { useMenuEffect } from "@/hooks";

// Components
import { ModalViews } from "@/components";

const Navbar = () => {
  const { token, user, removeData } = useContext(UserContext);
  const { modal, changeModal } = useContext(ModalViewsContext);

  const hasStyle = useMenuEffect();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateTo = (location: string) => {
    navigate(location);
  };

  const logout = () => {
    removeData();
  };

  return (
    <header
      className={`
      w-full static z-20
      ${pathname === "/" ? "md:fixed" : ""}
      `}
    >
      {modal && <ModalViews changeModal={changeModal} modalView={modal} />}
      <div
        className={`
        w-full h-20 transition duration-200
        ${hasStyle.firstMenu || pathname !== "/" ? "bg-white" : "bg-inherit"}
      `}
      >
        <div
          className="
          w-[90%] h-full flex items-center justify-between gap-4 mx-auto
          lg:w-[95%]
          2xl:w-[1400px]
        "
        >
          <div
            className="
            w-8 h-8 flex items-center justify-center cursor-pointer
            sm:hidden
          "
          >
            <AiOutlineMenu
              className="text-xl"
              onClick={() => changeModal("menu-options")}
            />
          </div>
          <Link className="flex items-end gap-1" to="/">
            <span
              className={`
              text-3xl leading-6
              ${
                hasStyle.firstMenu || pathname !== "/"
                  ? "md:text-primaryTitle"
                  : "md:text-white"
              }
            `}
            >
              fiverr
            </span>
            <span className="w-2 h-2 rounded-full bg-primaryGreen"></span>
          </Link>
          <div
            className={`
            w-full h-9 hidden
            sm:block
            md:w-[calc(100%-550px)]
            ${
              hasStyle.secondMenu || pathname !== "/"
                ? "md:opacity-100"
                : "md:opacity-0"
            }
          `}
          >
            <div
              className="
              w-full h-full flex 
            "
            >
              <input
                type="text"
                className="
                w-full h-full outline-none rounded-md border text-sm px-2.5
                md:w-[calc(100%-48px)] md:rounded-r-none md:border-r-none
              "
                placeholder="Find services"
              />
              <div
                className="
                hidden
                w-12 h-full md:flex items-center justify-center rounded-r-md bg-[#222325]
              "
              >
                <AiOutlineSearch className="text-xl text-white" />
              </div>
            </div>
          </div>
          <nav
            className="
            md:w-[405px]
          "
          >
            <ul
              className="
              flex items-center justify-end gap-4
            "
            >
              <li
                className="
                hidden
                md:block
              "
              >
                <span
                  className={`
                    text-sm
                    ${
                      hasStyle.firstMenu || pathname !== "/"
                        ? "md:text-primaryText"
                        : "md:text-white"
                    }
                `}
                >
                  Fiverr Business
                </span>
              </li>
              <li
                className="
                hidden
                md:block
              "
              >
                <span
                  className={`
                  text-sm
                  ${
                    hasStyle.firstMenu || pathname !== "/"
                      ? "md:text-primaryText"
                      : "md:text-white"
                  }
                `}
                >
                  Explore
                </span>
              </li>
              <li
                className="
                hidden
                md:block
              "
              >
                <span
                  className={`
                  text-sm
                  ${
                    hasStyle.firstMenu || pathname !== "/"
                      ? "md:text-primaryText"
                      : "md:text-white"
                  }
                `}
                >
                  Become a Seller
                </span>
              </li>
              {token ? (
                <li className="w-10 h-10 relative group" tabIndex={0}>
                  {user?.image ? (
                    <figure
                      className="w-full h-full rounded-full bg-gray-200 cursor-pointer border"
                      title={user?.username}
                    >
                      <img
                        src={user?.image}
                        className="w-full h-full object-cover rounded-full"
                        alt={user?.username}
                      />
                    </figure>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center rounded-full bg-green-400 cursor-pointer">
                      <span className="text-primaryTitle text-lg uppercase">
                        {user?.username[0]}
                      </span>
                    </div>
                  )}

                  <div
                    className="hidden group-focus-within:block absolute z-30 rounded-full top-0 right-0 w-full h-full cursor-pointer"
                    onClick={(e) => {
                      //@ts-ignore
                      document.activeElement?.blur();
                    }}
                  ></div>

                  <div className="hidden group-focus-within:flex flex-col gap-2 p-4 absolute z-20 right-0 mt-2 bg-white w-40 rounded-md border border-[#00000020] test">
                    {user?.isSeller && (
                      <>
                        <span
                          className="text-sm text-primaryText cursor-pointer"
                          onClick={(e) => {
                            navigateTo("/gigs");
                            //@ts-ignore
                            document.activeElement?.blur();
                          }}
                        >
                          Gigs
                        </span>
                        <span
                          className="text-sm text-primaryText cursor-pointer"
                          onClick={(e) => {
                            navigateTo("/add-gig");
                            //@ts-ignore
                            document.activeElement?.blur();
                          }}
                        >
                          Add New Gig
                        </span>
                      </>
                    )}
                    <span
                      className="text-sm text-primaryText cursor-pointer"
                      onClick={(e) => {
                        navigateTo("/orders");
                        //@ts-ignore
                        document.activeElement?.blur();
                      }}
                    >
                      Orders
                    </span>
                    <span
                      className="text-sm text-primaryText cursor-pointer"
                      onClick={(e) => {
                        navigateTo("/messages");
                        //@ts-ignore
                        document.activeElement?.blur();
                      }}
                    >
                      Messages
                    </span>
                    <span
                      className="text-sm text-primaryText cursor-pointer"
                      onClick={logout}
                    >
                      Logout
                    </span>
                  </div>
                </li>
              ) : (
                <>
                  <li
                    className="
                    hidden
                    md:block
                  "
                  >
                    <span
                      className={`
                      text-sm cursor-pointer
                      ${
                        hasStyle.firstMenu || pathname !== "/"
                          ? "md:text-primaryText"
                          : "md:text-white"
                      }
                    `}
                      onClick={() => changeModal("login")}
                    >
                      Sign in
                    </span>
                  </li>
                  <li>
                    <div
                      className={`
                      rounded-md px-3 py-1 transition duration-150 hover:text-white hover:bg-primaryGreen hover:border-primaryGreen
                      sm:border sm:border-primaryGreen sm:text-primaryGreen cursor-pointer
                      ${
                        hasStyle.firstMenu || pathname !== "/"
                          ? "md:border-primaryGreen md:text-primaryGreen"
                          : "md:border-white md:text-white"
                      }
                    `}
                      onClick={() => changeModal("register")}
                    >
                      <span
                        className="
                        text-lg
                        md:text-sm
                      "
                      >
                        Join
                      </span>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`
        hidden
        h-10 md:block bg-white transition duration-200 border-y text-primaryText
        ${hasStyle.secondMenu || pathname !== "/" ? "opacity-100" : "opacity-0"}
      `}
      >
        <ul
          className="
          w-[95%] h-full flex items-center justify-between gap-2 mx-auto overflow-x-auto overflow-y-hidden no-scrollbar
          lg:w-[95%]
          2xl:w-[1400px]
        "
        >
          <li className="shrink-0">
            <span className="text-sm">Graphics & Design</span>
          </li>
          <li className="shrink-0">
            <span className="text-sm">Digital Marketing</span>
          </li>
          <li className="shrink-0">
            <span className="text-sm">Writing & Translation</span>
          </li>
          <li className="shrink-0">
            <span className="text-sm">Video & Animation</span>
          </li>
          <li className="shrink-0">
            <span className="text-sm">Music & Audio</span>
          </li>
          <li className="shrink-0">
            <span className="text-sm">Programming & Tech</span>
          </li>
          <li className="shrink-0">
            <span className="text-sm">Photography</span>
          </li>
          <li className="shrink-0">
            <span className="text-sm">Business</span>
          </li>
          <li className="shrink-0">
            <span className="text-sm">AI Services</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
