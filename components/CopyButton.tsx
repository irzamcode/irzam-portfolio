"use client";

import { useState } from "react";

export function CopyButton({
  text,
  label = "テンプレをコピー",
  onCopy: onCopyCallback,
}: {
  text: string;
  label?: string;
  onCopy?: () => void;
}) {
  const [done, setDone] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      onCopyCallback?.();
      setTimeout(() => setDone(false), 1500);
    } catch {
      // clipboardが使えない環境向けのフォールバック
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setDone(true);
      onCopyCallback?.();
      setTimeout(() => setDone(false), 1500);
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-50"
    >
      {done ? "コピーしました" : label}
    </button>
  );
}