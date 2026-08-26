"use client";

import { useEffect, useState } from "react";

const phrases = [
  "A Web3 / Blockchain Developer",
  "A Solidity Smart Contract Developer",
];

const typeSpeed = 75;
const deleteSpeed = 45;
const phraseHold = 1800;
const transitionPause = 500;

export default function TerminalTypewriter() {
  const [text, setText] = useState(phrases[0]);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setIsReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isReducedMotion) {
      return;
    }

    let phraseIndex = 0;
    let characterIndex = phrases[0].length;
    let deleting = true;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const phrase = phrases[phraseIndex];

      if (deleting) {
        characterIndex -= 1;
        setText(phrase.slice(0, characterIndex));

        if (characterIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timeoutId = setTimeout(tick, transitionPause);
          return;
        }
        timeoutId = setTimeout(tick, deleteSpeed);
        return;
      }

      const nextPhrase = phrases[phraseIndex];
      characterIndex += 1;
      setText(nextPhrase.slice(0, characterIndex));

      if (characterIndex === nextPhrase.length) {
        deleting = true;
        timeoutId = setTimeout(tick, phraseHold);
        return;
      }
      timeoutId = setTimeout(tick, typeSpeed);
    };

    timeoutId = setTimeout(tick, phraseHold);
    return () => clearTimeout(timeoutId);
  }, [isReducedMotion]);

  return (
    <div className="bg-background text-foreground px-5 py-4 font-mono text-label md:text-body-md min-h-14 flex items-center overflow-hidden">
      <span aria-hidden="true" className="shrink-0 mr-3 text-foreground">
        &gt;
      </span>
      <span aria-hidden="true" className="truncate">
        {isReducedMotion ? phrases[0] : text}
        <span
          className="inline-block w-[0.55em] h-[1.1em] bg-foreground align-middle ml-1 motion-safe:animate-pulse"
          aria-hidden="true"
        />
      </span>
      <span className="sr-only">{phrases.join(". ")}</span>
    </div>
  );
}