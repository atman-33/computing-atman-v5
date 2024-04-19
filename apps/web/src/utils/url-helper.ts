export const parsePath = (path: string): string[] => {
  // パスの末尾の / を削除する
  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  const result: string[] = [];
  let currentPath = '';
  for (let i = 0; i < path.length; i++) {
    const char = path[i];
    if (char === '/') {
      // / が見つかったら現在のパスを結果に追加し、次のパスを開始する
      if (currentPath.length > 0) {
        result.push(currentPath);
      }
      currentPath += '/';
    } else {
      // / 以外の文字は現在のパスに追加する
      currentPath += char;
    }
  }

  // 最後のパスを結果に追加する
  if (currentPath.length > 0) {
    result.push(currentPath);
  }

  return result;
};
