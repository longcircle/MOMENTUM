const qoutes = [
  {
    quote: "잠겨죽어도 좋으니, 너는 물처럼내게 밀려오라.",
    author: "이정하",
  },
  {
    quote: "내가 그의 이름을 불러주었을 때, 그는 나에게로 와서 꽃이 되었다.",
    author: "김춘수",
  },
  {
    quote: "매일 매분 매초 인생을 바꿀 수 있는 기회가 있어.",
    author: "dumbo",
  },
  {
    quote:
      "당신의 삶을 노르 바꾸어라. 미래에 걸지 말아라. 미루지 말고 지금 행동하라.",
    author: "시몬 드 보부아르",
  },
  {
    quote: "열정없이 사느니 차라리 죽는게 낫다.",
    author: "커트 코베인",
  },
  {
    quote: "이 세상에 열정없이 이루어진 위대한 것은 없다.",
    author: "게오르그 빌헬름",
  },
  {
    quote: "강한 신념이야말로 거짓보다 더 위험한 진리의 적이다.",
    author: "프레드리히 니체",
  },
  {
    quote:
      "다른누군가 되어서 사랑받기 보다는 있는 그대로의 나로서 미움받는 것이 낫다.",
    author: "커트 코베인",
  },
  {
    quote:
      "사랑을 두려워하는 것은 삶을 두려워하는 것과 같으며, 삶을 두려워 하는 사람은 이미 세 부분이 죽은 상태다.",
    author: "버트런드 러셀",
  },
  {
    quote: "인생의 목적은 성숙하지 않기 위해 싸우는 것이다.",
    author: "딕 워트하이머",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = qoutes[Math.floor(Math.random() * qoutes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
