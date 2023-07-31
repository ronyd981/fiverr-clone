import { useZorm } from "react-zorm";

interface IProps {
  name: string;
  title?: string;
  labelId?: string;
  placeholder?: string;
  zorm: ReturnType<typeof useZorm>;
  type?: string;
}

const InputText = ({
  name,
  title,
  labelId,
  placeholder,
  zorm,
  type,
}: IProps) => {
  const isErrored = !!zorm.errors[name]();

  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor={labelId} className="text-primaryTitle">
        {title}
      </label>
      <input
        type={type ? type : "text"}
        name={
          typeof zorm.fields[name.toString()] === "function" &&
          //@ts-ignore
          zorm.fields[name.toString()]()
        }
        className={`
        w-full h-12 px-2 rounded-sm outline-none border focus:border-blue-400 text-sm
        ${isErrored && "border-red-500"}
        `}
        placeholder={placeholder}
        id={labelId}
      />
      {zorm.errors[name]((e) => (
        <span className="text-xs text-red-500" id={e.code} key={e.code}>
          {e.message}
        </span>
      ))}
    </div>
  );
};

export default InputText;
