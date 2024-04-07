import { Article } from '@/types/article';

interface ArticleListItemProps {
  article: Article | undefined;
}

const ArticleListItem = (props: ArticleListItemProps) => {
  const article = props.article;

  return (
    <div className="w-full md:w-1/2">
      <div className="flex space-x-4">
        <div className="text-5xl min-w-20 min-h-20 w-20 h-20 bg-white rounded-md flex items-center justify-center">
          <div>{article?.emoji}</div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="font-bold text-wrap overflow-x-hidden">{article?.title}</div>
          <div className="flex space-x-2 flex-wrap">
            <div className="text-sm">tag1, tag2, tag3, ...</div>
            <div className="text-sm">更新日</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleListItem;
