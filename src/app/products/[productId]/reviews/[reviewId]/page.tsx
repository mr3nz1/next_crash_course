import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}

export default function Review({ params }: Props) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
