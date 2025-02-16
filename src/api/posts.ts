import type {Post, Profile} from '@/types';
const BASE_URL = 'https://api.jackflannery.com';

export const fetchProfile = async (): Promise<Profile> => {
  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      throw new Error('failed to fetch profile');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return {name: 'Name', title: 'Title', bio: 'Bio Unavailable'};
  }
};

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Posts');
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchPost = async (id: number): Promise<Post | null> => {
  try {
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'GET',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch Post');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
