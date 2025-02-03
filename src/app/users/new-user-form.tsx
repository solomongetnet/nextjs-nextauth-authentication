"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createUser } from "@/server/actions/user.actions";
import { toast } from "sonner";

export default function NewUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => createUser(name, email),
    onSuccess: (data) => {
      if (data.success) {
        toast("User created successfully!");
        queryClient.invalidateQueries({ queryKey: ["users"] }); // Refresh user list
        setName("");
        setEmail("");
      } else {
        toast("Error");
      }
    },
  });

  return (
    <div className="max-w-md space-y-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Create New User</h2>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={() => mutation.mutate()} disabled={mutation.isPending}>
        {mutation.isPending ? "Creating..." : "Create User"}
      </Button>
    </div>
  );
}
