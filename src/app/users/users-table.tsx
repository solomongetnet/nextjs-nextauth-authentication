"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllUsers } from "@/server/actions/user.actions";

export default function UsersTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  const users = data?.users;

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold">All Users</h2>
      <Table className="w-full md:min-w-[300px]">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user: { id: number; name: string; email: string }) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
