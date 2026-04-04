export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: Date;
  updatedAt: Date;
  by: 'User' | 'Admin';
}

export const dummyTickets: Ticket[] = [
  {
    id: '1',
    title: 'Login page not responsive on mobile',
    description: 'The login form overflows on screens smaller than 375px',
    status: 'open',
    priority: 'high',
    createdAt: new Date('2026-03-28'),
    updatedAt: new Date('2026-03-28'),
    by: 'User'
  },
  {
    id: '2',
    title: 'Add dark mode support',
    description: 'Implement dark mode theme switching across the application',
    status: 'in-progress',
    priority: 'medium',
    createdAt: new Date('2026-03-25'),
    updatedAt: new Date('2026-03-30'),
    by: 'Admin'
  },
  {
    id: '3',
    title: 'Fix broken image links',
    description: 'Several product images are showing 404 errors',
    status: 'resolved',
    priority: 'urgent',
    createdAt: new Date('2026-03-29'),
    updatedAt: new Date('2026-03-31'),
    by: 'User'
  },
   {
    id: '4',
    title: 'Database connection timeout',
    description: 'Users are experiencing timeouts during peak hours',
    status: 'closed',
    priority: 'urgent',
    createdAt: new Date('2026-03-20'),
    updatedAt: new Date('2026-03-27'),
    by: 'Admin'
  }
];
