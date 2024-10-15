const recentGreetings: Set<number> = new Set();
export const maxRecentGreeting = 8;
const hoursLeft = 24 - new Date().getHours();

const greetingText: string[] = [
  "Let's make today count! **1f680**",
  "Get things done and conquer the day!",
  "Embrace the power of productivity!",
  "Set your goals, crush them, repeat.",
  "Today is a new opportunity to be productive!",
  "Make every moment count.",
  "Stay organized, stay ahead.",
  "Take charge of your day!",
  "One task at a time, you've got this!",
  "Productivity is the key to success. **1f511**",
  "Let's turn plans into accomplishments!",
  "Start small, achieve big.",
  "Be efficient, be productive.",
  "Harness the power of productivity!",
  "Get ready to make things happen!",
  "It's time to check off those tasks! **2705**",
  "Start your day with a plan! **1f5d3-fe0f**",
  "Stay focused, stay productive.",
  "Unlock your productivity potential. **1f513**",
  "Turn your to-do list into a to-done list! **1f4dd**",
  `Have a wonderful ${new Date().toLocaleDateString("en", {
    weekday: "long",
  })}!`,
  `Happy ${new Date().toLocaleDateString("en", {
    month: "long",
  })}! A great month for productivity!`,
];

export const getRandomGreeting = () => {
  const getUniqueGreeting = () => {
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * greetingText.length);
    } while (recentGreetings.has(randomIndex));
    recentGreetings.add(randomIndex);
    if (recentGreetings.size > maxRecentGreeting) {
      const firstEntry = Array.from(recentGreetings).shift();
      if (firstEntry !== undefined) {
        recentGreetings.delete(firstEntry);
      }
    }
    return greetingText[randomIndex];
  };

  return getUniqueGreeting();
};
