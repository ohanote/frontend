import { GrTasks } from "react-icons/gr";
import { FiBell, FiPlus, FiSearch } from "react-icons/fi";
import MenuItem from "./components/MenuItem";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-[100vh] w-full">
          <div className="grid grid-cols-[200px_1fr] bg-slate-900 text-white ">
            <div className="flex p-3 gap-2 items-center justify-center border-[0.5px] border-slate-700">
              <GrTasks size={24} />
              <span>
                <span className="font-bold">Tasks</span> App
              </span>
            </div>
            <header className="flex justify-between w-full p-3  px-6 border-[0.5px] border-slate-700">
              <div className="flex items-center">
                <FiSearch className="text-slate-300 -mr-6 z-10 cursor-pointer hover:scale-105" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-slate-900 border-2 border-slate-600 rounded-md p-1 pl-8 focus:outline-none"
                />
              </div>
              <div className="flex gap-2 items-center transition-all p-3 ">
                <div className="bg-sky-400 p-2 rounded-full items-center justify-center">
                  <FiPlus className="text-white cursor-pointer hover:scale-125" />
                </div>
                <div className="border-2 border-slate-600 p-2 rounded-full">
                  <FiBell className="text-white cursor-pointer hover:scale-110" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full overflow-hidden">
                    <img
                      src="https://picsum.photos/300/300"
                      alt="profile"
                      width={36}
                    />
                  </div>
                  <div className="flex flex-col w-24">
                    <span className="font-bold text-sm">Name</span>
                    <span className="font-light text-xs">Role</span>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <div className="grid grid-cols-[200px_1fr] h-full bg-slate-900 text-white">
            <div className="flex flex-col p-3 gap-3 justify-between border-[0.5px] border-slate-700">
              <div className="flex flex-col py-3 gap-3">
                <MenuItem key="dashboard" name="Dashboard">
                  <FiGrid size={22} />
                </MenuItem>
                <MenuItem key="my tasks" name="My Tasks">
                  <MdOutlineLibraryAddCheck size={22} />
                </MenuItem>
                <MenuItem key="projects" name="Projects">
                  <MdOutlineFolder size={22} />
                </MenuItem>
                <MenuItem key="calendar" name="Calendar">
                  <MdOutlineCalendarToday size={22} />
                </MenuItem>
                <MenuItem key="feed" name="Feed">
                  <MdOutlineFeed size={22} />
                </MenuItem>
                <MenuItem key="messages" name="Messages">
                  <MdOutlineMessage size={22} />
                </MenuItem>
                <MenuItem key="goals" name="Goals">
                  <MdOutlineAdsClick size={22} />
                </MenuItem>
                <MenuItem key="members" name="Members">
                  <MdOutlineGroups size={22} />
                </MenuItem>
                <MenuItem key="settings" name="Settings">
                  <MdOutlineSettings size={22} />
                </MenuItem>
              </div>

              <div className="flex">
                <button>
                  <span>Light/Dark Mode</span>
                </button>
              </div>
            </div>

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
