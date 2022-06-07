import Button from "../button";
import { useState } from "react";

export default function Select({ options, name }) {
  const [currentState, setCurrentState] = useState(options[0].option);

  return (
    <div className="mb-12 lg:grid lg:grid-cols-12">
      <input type="hidden" id={name} name={name} value={currentState} />
      <div className="lg:col-span-7 select-row-contact">
        {options.map((item, index) => (
          <Button
            key={index}
            custom="md:mb-4"
            isGhost={currentState === item.option}
            name={item.option}
            onFilterSelected={(e) => {
              e.preventDefault();
              setCurrentState(item.option);
            }}
          />
        ))}
      </div>
    </div>
  );
}
