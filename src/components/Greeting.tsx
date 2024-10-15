import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState, type ReactNode } from "react";
import { getRandomGreeting } from "../utils/getRandomGreeting";
import { Emoji } from "emoji-picker-react";

export const Greeting = () => {
  let myDate = new Date();
  let hours = myDate.getHours();
  let greet;

  if (hours < 12) {
    greet = "morning";
  } else if (hours >= 12 && hours <= 17) {
    greet = "afternoon";
  } else if (hours >= 17 && hours <= 24) {
    greet = "evening";
  }

  const [greetingMessage, setGreetingMessage] = useState<string>("");

  useEffect(() => {
    setGreetingMessage(getRandomGreeting);
    const interval = setInterval(() => {
      setGreetingMessage(getRandomGreeting());
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const replaceEmojiCodes = (text: string): ReactNode[] => {
    const emojiRegex = /\*\*(.*?)\*\*/g;
    const parts = text.split(emojiRegex);

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        const emojiCode = part.trim();
        return <Emoji key={index} unified={emojiCode} size={20} />;
      }
      return part;
    });
  };

  return (
    <div>
      <GreetingHeader>Good {greet}</GreetingHeader>
      <GreetingText>{replaceEmojiCodes(greetingMessage)}</GreetingText>
    </div>
  );
};

export const fadeInLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-40px)
}
to {
  opacity: 1;
  transform: translateX(0px)
  }
`;

const GreetingHeader = styled.header`
  display: flex;
  margin-top: 12px;
  font-size: 26px;
  font-weight: bold;
  margin-top: 16px;
  margin-left: 8px;

  @media (max-width: 550px) {
    font-size: 22px;
  }
`;

const GreetingText = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  margin-top: 4px;
  margin-left: 8px;
  font-style: italic;
  animation: ${fadeInLeft} 0.5s ease-in-out;
`;
