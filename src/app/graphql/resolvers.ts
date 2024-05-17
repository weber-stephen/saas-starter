import { users } from "@/constants/data";
import { GraphQLError } from "graphql";
import { find } from "lodash";
import { z } from 'zod';

const UserById = z.object({
  id: z.number().min(1, { message: "Must be at least 1" }).max(5000).describe('The ID of the user'),
});

const validateFormData = (inputs: unknown) => {
  const isValidData = UserById.parse(inputs);
  return isValidData;
};

const resolvers = {
    Query: {
      users: async () => {
        try {
          return users;
        } catch (error) {
          throw new Error("Something went wrong")
        }
      },
      getUserById: async (_:any, args:any) => {
        try {
          if(validateFormData(args)) {
            const { id } = args;
            const result = find(users, { id });
            return result;
          }
        } catch (err) {
          if (err instanceof z.ZodError) {
            // Get first error message
            const errorMessage = err.issues[0].message;
            // Throw error
            throw new GraphQLError(errorMessage, {
              extensions: {
                code: 'BAD_USER_INPUT',
              },
            });
          } else {
            // List of errors https://www.apollographql.com/docs/apollo-server/data/errors/#built-in-error-codes
            throw new GraphQLError('Something went wrong', {
              extensions: {
                code: 'INTERNAL_SERVER_ERROR',
              },
            });
          }
        }
      }
    }
}
  
export default resolvers