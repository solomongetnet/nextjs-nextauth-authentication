import Pusher from 'pusher';

const pusherServer = new Pusher({
  appId: process.env.PUSHER_APP_ID!,        // Use the server-side variable without NEXT_PUBLIC_
  key: process.env.PUSHER_APP_KEY!,         // Use the server-side variable without NEXT_PUBLIC_
  secret: process.env.PUSHER_APP_SECRET!,   // Use the server-side variable without NEXT_PUBLIC_
  cluster: process.env.PUSHER_APP_CLUSTER!, // Use the server-side variable without NEXT_PUBLIC_
  useTLS: true,
});

export default pusherServer;
