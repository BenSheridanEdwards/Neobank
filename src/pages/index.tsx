import Head from "next/head";
import Image from "next/image";
import { BenefitList } from "@/components/atoms/BenefitList/BenefitList";
import { Button } from "@/components/atoms/Button/Button";
import { Card } from "@/components/atoms/Card/Card";
import { Heading } from "@/components/atoms/Heading/Heading";
import { Stats } from "@/components/atoms/Stats/Stats";
import { ToastBanner } from "@/components/atoms/ToastBanner/ToastBanner";
import { Navbar } from "@/components/molecules/Navbar/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-col items-center px-8 py-10 md:items-start">
        <HeroSection />
        <section className="my-20 w-full">
          <Stats
            statsList={[
              { title: "Active users", value: "3800+" },
              { title: "Trusted partners", value: "230+" },
              { title: "transactions", value: "$230M+" },
            ]}
          />
        </section>
        <section className="flex flex-wrap items-center justify-center gap-10 md:justify-between">
          <div className="md:max-w-[50%]">
            <Heading visualLevel="h2" elementLevel="h2">
              You do the business, we&apos;ll handle the money.
            </Heading>
            <p className="mt-4 text-[#B3B3B3]">
              With the right platform and credit card you can earn rewards and
              track your spending in one place. Using our dashboard you can
              automate and batch tasks so sending money where it needs to go is
              effortless.
            </p>
            <Button additionalClassName="mt-8" variant="primary">
              Start now
            </Button>
          </div>
          <BenefitList
            benefitsList={[
              {
                title: "Rewards",
                description:
                  "We find you the best credit cards to maximise airmiles, promotions, and prizes.",
                iconUrl: "/assets/Star.svg",
              },
              {
                title: "100% Secured",
                description:
                  "We take proactive steps make sure your information and transactions are secure.",
                iconUrl: "/assets/ShieldDone.svg",
              },
              {
                title: "Send money, anywhere, for free",
                description:
                  "Send money with us and never worry about fees again.",
                iconUrl: "/assets/Send.svg",
              },
            ]}
          />
        </section>
        <section className="my-20 flex w-full flex-wrap items-center justify-center gap-12 md:justify-between">
          <div className="w-full max-w-[528px]">
            <div className="relative flex w-full justify-center sm:h-[400px] lg:max-w-[45%]">
              <Card additionalClassName="absolute left-[288px] top-0 z-10 hidden w-[240px] sm:block">
                <div className="flex max-w-[400px] items-center gap-4">
                  <Image
                    src="/assets/PaypalIcon.svg"
                    alt="Paypal"
                    height={80}
                    width={80}
                  />
                  <div className="ml-4 flex flex-col">
                    <h3 className="text-xl font-bold text-white">Paypal</h3>
                    <p className="mt-1 text-sm text-[#B3B3B3]">Payment</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between gap-6">
                  <div className="flex flex-col">
                    <p className="text-[#B3B3B3]">Amount</p>
                    <p className="text-xl font-bold text-white">£5000</p>
                  </div>
                  <Button
                    variant="secondary"
                    style={{
                      background:
                        "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Change
                  </Button>
                </div>
                <Button variant="primary" additionalClassName="mt-4" fullWidth>
                  Make payment
                </Button>
              </Card>

              <Card additionalClassName="left-0 top-24 w-[300px] sm:absolute">
                <div className="relative">
                  <Heading visualLevel="h5" elementLevel="h3">
                    Latest transactions
                  </Heading>
                  <div className="mt-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/assets/DribbleIcon.svg"
                          alt="Dribble Icon"
                          height={40}
                          width={40}
                        />
                        <div className="flex flex-col">
                          <p className="text-sm font-bold text-white">
                            Dribbble Pro
                          </p>
                          <p className="text-xs font-semibold capitalize text-[#B3B3B3]">
                            30 Seconds ago
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-semibold text-white">-£5000</p>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/assets/NetflixLogo.svg"
                          alt="Dribble Icon"
                          height={40}
                          width={40}
                        />
                        <div className="flex flex-col">
                          <p className="text-sm font-bold text-white">
                            Netflix
                          </p>
                          <p className="text-xs font-semibold capitalize text-[#B3B3B3]">
                            4 Days ago
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-semibold text-white">-£7.99</p>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/assets/ManulifeInsuranceLogo.svg"
                          alt="Dribble Icon"
                          height={40}
                          width={40}
                        />
                        <div className="flex flex-col">
                          <p className="text-sm font-bold text-white">
                            Manulife Insurance
                          </p>
                          <p className="text-xs font-semibold capitalize text-[#B3B3B3]">
                            5 Days ago
                          </p>
                        </div>
                      </div>

                      <p className="text-sm font-semibold text-white">
                        -£50.99
                      </p>
                    </div>
                  </div>
                  <ToastBanner additionalClassName="absolute -bottom-12 -right-12 md:-right-24">
                    <Image
                      src="/assets/GreenCheck.svg"
                      alt="Green check"
                      height={24}
                      width={24}
                      className="mr-2"
                    />
                    Your payment was successful
                  </ToastBanner>
                </div>
              </Card>
            </div>
          </div>
          <div className="lg:max-w-[40%]">
            <Heading visualLevel="h2" elementLevel="h2">
              We make it easy to see and manage your money
            </Heading>
            <p className="mt-4 text-[#B3B3B3]">
              See invoices from suppliers and pay them in part or in full with
              tools that make the process easy with a few clicks.
            </p>
          </div>
        </section>
        <section className="my-20 flex w-full flex-wrap items-center justify-center gap-12 md:justify-between">
          <div className="lg:max-w-[40%]">
            <Heading visualLevel="h2" elementLevel="h2">
              Upload your credit card in less than a minute, and discover better
              offers.
            </Heading>
            <p className="mt-4 text-[#B3B3B3]">
              Don’t like the fees your current payment provider is charging?
              Switch easily inside our platform.
            </p>
            <Button variant="primary" additionalClassName="mt-4">
              Get started
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/assets/ConcentricCircles.svg"
              alt="Background concentric circles"
              height={400}
              width={400}
            />
            <Card additionalClassName="absolute top-0 -left-8 max-w-[204px] items-center flex flex-col text-center gap-3">
              <Image
                src="/assets/ScanIcon.svg"
                alt="Scan icon"
                height={36}
                width={38}
              />
              <Heading visualLevel="h5" elementLevel="h3">
                Scan Credit Cards
              </Heading>
              <p className="text-[#B3B3B3]">
                Upload a photo of your credit card and we&apos;ll do the rest.
              </p>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
