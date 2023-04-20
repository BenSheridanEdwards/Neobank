import React from "react";
import Image from "next/image";

export interface BenefitListProps {
  benefitsList: {
    title: string;
    description: string;
    iconUrl: string;
  }[];
}

export function BenefitList({ benefitsList }: BenefitListProps) {
  return (
    <ul className="flex flex-col">
      {benefitsList.map(({ title, description, iconUrl }) => (
        <li key={title} className="my-2">
          <div className="flex max-w-[400px] items-center">
            <div className="relative flex min-h-[64px] min-w-[64px] items-center justify-center rounded-full bg-[#011814]">
              <Image src={iconUrl} alt={title} height={30} width={30} />
            </div>
            <div className="ml-4 flex flex-col">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="mt-2 text-[#B3B3B3]">{description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
