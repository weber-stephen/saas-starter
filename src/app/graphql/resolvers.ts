import { users } from "@/constants/data";

const resolvers = {
    Query: {
      users: async () => {
        try {
          return users;
        } catch (error) {
          throw new Error("Something went wrong")
        }
      }
    }
}
  
export default resolvers