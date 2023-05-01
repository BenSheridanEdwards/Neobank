import React from "react";
import Image from "next/image";

interface AuthorProps {
  authorName: string;
  jobTitle: string;
  avatarImageUrl: string;
}

export function Author({ authorName, jobTitle, avatarImageUrl }: AuthorProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative h-12 w-12 overflow-hidden rounded-full">
        <Image src={avatarImageUrl} alt={`${authorName}'s avatar`} fill />
      </div>
      <div className="text-left">
        <p className="font-semibold text-white">{authorName}</p>
        <p className="text-white/50">{jobTitle}</p>
      </div>
    </div>
  );
}
