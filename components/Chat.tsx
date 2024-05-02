'use client';
import { generateChatResponse } from '@/utils/actions';
import { useMutation } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const { mutate } = useMutation({
    mutationFn: (message: any) => generateChatResponse(message),
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate(text);
  };

  return (
    <div className='h-screen py-12 grid grid-rows-[1fr,auto]'>
      <div>
        <h2 className='text-5xl'>messages</h2>
      </div>
      <form onSubmit={handleSubmit} className='max-w-7xl pt-12'>
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
          >
            ask question
          </button>
        </div>
      </form>
    </div>
  );
};
export default Chat;
