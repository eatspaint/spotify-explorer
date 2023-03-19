import classNames from "classnames";

export const Button = ({
  children,
  active = false,
  size = "regular",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  size?: "regular" | "big";
}) => {
  return (
    <button
      {...props}
      className={classNames(
        "rounded-sm px-2 text-zinc-800",
        active
          ? "bg-red-500 hover:bg-red-600"
          : "bg-zinc-400 hover:bg-zinc-500",
        { "font-bold text-2xl px-6 py-4": size === "big" }
      )}
    >
      {children}
    </button>
  );
};
