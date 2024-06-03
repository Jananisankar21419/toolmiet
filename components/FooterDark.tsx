import Link from "next/link";

import { GoArrowUpRight } from "react-icons/go";

export default function FooterDark() {
  const links = [
    {
      id: 1,
      href: "https://github.com/Jananisankar21419/toolmiet",
      label: "Github",
    },
  ];

  return (
    <footer className="mt-32 mb-16 sm:mb-0 ">
      <div className="border-b border-white opacity-25  pb-6"></div>
      <div className="flex flex-col gap-y-12 gap-x-2 md:flex-row items-start justify-between pt-6 pb-10 text-stone">
        <div className="gap-y-4 b-8 flex flex-col text-base xl:text-h6 2xl:text-h5">
          <div className="flex w-56 gap-x-1 xl:w-96 ">
            <span className="w-fit flex-nowrap whitespace-nowrap">
              Made with ❤️ by{" "}
            </span>
            <Link
              className="font-bold relative overflow-y-hidden w-full group h-fit"
              target="_blank"
              href="https://janani-portfolio.vercel.app/"
            >
              <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                Janani
              </span>
              <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline flex-nowrap whitespace-nowrap">
                Janani:)
              </span>
            </Link>
          </div>
        </div>
        <ul className=" grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid xl:flex gap-x-8 gap-y-3">
          {links.map((link) => (
            <li
              key={link.id}
              className="flex w-fit group text-base xl:text-h7 2xl:text-h5"
            >
              {link.id === 2 || link.id === 4 ? (
                <Link
                  className="group"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Link>
              ) : (
                <Link className="group" href={link.href}>
                  {link.label}
                </Link>
              )}
              <span className="relative overflow-hidden h-fit w-fit">
                <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
