'use client';
import { generateChatResponse } from '@/utils/actions';
import { useMutation } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdPerson } from 'react-icons/io';
import { RiRobot2Fill } from 'react-icons/ri';

interface MessageProps {
  role: string;
  content: string | null;
}

// # FIX CSS WHEN USERS SCROLL DOWN

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const { mutate, isPending } = useMutation({
    mutationFn: (query: MessageProps) =>
      generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error('Something went wrong...');
        return;
      }
      setMessages((prev) => [...prev, data]);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const query = { role: 'user', content: text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText('');
  };

  return (
    <div className='h-screen py-12 grid grid-rows-[1fr,auto] bg-base-200'>
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className='flex items-center py-6 px-8 leading-loose border-b border-base-300 gap-8'
          >
            <span>
              {message.role === 'user' ? (
                <IoMdPerson className='h-6 w-6 text-primary' />
              ) : (
                <RiRobot2Fill className='h-6 w-6 text-secondary' />
              )}
            </span>
            <p className=''>{message.content}</p>
          </div>
        ))}
        {isPending ? <span className='loading'></span> : null}
      </div>
      <form onSubmit={handleSubmit} className='max-w-7xl pt-12 ml-12'>
        <div className='join w-full'>
          <input
            type='text'
            className='input input-bordered join-item w-full'
            placeholder='Message TourGPT'
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type='submit'
            className='btn btn-primary join-item rounded-xl uppercase '
            disabled={isPending}
          >
            {isPending ? 'please wait' : 'ask question'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Chat;
