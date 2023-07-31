//

const Opinions = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="text-xl font-bold text-primaryTitle">
        What people loved about this seller
      </h3>
      <div className="w-full flex gap-4 p-4 border">
        {/* <figure>
          <img src="" alt="" />
        </figure> */}
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        <section className="w-[calc(100%-56px)]">
          <h6 className="text-primaryTitle font-bold">Lorem Ipsum</h6>
          <p className="text-primaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            animi commodi qui ab, aut perferendis eligendi soluta magnam
            repellat dolore tempora est doloremque, temporibus cupiditate cum
            quidem maxime adipisci quo!
          </p>
          <span className="text-primaryText text-xs">2 weeks ago</span>
        </section>
      </div>
    </div>
  );
};

export default Opinions;
