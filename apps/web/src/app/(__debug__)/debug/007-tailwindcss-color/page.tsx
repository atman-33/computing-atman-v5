const Page = () => {
  const baseColors = [
    'background',
    'foreground',
    'card',
    'card-foreground',
    'popover',
    'popover-foreground',
    'primary',
    'primary-foreground',
    'secondary',
    'secondary-foreground',
    'muted',
    'muted-foreground',
    'accent',
    'accent-foreground',
    'destructive',
    'destructive-foreground',
    'border',
    'input',
    'ring',
  ];

  return (
    <div>
      {baseColors.map((color) => {
        return (
          <div key={color} className="my-2 flex flex-col">
            <p>{color}</p>
            <div className={`bg-${color} h-10 w-10`}></div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
