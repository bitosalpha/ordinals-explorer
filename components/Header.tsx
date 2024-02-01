"use client";

import React from 'react';

import { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { ClientProvider } from '@micro-stacks/react';
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import { WalletConnectButton } from '../components/wallet-connect-button';

const Header = ({ dehydratedState, onPersistState, onSignOut, children }: { dehydratedState?: string; onPersistState: (dehydratedState: string) => void; onSignOut: () => void; children?: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <ClientProvider
      appName="Nextjs + Microstacks"
      appIconUrl="/vercel.png"
      dehydratedState={dehydratedState}
      onPersistState={onPersistState}
      onSignOut={onSignOut}
    >
      <header className="relative mx-auto flex w-full max-w-[88rem] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="cursor-pointer">
          <img src="/logo.png" alt="Koi Trading Beta" width={140} height={40} />
        </Link>
        <AnimatePresence>
          {pathname !== "/" ? (
            <motion.div
              key="search-bar-wrapper"
              className="me-5 ms-8 hidden flex-1 lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SearchBar small key={pathname} />
            </motion.div>
          ) : (
            <div className="h-10" />
          )}
        </AnimatePresence>
        {/* todo: explore button, stats, connect wallet */}
        <div className="hidden sm:block">
          <Link
            href="/inscriptions"
            className="rounded-md px-3.5 py-2.5 transition-colors hover:bg-neutral-0"
          >
            Explorer
          </Link>
          <Link
            href="/protocols/brc-20"
            className="rounded-md px-3.5 py-2.5 transition-colors hover:bg-neutral-0"
          >
            Inscriptions
          </Link>
          {/* todo: re-enable different explore modes */}
          {/* <HoverCard openDelay={0}>
            <HoverCardTrigger className="cursor-default select-none rounded-md px-3.5 py-2.5 hover:bg-neutral-0">
              Explore
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-col p-1">
              <Link
                href="/explore"
                className="rounded-md px-3.5 py-2.5 hover:bg-neutral-0"
              >
                All inscriptions
              </Link>
              <Link
                href="/period"
                className="rounded-md px-3.5 py-2.5 hover:bg-neutral-0"
              >
                By halving period
              </Link>
            </HoverCardContent>
          </HoverCard> */}
          {/* todo: re-enable stats nav */}
          {/* <HoverCard openDelay={0}>
            <HoverCardTrigger className="opacity-50 cursor-not-allowed">
              <span
                // todo: change back to Link
                // href="/stats"
                className="px-3.5 py-2.5 rounded-md hover:bg-neutral-0"
              >
                Stats
              </span>
            </HoverCardTrigger>
            <HoverCardContent className="px-2">
              Under Construction 🚧
            </HoverCardContent>
          </HoverCard> */}
          <button className="rounded-md px-3.5 py-2.5 text-neutral-300 hover:text-neutral-500">
            <WalletConnectButton />
          </button>
        </div>
        {process.env.NODE_ENV !== "production" && (
          // breakpoint debugging during development
          <div className="absolute right-0 top-0 p-2 text-xs text-neutral-200">
            <span className="inline sm:hidden">xs</span>
            <span className="hidden sm:inline md:hidden">sm</span>
            <span className="hidden md:inline lg:hidden">md</span>
            <span className="hidden lg:inline xl:hidden">lg</span>
            <span className="hidden xl:inline">xl</span>
          </div>
        )}
      </header>
    </ClientProvider>
  );
};

export default Header;



