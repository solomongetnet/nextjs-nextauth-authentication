import pusherServer from "@/lib/pusher-server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message, user } = await req.json();

  // Trigger an event to notify clients
  await pusherServer.trigger("chat-channel", "new-message", {
    message,
    user,
  });

  return NextResponse.json({ success: true });
}
