"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  label: string;
  name: string;
  type?: "text" | "email" | "file";
  textarea?: boolean;
};

export default function ContactField({
  label,
  name,
  type = "text",
  textarea,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs tracking-widest text-orange-500 uppercase">
        {label}
      </label>

      {textarea ? (
        <Textarea
          name={name}
          className="border-0 border-b border-orange-200 rounded-none focus-visible:ring-0 focus:border-orange-500"
          rows={3}
        />
      ) : type === "file" ? (
        <input
          type="file"
          name={name}
          className="border-0 border-b border-orange-200 rounded-none focus:outline-none focus:border-orange-500"
        />
      ) : (
        <Input
          type={type}
          name={name}
          className="border-0 border-b border-orange-200 rounded-none focus-visible:ring-0 focus:border-orange-500"
        />
      )}
    </div>
  );
}
