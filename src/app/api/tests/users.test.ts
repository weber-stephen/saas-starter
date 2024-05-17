/**
 * @jest-environment node
 */
import { testApiHandler } from 'next-test-api-route-handler';
// Import the handler under test from the app/api directory
import * as appHandler from '../graphql/route';

describe('GraphQL Query getUserById', () => {
  it('gets a user', async () => {
    expect.hasAssertions();

    await testApiHandler({
      appHandler,
      test: async ({ fetch }) => {
        const query = `query getUsers {
          getUserById(id: 1) {
            id
            name
            company
            role
            verified
            status
          }
        }
        `;

        const res = await fetch({
          method: 'POST',
          headers: {
            'content-type': 'application/json' // Must use correct content type
          },
          body: JSON.stringify({ query })
        });

        await expect(res.json()).resolves.toStrictEqual({
          "data": {
            "getUserById": {
              "id": "1",
              "name": "Candice Schiner",
              "company": "Dell",
              "role": "Frontend Developer",
              "verified": false,
              "status": "Active"
            }
          }
        });
      }
    });
  });
  
});