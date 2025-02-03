import React from "react";
import NewUserForm from "./new-user-form";
import UsersTable from "./users-table";

const page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-4">
      <NewUserForm />
      <UsersTable />
    </div>
  );
};

export default page;
