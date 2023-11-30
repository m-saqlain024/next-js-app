import React from "react";
import { z } from "zod";

const DataObjectSchema = z
  .object({
    id: z.union([z.string(), z.number()]),
    // id: z.string().or(z.number()),
    name: z
      .string()
      .min(3, "should be greater than thre  character")
      .max(12, "name should less than 12 character"),
    email: z
      .string()
      .email()
      .refine((val) => val.endsWith("@gmail.com"), {
        message: "please enter valid email",
      }),
    isActive: z.boolean().nullable(), // and nullish accept both undefined and null,
    gender: z.literal("male").or(z.literal("female")),
  })
  .strict();

const mockdataSchema = z.array(DataObjectSchema);

type dataschema = z.infer<typeof mockdataSchema>;

const MOCKDATAFORZODSCHEMA: dataschema = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
    gender: "male",
  },
  {
    id: "2", // Note: The 'id' can be either a number or a string.
    name: "Bob",
    email: "bob@example.com", // The 'email' should be a valid email address.
    isActive: false,
    gender: "female", // The 'gender' should be one of the predefined values.
  },
  // ... potentially more objects
];

export default function page() {
  const handleClick = () => {
    // console.log(userschema.safeParse(user));
  };
  return (
    <div>
      <button onClick={handleClick}> click me</button>
    </div>
  );
}
