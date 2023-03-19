import classNames from "classnames";

export const Image = ({
  url,
  size,
}: {
  url?: string;
  size: "small" | "medium" | "large";
}) => (
  <img
    src={url}
    className={classNames(
      "aspect-square rounded-sm bg-gradient-to-tr from-zinc-700 to-zinc-800 bg-clip-border object-cover object-center",
      { "w-20": size === "small" },
      { "w-40": size === "medium" },
      { "w-80": size === "large" }
    )}
  />
);
