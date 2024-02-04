import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center rounded-lg bg-[#FFFDFA] p-8 text-[#171717]">
        <form className="flex w-screen flex-col items-center justify-center">
          <div className="mb-8 text-3xl font-semibold">Login</div>
          <div className="mb-4">
            <label className="text-md mb-1 block px-2 font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="block w-72 rounded-3xl bg-[#bdbdbd] p-2.5 px-5 text-sm placeholder:text-[#171717]"
            />
          </div>
          <div className="mb-4">
            <label className="text-md mb-1 block px-2 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="block w-72 rounded-3xl bg-[#bdbdbd] p-2.5 px-5 text-sm placeholder:text-[#171717]"
            />
          </div>
          <button
            type="submit"
            className="mx-8 my-4 w-72 rounded-3xl bg-[#6E4AFF] px-6 py-2 font-semibold text-[#FFFDFA]"
          >
            Login
          </button>
          <div className="font-semibold">Or</div>
          <Link href={"/register"}>
            <button
              type="submit"
              className="mx-8 my-4 w-72 rounded-3xl border-2 border-[#6E4AFF] px-6 py-2 font-semibold text-[#6E4AFF]"
            >
              Register
            </button>
          </Link>
        </form>
      </main>
    </>
  );
}
