import { TGigType } from "@/types";

interface IProps {
  gigData: TGigType;
}

const GigAbout = ({ gigData }: IProps) => {
  return (
    <section className="w-full flex flex-col gap-6">
      <h4 className="text-primaryTitle font-bold text-xl">About this gig</h4>
      <p className="text-primaryText break-words">{gigData.desc}</p>
    </section>
  );
};

export default GigAbout;
