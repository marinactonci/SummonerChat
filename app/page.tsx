import { Sidebar } from "@/components/sidebar";
import { ChatInterface } from "@/components/chat-interface";

export default function Home() {
  return (
    <main className="flex h-screen bg-zinc-900 text-zinc-100">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <ChatInterface />
        </div>
      </div>
    </main>
  );
}