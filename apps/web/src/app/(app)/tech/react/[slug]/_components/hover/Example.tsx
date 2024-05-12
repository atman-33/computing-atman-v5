'use client';

const Example = () => {
  return (
    <>
      <p>Please hover over the component while checking the console.</p>
      <div
        className="bg-primary/50 my-8 h-40 p-2 hover:cursor-pointer"
        onMouseEnter={() => console.log('Mouse enter')}
        onMouseLeave={() => console.log('Mouse leave')}
      >
        Please hover me
      </div>
    </>
  );
};

export { Example as HoverExample };
