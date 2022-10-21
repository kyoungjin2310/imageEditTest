import React from "react";
import styled from "styled-components";

type BtnProps = {
  color: string;
  txt: string;
};

const Button = styled.button`
  background: ${(props) => props.color};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  text-align: center;
  line-height: 30px;
  text-decoration: none;
  outline: none;
`;

const Btn = ({ color, txt }: BtnProps) => {
  return <Button style={{ background: color }}>{txt}</Button>;
};

export default Btn;
