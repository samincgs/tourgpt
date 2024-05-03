'use server';

import OpenAI from 'openai';
import { db } from './db';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessages: any) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'you are a helpful assistant' },
        ...chatMessages,
      ],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    });

    return response.choices[0].message;
  } catch (err) {
    return null;
  }
};

export const getExistingTour = async ({ city, country }: DestinationProps) => {
  const tour = await db.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });
  return tour;
};

export const generateTourResponse = async ({
  city,
  country,
}: DestinationProps) => {
  const query = `Find a exact ${city} in this exact ${country}.
  If ${city} and ${country} exist, create a list of things families can do in this ${city},${country}. 
  Once you have a list, create a one-day tour. Response should be  in the following JSON format: 
  {
    "tour": {
      "city": "${city}",
      "country": "${country}",
      "title": "title of the tour",
      "description": "short description of the city and tour",
      "stops": [" stop name", "stop name","stop name"]
    }
  }
  "stops" property should include only three stops.
  If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country},   return { "tour": null }, with no additional characters.`;

  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'you are a tour guide' },
        { role: 'user', content: query },
      ],
      model: 'gpt-3.5-turbo',
      temperature: 1,
    });

    const content = response.choices[0].message.content as string;
    const tourData = JSON.parse(content);

    if (!tourData.tour) {
      return null;
    }

    return tourData.tour;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createNewTour = async (tour: any) => {
  const newTour = await db.tour.create({
    data: tour,
  });

  return newTour;
};
