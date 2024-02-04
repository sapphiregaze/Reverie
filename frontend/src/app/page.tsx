import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-[#170D3D] via-[#F7A6C3] to-[#FEECCE] p-12">
        <div className="flex flex-col text-center text-5xl font-bold text-[#FFFDFA]">
          <div className="flex flex-col">
            Level up your&nbsp;
            <span className="text-[#FEECCE]">daily routine&nbsp;</span>
            with&nbsp;
            <span className="bg-gradient-to-tl from-[#d1b688] to-[#FEECCE] bg-clip-text text-transparent">
              Reverie.
            </span>
          </div>
          <div className="mt-72 flex flex-col">
            <Link href={"/login"}>
              <button className="w-72 rounded-3xl bg-[#FEECCE] px-8 py-2 text-xl text-[#170D3D]">
                Login
              </button>
            </Link>
            <Link href={"/register"}>
              <button className="w-72 rounded-3xl bg-[#170D3D] px-8 py-2 text-xl text-[#FEECCE]">
                Register
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
