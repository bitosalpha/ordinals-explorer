"use client";

import { motion } from "framer-motion";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import IconTwitter from "./icons/IconTwitter";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-[88rem] p-3 sm:p-5 md:p-10"
    >
      <div className="w-full rounded-md bg-black">
        <div className="flex flex-col p-4 pb-8 sm:p-6 md:p-12">
          {/* todo: link chainhooks */}
          <p className="my-4 text-sm text-neutral-0 md:my-6">
          </p>
          <div className="mt-10 flex flex-col justify-between space-y-4 text-center text-xs text-neutral-300 md:flex-row md:space-y-0">
            <div className="flex justify-center space-x-3">
              <Link href="https://twitter.com/KoiTradingX" target="_blank">
                {/* todo: find filled twitter icon */}
                <IconTwitter className="inline-block h-3.5 text-neutral-0" />
              </Link>
              <Link href="https://github.com/hirosystems" target="_blank">
                <GitHubLogoIcon className="inline-block h-[18px] w-[18px] text-neutral-0" />
              </Link>
              <Link
                href="https://koitrading.io/"
                className="inline-block"
                target="_blank"
              >
                &copy; {new Date().getFullYear()} Koi Trading
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
