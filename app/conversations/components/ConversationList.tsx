"use client";

import useConversation from "@/app/hooks/useConversation";
import { FullConversationType } from "@/app/types";
import { Conversation } from "@prisma/client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ConversationListPops {
  initialItems: FullConversationType[];
}

const ConversationList: React.FC<ConversationListPops> = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const router = useRouter();
  const { conversationId, isOpen } = useConversation();

  return <aside className={clsx(``)}>ConversationList</aside>;
};

export default ConversationList;
