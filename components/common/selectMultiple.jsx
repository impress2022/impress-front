import Button from "../button";
import { useState } from "react";

export default function SelectMultiple({ options, name }) {
  const [currentState, setCurrentState] = useState([{ 0: options[0].option }]);

  const checkIfExists = (search, arr) => {
    for(const item of arr) {
      if (search in item) {
        return item;
      }
    }

    return null;
  }

  const stateToString = () => {
    let elements = [];

    for(const item of currentState) {
      elements.push(item[Object.keys(item)[0]])
    }

    return elements.join(', ')
  }

  return (
    <div className="mb-12 lg:grid lg:grid-cols-12">
      <input required="required" type="hidden" id={name} name={name} value={stateToString()} />
      <div className="lg:col-span-7">
        {options.map((item, index) => {
          return (
          <Button
            key={index}
            value={index}
            custom="md:mb-4"
            isGhost={(checkIfExists(index, currentState) !== null)}
            name={item.option}
            onFilterSelected={(e) => {
              e.preventDefault();
              const existingIndex = checkIfExists(index, currentState)

              if (existingIndex === null) {
                let obj = {}
                obj[index] = item.option
                setCurrentState([...currentState, obj]);
              }

              if (e.target.value === index.toString() && existingIndex !== null && currentState.length > 1) {
                let newState = currentState;
                newState.splice(currentState.indexOf(existingIndex), 1)

                setCurrentState([...newState])
              }
            }}
          />
        )})}
      </div>
    </div>
  );
}
