import { AppContext } from "../context/AppContext";
import Component2 from "./Component2";

function Component1() {
  const values = {
    a: "Apple",
    b: "Ball",
    c: "Cat",
    d: "Dog",
    e: "Elephant",
    f: "Fish",
  };

  return (
    <AppContext.Provider value={values}>
      <h2>Component 1</h2>
      <Component2 />
    </AppContext.Provider>
  );
}

export default Component1;
