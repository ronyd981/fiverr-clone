import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div
      className="
      w-[90%] flex items-center justify-between flex-col mx-auto my-10
      md:flex-row
      lg:w-[95%]
      2xl:w-[1400px]
    "
    >
      <h1 className="text-3xl text-primaryTitle font-bold">Gigs</h1>
      <Link to="/add-gig">
        <button className="max-w-max px-5 py-2.5 rounded-md bg-primaryGreen text-white font-bold hover:brightness-95">
          Add New Gig
        </button>
      </Link>
    </div>
  );
};

export default MainContent;
