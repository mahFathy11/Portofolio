import React, { useState, useEffect, useRef } from "react";
import "./Typewriter.css";


export default function Typewriter({
  words = ["Frontend Developer"],
  typingSpeed = 90, // ms per character while typing
  erasingSpeed = 50, // ms per character while erasing
  pauseAfterTyping = 1400, // ms to hold the full word before erasing
  pauseAfterErasing = 400, // ms to wait before typing the next word
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    if (!isErasing && text === currentWord) {
      // Finished typing this word — pause, then start erasing
      timeoutRef.current = setTimeout(() => setIsErasing(true), pauseAfterTyping);
      return () => clearTimeout(timeoutRef.current);
    }

    if (isErasing && text === "") {
      // Finished erasing — pause, then move to next word
      timeoutRef.current = setTimeout(() => {
        setIsErasing(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, pauseAfterErasing);
      return () => clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(
      () => {
        setText((prev) =>
          isErasing
            ? currentWord.slice(0, prev.length - 1)
            : currentWord.slice(0, prev.length + 1)
        );
      },
      isErasing ? erasingSpeed : typingSpeed
    );

    return () => clearTimeout(timeoutRef.current);
  }, [text, isErasing, wordIndex, words, typingSpeed, erasingSpeed, pauseAfterTyping, pauseAfterErasing]);

  return (
    <span className="typewriter">
      {text}
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </span>
  );
}