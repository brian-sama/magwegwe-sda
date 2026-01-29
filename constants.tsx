
import { Leader, EventItem, ProjectProgress, PathfinderPhoto, Announcement, Choir, MinistryGroup } from './types';

export const CHURCH_NAME = "Seventh Day Adventist Church Magwegwe West";

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
  { id: 'y1', url: '/images/pathfinder-1.jpg', caption: 'Pathfinder Parade', date: '2024' },
  { id: 'y2', url: '/images/pathfinder-2.jpg', caption: 'Pathfinder Drill', date: '2024' },
  { id: 'y3', url: '/images/pathfinder-3.jpg', caption: 'Pathfinder March', date: '2024' },
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

export const CHURCH_CHOIRS: Choir[] = [
  {
    id: 'c1',
    name: 'Church Choir',
    description: 'Our main choir leading worship in traditional and contemporary styles.',
    image: '/images/choir-main.jpg'
  },
  {
    id: 'c2',
    name: 'Sabbath School Choir',
    description: 'Inspiring songs and hymns for Sabbath school services.',
    image: '/images/choir-sabbath.jpg'
  },
  {
    id: 'c3',
    name: 'SDA Youth Choir',
    description: 'Contemporary praise and worship from our young voices.',
    image: '/images/choir-youth.jpg'
  },
  {
    id: 'c4',
    name: 'Pathfinder Choir',
    description: 'The Pathfinder unit bringing joy through musical service.',
    image: '/images/choir-pathfinder.jpg'
  },
  {
    id: 'c5',
    name: 'Adventure Choir',
    description: 'Our youngest members learning to praise through song.',
    image: '/images/choir-adventure.jpg'
  }
];

export const MINISTRY_GROUPS: MinistryGroup[] = [
  {
    id: 'mg1',
    name: 'Awaiting Ministries',
    image: 'https://picsum.photos/400/300?random=20'
  },
  {
    id: 'mg2',
    name: 'The Haven',
    image: 'https://picsum.photos/400/300?random=21'
  },
  {
    id: 'mg3',
    name: 'Heavenly Tremor',
    image: 'https://picsum.photos/400/300?random=22'
  }
];
