import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useContext, useEffect, useState, type ReactNode } from "react";
import { getRandomGreeting } from "../utils/getRandomGreeting";
import { Emoji } from "emoji-picker-react";
import { UserContext } from "../contexts/UserContext";

export const Greeting = () => {
  const userContext = useContext(UserContext);
  //userContext 为空，提供一个默认值
  const username = userContext?.username || "guest";

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
  const hoursLeft = 24 - new Date().getHours();

  const hurryMessage: string[] = [
    hoursLeft > 4
      ? `${hoursLeft} hours left in the day. Use them wisely!`
      : `Only ${hoursLeft} hours left in the day`,
  ];

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
    <GreetingContainer>
      <GreetingHeader>
        <Emoji unified="1f44b" /> &nbsp;Good {greet}, {username}
      </GreetingHeader>
      <MessageContainer>
        {hurryMessage}
        <GreetingText>{replaceEmojiCodes(greetingMessage)}</GreetingText>
      </MessageContainer>
    </GreetingContainer>
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

const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 8px;
  justify-content: start;
`;

const GreetingHeader = styled.header`
  display: flex;
  font-size: 26px;
  font-weight: bold;

  @media (max-width: 550px) {
    font-size: 22px;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GreetingText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 16px;
  font-style: italic;
  animation: ${fadeInLeft} 0.5s ease-in-out;
`;
