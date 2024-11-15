import zod from "zod"

export const signupValidator = zod.object({
    name: zod.string(),
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6)
})

export const signinValidator = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6)
})