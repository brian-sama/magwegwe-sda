
export interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Worship' | 'Youth' | 'Social' | 'Community';
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
}

export interface ProjectProgress {
  id: string;
  name: string;
  description: string;
  percentage: number;
  image: string;
}

export interface PathfinderPhoto {
  id: string;
  url: string;
  caption: string;
  date: string;
}
