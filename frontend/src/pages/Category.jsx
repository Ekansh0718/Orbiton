import React from "react";

import { useParams } from "react-router-dom";

export default function Category() {
  const { type } = useParams();
  return <h1 className="p-6 text-3xl font-bold">Category: {type}</h1>;
}
