
interface MessagesContainerProps {
    chatBottomRef: React.RefObject<HTMLDivElement | null>;
    messages: any[];
    isTyping: boolean;
    renderMessage: (content: string) => React.ReactNode;
}

export default function MessagesContainer({chatBottomRef, messages, isTyping, renderMessage }: MessagesContainerProps) {
    return (
        <div className="flex flex-col p-3 overflow-y-auto space-y-2 max-h-96 text-sm">
            {messages
                .filter((msg: any) => msg.role !== "system")
                .map((msg: any, idx: number) => (
                    <div
                        key={idx}
                        className={`prose prose-sm prose-invert p-2 rounded min-w-[80%] max-w-[80%] ${
                            msg.role === "user"
                                ? "bg-blue-600 text-white self-end"
                                : "bg-gray-700 text-white self-start"
                        }`}
                    >
                        {renderMessage(msg.content)}
                    </div>
                ))
            }
            {isTyping && (
                <div className="p-2 rounded bg-gray-800 text-white self-start text-sm">
                    WizardBot is typing…
                </div>
            )}
            <div ref={chatBottomRef}/>
        </div>
    )
}