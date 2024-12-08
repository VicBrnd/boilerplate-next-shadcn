"use client";

import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const animationsMap = {
  linear: [0, 0, 1, 1],
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
} as const;

type AnimationLabel = keyof typeof animationsMap;

interface CopyButtonProps {
  text: string;
  textCopied: string;
  timeCopied: number;
  animation: AnimationLabel;
  className?: string;
}

const baseButtonStyle =
  "relative rounded text-gray-600 transition-colors bg-gray-600/10 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold hover:text-gray-700 hover:bg-gray-700/10 inline-flex items-center justify-center";

export function CopyButton({
  text,
  textCopied,
  timeCopied,
  animation,
  className,
}: CopyButtonProps): JSX.Element {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const timerRef = useRef<number>();

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = () => {
    try {
      copyToClipboard(textCopied);
      // Réinitialise le clipboard après timeCopied ms
      timerRef.current = window.setTimeout(() => {
        copyToClipboard("");
      }, timeCopied);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const hasCopiedText = Boolean(copiedText);
  const selectedAnimation = animationsMap[animation] || animationsMap.linear;

  return (
    <motion.button
      type="button"
      aria-label={hasCopiedText ? "Texte copié" : `Copier "${text}"`}
      className={cn(baseButtonStyle, className)}
      onClick={handleCopy}
      whileTap={{ scale: 0.95 }}
    >
      {/* Élément invisible pour préserver la largeur du bouton initial */}
      <span className="invisible block rounded">{text}</span>
      <div
        className="absolute inset-0 flex items-center justify-center"
        role="status"
        aria-live="polite"
      >
        <AnimatePresence mode="wait" initial={false}>
          {hasCopiedText ? (
            <motion.span
              key="copied"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: selectedAnimation }}
              className="text-green-600"
            >
              Copied!
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: selectedAnimation }}
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}
