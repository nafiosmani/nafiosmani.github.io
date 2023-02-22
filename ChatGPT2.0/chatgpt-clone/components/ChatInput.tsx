'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { FormEvent, useState } from 'react';
import { addDoc, collection, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';

type Props = {
    chatId: string;
  };

  function ChatInput({ chatId }: Props) {
    const [prompt, setPrompt] = useState("");
    const { data: session } = useSession();


    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!prompt) return;

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
            _id: session?.user?.email!,
            name: session?.user?.name!,
            avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            },
        };



    };


  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm focus:outline-none'>
        <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
            <input
            className='bg-transparent outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
            disabled={!session}
            type="text" 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your message here..."
            />

            <button 
            disabled={!prompt || !session}
            className='bg-[#11A37F] hover:opacity-50 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'
            type='submit'
            >
               
                <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
            </button>
        </form>

        <div>{/*Model Selection*/}</div>
    </div>
  )
}

export default ChatInput