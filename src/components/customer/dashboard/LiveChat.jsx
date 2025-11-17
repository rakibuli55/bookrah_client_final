import { useState } from "react";
import LiveChatModal from "./LiveChatModal"

const LiveChat = () => {
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <div className="w-full py-8 md:py-16 rounded-2xl px-6 flex flex-col justify-center items-center bg-white border border-[#D7CBBF] shadow-primary ">
            <p className="md:text-3xl text-2xl text-center font-bold">We are here to help</p>
            <p className="md:text-lg tex-base py-2 text-center text-paragraph font-medium">
                24/7 chat support with the help of all.</p>
            <button onClick={() => setChatOpen(true)} className="w-full mt-2 max-w-[470px] text-center p-4 text-heading rounded-xl bg-primary">
                Start Chat
            </button>
            <LiveChatModal isOpen={chatOpen} onClose={() => setChatOpen(false)} />
        </div>
    )
}

export default LiveChat