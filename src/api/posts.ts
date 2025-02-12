const BASE_URL = 'https://api.jackflannery.com';

export const fetchProfile = async () => {
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
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'GET',
      // headers: headers(admin),
      // credentials: 'include',
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

export const fetchPost = async (id: number, admin = false) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'GET',
      // headers: headers(admin),
      // credentials: 'include',
    });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
