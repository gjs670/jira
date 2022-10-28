import { useArray, useMount } from "utils/customHook";

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "gjs", age: 30 },
    { name: "gzc", age: 5 },
  ];

  const { value, add, removeIndex, clear } = useArray(persons);
  useMount(() => {
    // console.log(value.todo)
    // console.log(add{ name: 'david' })
    // console.log(removeIndex('123'))
  });

  return (
    <div>
      <button onClick={() => add({ name: "john", age: 24 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>clear</button>
      {value.map((person, index) => (
        <p key={index}>
          <span>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </p>
      ))}
    </div>
  );
};
