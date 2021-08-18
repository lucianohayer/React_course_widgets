import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
  {
    label: "The Color Orange",
    value: "orange",
  },
];

const App = () => {
  // const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={ items }/> */}
      {/* <Search /> */}
      {/* <Dropdown
        label="Select a color"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> */}
      <Translate />
    </div>
  );
};

export default App;
