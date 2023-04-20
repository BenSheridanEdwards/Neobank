import React from "react";

interface StatsProps {
  statsList: {
    title: string;
    value: string;
  }[];
}

export function Stats({ statsList }: StatsProps) {
  return (
    <div className="flex flex-col items-center justify-between md:flex-row">
      {statsList.map((stat, i) => (
        <>
          {i === 0 ? null : (
            <div className="m-4 h-px w-3 bg-white md:h-3 md:w-px" />
          )}
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-white">{stat.value}</span>
            <span
              className="ml-3 text-lg font-semibold uppercase"
              style={{
                background:
                  "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {stat.title}
            </span>
          </div>
        </>
      ))}
    </div>
  );
}
