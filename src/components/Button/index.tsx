import { ButtonHTMLAttributes } from "react";

type AppearanceType = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  appearance?: AppearanceType;
};

const getAppearanceStyle = (appearance: AppearanceType) =>
  ({
    primary:
      "bg-main-purple text-xl text-white backdrop-blur-sm bg-opacity-80 transition-transform duration-150 hover:scale-102 hover:bg-main-purple/90 hover:to-main-purple/85 focus-visible:ring-4 focus-visible:ring-main-purple/25 focus-visible:ring-offset-2",
    secondary:
      " bg-btn-secondary/5 text-btn-secondary border border-btn-secondary/20 transition-colors transition-transform duration-150 hover:bg-btn-secondary/10 hover:border-btn-secondary/40 active:scale-95 focus-visible:ring-4 focus-visible:ring-btn-secondary/20 focus-visible:ring-offset-2",
  }[appearance]);

const Button = ({ onClick, children, appearance = "primary", className }: ButtonProps) => {
    const commonStyles =
    "mt-10 py-6 px-2 w-full cursor-pointer rounded-lg font-semibold disabled:bg-slate-300 disabled:cursor-not-allowed";
  const appearanceStyles = getAppearanceStyle(appearance);
    
    return (
        <button className={`${commonStyles} ${appearanceStyles} ${className}`}
        onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;