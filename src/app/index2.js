import  { z} from "zod";

const userSchema = z.object({
  
    username  : z.string()
})


const user = {
    name : "saqlain"
}


console.log(userSchema.parse(user))