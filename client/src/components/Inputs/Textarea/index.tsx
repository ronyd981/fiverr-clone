import { useZorm } from "react-zorm";

interface IProps {
  name: string;
  title?: string;
  labelId: string;
  placeholder?: string;
  zorm: ReturnType<typeof useZorm>;
}

const Textarea = ({ name, title, labelId, placeholder, zorm }: IProps) => {
  const isErrored = !!zorm.errors[name]();

  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor={labelId} className="text-primaryTitle">
        {title}
      </label>
      <textarea
        name={
          typeof zorm.fields[name.toString()] === "function" &&
          //@ts-ignore
          zorm.fields[name.toString()]()
        }
        id={labelId}
        className={`
        w-full h-32 p-2 rounded-sm border outline-none focus:border-blue-400 resize-none no-scrollbar text-sm
        ${isErrored && "border-red-500"}
        `}
        placeholder={placeholder}
      ></textarea>

      {zorm.errors[name]((e) => (
        <span className="text-sm text-red-500" id={e.code} key={e.code}>
          {e.message}
        </span>
      ))}
    </div>
  );
};

export default Textarea;
