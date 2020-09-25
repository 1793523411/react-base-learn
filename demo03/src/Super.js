import React, { useState } from "react";
import { Glossary ,Parent,OuterClickExample,BlurExample} from "./super/Glossary";

function Super() {
  const [inputValue, setInputValue] = useState("");
  const labelText = "labelText";
  function onchangeHandler(e) {
    setInputValue(e.target.value);
  }

  const items = [
    {
      id: 1,
      term: "term",
      description: "description",
    },
    {
      id: 2,
      term: "term2",
      description: "description2",
    },
  ];
  return (
    <div>
        <BlurExample/>
        <OuterClickExample/>
        <Parent/>
      <Glossary items={items} />
      <input
        type="text"
        aria-label={labelText}
        aria-required="true"
        onChange={onchangeHandler}
        value={inputValue}
        name="name"
      />
    </div>
  );
}

export default Super;
