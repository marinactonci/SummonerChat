"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Plus } from "lucide-react";
import { useState } from "react";

interface Conversation {
  id: string;
  title: string;
  date: string;
}

export function Sidebar() {
  const [conversations] = useState<Conversation[]>([
    { id: "1", title: "The History of Demacia", date: "2024-03-20" },
    { id: "2", title: "Noxian Conflicts", date: "2024-03-19" },
    { id: "3", title: "The Void", date: "2024-03-18" },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0">
          <SidebarContent conversations={conversations} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex h-full w-80 flex-col border-r border-zinc-800">
        <SidebarContent conversations={conversations} />
      </div>
    </>
  );
}

function SidebarContent({ conversations }: { conversations: Conversation[] }) {
  return (
    <div className="flex h-full flex-col bg-zinc-900">
      <div className="p-4 border-b border-zinc-800">
        <Button className="w-full justify-start gap-2">
          <Plus className="h-4 w-4" />
          New Conversation
        </Button>
      </div>
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-2 p-2">
          {conversations.map((conversation) => (
            <Button
              key={conversation.id}
              variant="ghost"
              className="w-full justify-start text-left"
            >
              <div className="flex flex-col items-start">
                <span className="text-sm">{conversation.title}</span>
                <span className="text-xs text-zinc-500">{conversation.date}</span>
              </div>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}