export const CardGrid = ({
  children,
}: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className="mx-6 my-3 grid grid-cols-1 gap-3 md:grid-cols-4">
    {children}
  </ul>
);
