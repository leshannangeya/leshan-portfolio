"use client";

import { useState } from "react";

export default function CopyEmailButton({
  email,
}: {
  email: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // If clipboard fails, fallback to opening mail client
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onCopy}
        className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-2 text-sm font-medium text-white hover:border-zinc-500"
      >
        Copy email
      </button>

      <span
        className={`text-xs text-zinc-400 transition-opacity ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        Copied
      </span>
    </div>
  );
}
