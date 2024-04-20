const MenuItem = ({
  children,
  key,
  name,
}: Readonly<{
  children?: React.ReactNode;
  key: string;
  name: string;
}>) => {
  return (
    <div
      className="flex gap-2 items-center p-3 rounded-md hover:bg-slate-800 transition-all cursor-pointer group"
      key={key}
    >
      <div className="group-hover:scale-105">{children}</div>
      <span className="group-hover:scale-105 group-hover:translate-x-1">
        {name}
      </span>
    </div>
  );
};

export default MenuItem;
