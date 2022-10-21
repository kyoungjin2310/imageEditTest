import React from "react";
import Btn from "./styled/Btn";

const BtnList = () => {
  return (
    <div>
      <Btn color="orange" txt="이동" />
      <Btn color="green" txt="회전" />
      <Btn color="skyblue" txt="사이즈변경" />
      <Btn color="purple" txt="crop" />
      <Btn color="yellow" txt="제출" />
    </div>
  );
};

export default BtnList;
