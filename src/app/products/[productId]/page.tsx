import React from "react";

interface Props {
  params: { productId: string };
}

export default function Product({ params }: Props) {
  return <h1>{"Products Page   " + params.productId}</h1>;
}
