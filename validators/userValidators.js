import { z } from "zod";

const registerUserInput = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(3, { message: "name must be atleast 2 charaters" }),
  email: z
    .string({ required_error: 'email is required' })
    .email({ message: "not a vaild email" })
    .trim(),
  password: z
    .string({ required_error: 'password is required' })
    .trim()
    .min(5, { message: "password must be atleast 5 charaters" }),
  balance: z
    .string()
    .optional(),
})

const loginUserInput = z.object({
  email: z
    .string({ required_error: 'email is required' })
    .email({ message: "not a vaild email" })
    .trim(),
  password: z
    .string({ required_error: 'password is required' })
    .trim()
    .min(5, { message: "password must be atleast 5 charaters" }),
})

const transferBalanceInput = z.object({
  recipientEmail: z
    .string({ required_error: 'email is required' })
    .email({ message: "not a vaild email" })
    .trim(),
  amount: z
    .number()
})

const registerAdminInput = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(3, { message: "name must be atleast 2 charaters" }),
  email: z
    .string({ required_error: 'email is required' })
    .email({ message: "not a vaild email" })
    .trim(),
  password: z
    .string({ required_error: 'password is required' })
    .trim()
    .min(5, { message: "password must be atleast 5 charaters" }),
  balance: z
    .number()
    .optional(),
  isAdmin: z
    .boolean()
    .optional(),
})

export {
  registerUserInput,
  loginUserInput,
  transferBalanceInput,
  registerAdminInput
} 
