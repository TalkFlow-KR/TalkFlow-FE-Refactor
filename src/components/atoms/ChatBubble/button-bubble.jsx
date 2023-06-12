import React, { useCallback, useState } from "react";
import { Button, Message, Bubble, OverlayDiv } from "./button-bubble.styled";

function ButtonBubble({ value, onSelectItem }) {
  console.log(value);
  // createBox 에서 가져오는 value는 단수
  // {id: 4, sender: 'user', option: Array(3)}
  const [currentX, setCurrentX] = useState("6px");
  const [activeButton, setActiveButton] = useState(null);
  //

  const handleSelectItem = useCallback(
    (index, item, position) => {
      console.log(item);
      onSelectItem(index, item);
      setActiveButton(position);
      if (position === 0) {
        setCurrentX("-375px");
      } else if (position === 1) {
        setCurrentX("-260px");
      } else if (position === 2) {
        setCurrentX("-144px");
      }
    },
    [onSelectItem, setCurrentX]
  );
  return (
    <Message>
      <Bubble className="user">
        <span>
          {value.message.map((item, index) => (
            <Button
              key={value.id}
              onClick={() =>
                handleSelectItem(value.id, value.message[index], index)
              }
              isActive={activeButton === index}
            >
              {value.message[index]}
            </Button>
          ))}
          <OverlayDiv className="divide" X={currentX} />
        </span>
      </Bubble>
    </Message>
  );
}

export default ButtonBubble;
