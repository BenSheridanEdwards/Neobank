import React from "react";
import Image from "next/image";
import { Banner } from "../atoms/Banner/Banner";
import { Heading } from "../atoms/Heading/Heading";

export function HeroSection() {
  return (
    <section className="flex w-full flex-col justify-between md:flex-row">
      <div className="min-w-[42%]">
        <Banner>
          <Image
            src="/assets/Discount.svg"
            width={32}
            height={32}
            alt="Discount icon"
          />
          <p className="ml-2 text-sm text-white">
            20% <span className="opacity-60">DISCOUNT FOR</span> BUYING ANNUALLY
          </p>
        </Banner>
        <div className="max-w-[360px]">
          <Heading visualLevel="h1" elementLevel="h1" className="mt-4">
            Next{" "}
            <span
              style={{
                background:
                  "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Generation
            </span>{" "}
            Banking and Analytics.
          </Heading>
          <p className="mt-4 text-[#B3B3B3]">
            We create technology to see and control your business’ money, all in
            one place.
          </p>
        </div>
      </div>
      <Image
        src="/assets/HeroIllustration.svg"
        height={620}
        width={600}
        alt="Hero illustration"
      />
    </section>
  );
}
