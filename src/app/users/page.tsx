"use client";

import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/user-tables/client";
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request'
import gql from "graphql-tag";

const breadcrumbItems = [{ title: "User", link: "/users" }];

const getUsersQuery = gql(`
  query getUsers {
    users {
      id
      name
      company
      role
      verified
      status
    }
  }
`);

export default function page() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: async (): Promise<any> =>
      request(
        '/api/graphql',
        getUsersQuery
      ),
  });
  const users = data?.users || [];

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={users} />
      </div>
    </>
  );
}
