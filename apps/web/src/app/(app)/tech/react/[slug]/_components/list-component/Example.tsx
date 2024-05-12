const animals = ['cat', 'dog', 'bird'];

const Example = () => {
  return (
    <>
      <div>
        <h3>Operate array</h3>
        <br />
        <ul className="flex flex-col space-y-4">
          {animals.map((animal) => {
            return <li key={animal}>Hello, {animal}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export { Example as ListComponentExample };
