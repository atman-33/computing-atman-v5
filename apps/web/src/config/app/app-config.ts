interface AppConfig {
  title: string;
  description: string;
  image: string;
  href: string;
}

export const appConfig: AppConfig[] = [
  {
    title: '動画 Kansho',
    description: `An app to keep track of the progress in watching movies and tv series.`,
    image: '/app/kansho.png',
    href: '/kansho',
  },
  {
    title: '本 Dokuha',
    description: `An app to keep track of the progress in reading books and manga.`,
    image: '/app/dokuha.png',
    href: '/dokuha',
  },
  {
    title: 'Infinite Runner',
    description: `It is a game where you control a running mouse to collect coins while avoiding obstacles.`,
    image: '/app/infinite-runner.png',
    href: 'https://atman-33.github.io/phaser3-webpack-typescript-template/',
  },
  {
    title: 'Shooting Game',
    description: `This game allows you to move your character using the mouse or touch screen and shoot bullets to defeat enemy aircraft.`,
    image: '/app/shooting-game.jpg',
    href: 'https://atman-33.github.io/shooting-game-js/',
  },
  {
    title: 'Typing Game',
    description: `This game requires players to type in displayed English words from the keyboard within a time limit.`,
    image: '/app/typing-game.jpg',
    href: 'https://atman-33.github.io/typing-game-js/',
  },
  {
    title: 'Hexo Material',
    description: `This is a sample blog with the Hexo Material theme applied. The source code is available on GitHub.`,
    image: '/app/hexo-material.png',
    href: 'https://atman-33.github.io/hexo-material-blog-template/',
  },
];
