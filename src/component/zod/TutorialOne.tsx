"use client";
import { type } from "os";
import React, { useEffect } from "react";
import { z } from "zod";

type ProductPropsa = {
  name: z.StringValidation;
  price: z.ZodNumber;
};

const ProductSchema = z.object({
  name: z.string(),
  price: z.number(),
});

type ProductProps = z.infer<typeof ProductSchema>;
const myFun = (product: ProductProps) => {
  return product.name;
};

function TutorialOne() {
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((product) => {
        const isCorrect = ProductSchema.safeParse(product);
        console.log(isCorrect, " schema is here");
        if (!isCorrect.success) {
          console.error(isCorrect.error);
          return;
        }
        console.log(isCorrect.data.name);
      });
  });
  return <div>hello</div>;
}

export default TutorialOne;
