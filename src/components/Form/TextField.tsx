import { InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | null | boolean;
};

const TextField = ({
  id,
  label,
  type = "text",
  className,
  error,
  ...props
}: TextFieldProps) => {
  const defaultStyle =
    "rounded-lg placeholder:text-main-purple placeholder:text-xl w-full px-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 focus:placeholder:text-transparent"
  const errorStyle = "border-red-500";

  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete="off"
        placeholder={label}
        className={`${defaultStyle} ${error ? errorStyle : ""}`}
        {...props}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default TextField;