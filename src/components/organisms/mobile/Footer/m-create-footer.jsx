import React from "react";

function MCreateFooter({ selected, onSubmit }) {
  function handleOnSubmit() {
    console.log(selected);
    onSubmit();
  }
  return (
    <div>
      <button type="button">{selected.selectedLanguage}</button>
      <button type="button">{selected.selectedTheme}</button>
      <button type="button"> {selected.selectedPartner}</button>
      <button type="button" onClick={handleOnSubmit}>
        채팅 생성하기
      </button>
    </div>
  );
}

export default MCreateFooter;
