import React, { ChangeEvent, useState } from "react";
import Image from "next/image";

interface TextFieldProps {
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
  errorMessage?: string;
  isRequired?: boolean;
}

export function TextField({
  label,
  name,
  onChange,
  placeholder,
  value,
  errorMessage,
  isRequired = false,
}: TextFieldProps) {
  const [text, setText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    onChange(event);
  };

  return (
    <div className="relative my-2 flex w-full flex-col sm:max-w-[320px]">
      <label htmlFor={name} className="font-semibold text-white">
        {label}
        {isRequired && <span className="ml-1 text-[#FF4E5D]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        onChange={handleChange}
        value={value !== undefined ? value : text}
        placeholder={placeholder}
        className="mt-[14px] w-full border-b border-white bg-transparent pb-[2px] text-white focus:border-[#33BBCF] focus:outline-0 sm:max-w-[360px]"
      />
      {errorMessage && (
        <div className="relative mt-2">
          <div className="absolute -top-[16px] left-[6px] h-0 w-0 border-[10px] border-[#FF4E5D] border-l-transparent border-r-transparent border-t-transparent" />

          <div className="flex items-center gap-1 rounded-md bg-[#FF4E5D] p-1 text-xs font-semibold text-white">
            <Image
              src="/assets/WarningIcon.svg"
              width={24}
              height={24}
              alt="Warning icon"
            />
            {errorMessage}
          </div>
        </div>
      )}
    </div>
  );
}
