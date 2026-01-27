
import { Leader, EventItem, ProjectProgress, PathfinderPhoto, Announcement } from './types';

export const CHURCH_NAME = "Magwegwe SDA Church";

export const LEADERS: Leader[] = [
  {
    id: '1',
    name: 'Pr. M. Dube',
    role: 'District Pastor',
    image: 'https://picsum.photos/400/500?random=1',
    bio: 'Dedicated to shepherding the flock with grace and truth.'
  },
  {
    id: '2',
    name: 'Elder J. Moyo',
    role: 'First Elder',
    image: 'https://picsum.photos/400/500?random=2'
  },
  {
    id: '3',
    name: 'Sr. T. Sibanda',
    role: 'Clerk',
    image: 'https://picsum.photos/400/500?random=3'
  },
  {
    id: '4',
    name: 'Elder P. Ndlovu',
    role: 'Treasurer',
    image: 'https://picsum.photos/400/500?random=4'
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'Divine Service',
    date: 'Every Saturday',
    time: '09:00 AM - 12:00 PM',
    location: 'Main Sanctuary',
    description: 'Our main worship service including song, prayer, and word.',
    category: 'Worship'
  },
  {
    id: 'e2',
    title: 'Youth Sabbath School',
    date: 'Every Saturday',
    time: '09:30 AM',
    location: 'Youth Hall',
    description: 'Interactive bible study and fellowship for the young.',
    category: 'Youth'
  },
  {
    id: 'e3',
    title: 'Evangelism Week of Prayer',
    date: 'March 15 - 22',
    time: '05:30 PM Daily',
    location: 'Church Grounds',
    description: 'A dedicated week for spiritual revival and outreach.',
    category: 'Community'
  }
];

export const PROJECTS: ProjectProgress[] = [
  {
    id: 'p1',
    name: 'Main Sanctuary Roof',
    description: 'Replacing the aging roof structure with modern durable materials.',
    percentage: 75,
    image: 'https://picsum.photos/800/400?random=10'
  },
  {
    id: 'p2',
    name: 'Youth Center Foundation',
    description: 'Excavation and foundation laying for the new multi-purpose hall.',
    percentage: 30,
    image: 'https://picsum.photos/800/400?random=11'
  },
  {
    id: 'p3',
    name: 'Perimeter Wall',
    description: 'Securing the church premises with a new stone wall.',
    percentage: 100,
    image: 'https://picsum.photos/800/400?random=12'
  }
];

export const YOUTH_GALLERY: PathfinderPhoto[] = [
  { id: 'y1', url: 'https://picsum.photos/600/600?random=20', caption: 'Pathfinder Camporee 2024', date: 'Jan 2024' },
  { id: 'y2', url: 'https://picsum.photos/600/600?random=21', caption: 'Bible Drill Contest', date: 'Feb 2024' },
  { id: 'y3', url: 'https://picsum.photos/600/600?random=22', caption: 'Community Service Day', date: 'Dec 2023' },
  { id: 'y4', url: 'https://picsum.photos/600/600?random=23', caption: 'Hiking Trip - Matopos', date: 'Nov 2023' },
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'a1',
    title: 'Church Board Meeting',
    date: 'Next Sunday, 10:00 AM',
    content: 'All board members are required to attend the quarterly review meeting.'
  },
  {
    id: 'a2',
    title: 'Harvest Thanksgiving',
    date: 'April 5th',
    content: 'Join us for a special service as we thank God for His bountiful blessings.'
  }
];
