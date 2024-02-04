import Link from "next/link";

import {
  FaHome,
  FaClipboardList,
  FaTrophy,
  FaUserCircle,
} from "react-icons/fa";
import { LuSwords } from "react-icons/lu";

export const Navbar: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="sticky bottom-0 z-50 h-24 w-full rounded-t-3xl bg-[#FFFDFA] shadow-[0_35px_60px_0px_rgba(0,0,0,0.3)] shadow-black">
        <div className="flex h-full items-center justify-between px-6 py-4 text-gray-600 md:px-24">
          <Link
            href={"/home"}
            className="flex flex-col items-center justify-center text-center"
          >
            <FaHome size={36} color="gray" />
            <div>Home</div>
          </Link>
          <Link
            href={"/tasks"}
            className="flex flex-col items-center justify-center text-center"
          >
            <FaClipboardList size={36} color="gray" />
            <div>Tasks</div>
          </Link>
          <Link
            href={"/quest"}
            className="-mt-12 flex flex-col items-center justify-center rounded-lg bg-[#6E4AFF] px-4 py-2 text-center text-white shadow-2xl"
          >
            <LuSwords size={36} color="white" />
            <div>Quest</div>
          </Link>
          <Link
            href={"/ranking"}
            className="flex flex-col items-center justify-center text-center"
          >
            <FaTrophy size={36} color="gray" />
            <div>Ranks</div>
          </Link>
          <Link
            href={"/profile"}
            className="flex flex-col items-center justify-center text-center"
          >
            <FaUserCircle size={36} color="gray" />
            <div>Profile</div>
          </Link>
        </div>
      </div>
    </>
  );
};
