import { Component } from "react";

type props = {
  cor: string;
  texto: string;
};

export default function Botao(props: props) {
  return (
    <button className={`${props.cor} p-2 rounded-md`}>{props.texto}</button>
  );
}
