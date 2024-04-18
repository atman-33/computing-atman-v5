'use client';

import { useEffect } from 'react';
import tocbot from 'tocbot';
import './toc.css';
type TocProps = {
  className?: string;
};

export const Toc = ({ className }: TocProps) => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc', // 目次を追加する class 名
      contentSelector: '.content', // 目次を取得するコンテンツの class 名
      headingSelector: 'h1, h2, h3, h4, h5, h6', // 目次として取得する見出しタグ
      // ヘッダーの高さ分ズレてしまうため調整
      headingsOffset: 70,
      scrollSmoothOffset: -70,
    });

    // 不要となったtocbotインスタンスを削除
    return () => tocbot.destroy();
  }, []);

  return (
    <div className={`p-2 bg-white dark:bg-zinc-700 rounded-md items-start ${className}`}>
      <h3 className="p-2 mb-1 font-semibold border-b items-center flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=" text-teal-400"
        >
          <path d="M2 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6z" />
          <path d="M12 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6z" />
        </svg>
        <span>目次</span>
      </h3>
      <nav className="toc mt-1 mb-1"></nav>
    </div>
  );
};
