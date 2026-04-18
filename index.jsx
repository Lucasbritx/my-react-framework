import { Luact } from "./luact";

/** @jsx Luact.createElement */
function Counter() {
  const [state, setState] = Luact.useState(1);
  return <h1 onClick={() => setState((c) => c + 1)}>Count: {state}</h1>;
}
const element = <Counter />;
const container = document.getElementById("root");
Luact.render(element, container);
