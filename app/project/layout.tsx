"use client";

import PROJECT_DETAILS_MENU from "@/constants/projectDetailsMenu";
import React from "react";
import TableHeaders from "../components/TableHeaders";

import { usePathname } from "next/navigation";

const ProjectLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const activeSegment = usePathname();
  console.log(activeSegment);

  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-[70%_1fr] border-[0.5px] border-slate-700">
        <div className="flex flex-col p-3 gap-3">
          <div className="flex flex-col gap-2">
            <span className="text-xs">
              Project/ <span className="font-bold">Project Details</span>
            </span>
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-lg">
                Food delivery Web/App Design
              </h1>
              <span className="text-xs py-1 px-2 rounded-md bg-emerald-900 text-emerald-200">
                In Progress
              </span>
            </div>
          </div>
          <div className="grid grid-cols-7 w-full text-sm">
            {PROJECT_DETAILS_MENU.map((e) => {
              return (
                <TableHeaders
                  key={e.href}
                  href={e.href}
                  name={e.name}
                  active={activeSegment === e.href}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex bg-slate-950 h-full w-full">{children}</div>
    </div>
  );
};

export default ProjectLayout;
