export interface Experience {
  company: string;
  location: string;
  title: string;
  started_on: string;
  ended_on: string;
  bullets: string[];
}

export interface Resume {
  name: string;
  title: string;
  location: string;
  email: string;
  website: string;
  skills: string[];
  experience: Experience[];
  education: string[];
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  description: string;
  published_at: string;
  body: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
}
