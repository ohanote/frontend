"use client"

import Link from "next/link";

type TableHeadersProps = {
  key: string;
  name: string;
  href: string;
  active: boolean
};

const TableHeaders = ({ key, name, active, href }: TableHeadersProps) => {
  return (
    <Link href={href}>
      <div
        key={key}
        className={`flex items-center justify-center py-2 cursor-pointer ${active ? "tableHeaderActive" : ""}`}
      >
        <span className="hover:text-emerald-300 duration-200">{name}</span>
      </div>
    </Link>
  );
};

export default TableHeaders;
