import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  ruby,
  rails,
  graphql,
  php,
  postgresql,
  photoshop,
  illustrator,
  figma,
  group,
  briefcase,
  task,
  jobs,
  money,
  clock,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },

  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },

  {
    imageUrl: ruby,
    name: 'Ruby',
    type: 'Backend',
  },
  {
    imageUrl: rails,
    name: 'Rails',
    type: 'Backend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: graphql,
    name: 'GraphQL',
    type: 'Backend',
  },
  {
    imageUrl: php,
    name: 'PHP',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: postgresql,
    name: 'postgreSQL',
    type: 'Database',
  },
  {
    imageUrl: photoshop,
    name: 'Photoshop',
    type: 'Design',
  },
  {
    imageUrl: illustrator,
    name: 'Illustrator',
    type: 'Design',
  },
  {
    imageUrl: figma,
    name: 'Figma',
    type: 'Design',
  },
];

export const experiences = [
  {
    title: 'Sales, Web Instructor, Web Director',
    company_name: 'Webstaff',
    iconBg: '#accbe1',
    date: 'Jun 2019 - Mar 2021',
    points: [
      'Instructed over 100 individuals in web development, covering Photoshop, Illustrator, HTML, CSS, JavaScript, and PHP.',
      'Managed a team of 40 contract frontend web developers and designers for Yahoo onsite projects.',
      'Assigned and reviewed web development projects at Yahoo.',
      'Achieved a 126% increase in sales within six months.',
      'Surpassed monthly sales targets by 130% within two months after transitioning to the Sales department',
    ],
  },
  {
    title: 'Procurement',
    company_name: 'Cezars Kitchen',
    iconBg: '#fbc3bc',
    date: 'Apr 2021 - Jun 2022',
    points: [
      'Coordinating food which are used in the kitchen that this company owns in international school in Japan',
      'Fixing and creating website/webpage based on the clients and company staffs demand',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Namaiki',
    iconBg: '#a2d2ff',
    date: 'Mar 2023 - Jun 2023',
    points: [
      'Developed a new e-commerce/products website from scratch using HTML, CSS, and JavaScript.',
      ' Provided design and layout suggestions based on UI/UX considerations',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Cybar',
    iconBg: '#b7e4c7',
    date: 'Jan 2022 - Present',
    points: [
      "Create and customize websites based on clients' requirements by using PHP, HTML, CSS, JavaScript, jQuery.",
      "Resolve issues and make enhancements to clients' WordPress websites.",
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/banban-22',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/ayaka-bando/',
  },
];

export const projects = [
  {
    iconUrl: money,
    theme: 'btn-back-red',
    name: 'SpendWise',
    description:
      'Developed a web application that tracks users expenses and incomes, which can easily track the users goals and to see on dashboard.',
    link: 'https://github.com/banban-22/spendWise_new',
  },
  {
    iconUrl: jobs,
    theme: 'btn-back-green',
    name: 'Jobber',
    description:
      'Created a full-stack web app for both job searcher and recruiter that they can apply to job and put the positions. The user need to select their position and depends on their position, the UI is different',
    link: 'https://github.com/banban-22/job_finder',
  },
  {
    iconUrl: task,
    theme: 'btn-back-blue',
    name: 'TaskHive',
    description:
      'Created an app that the users can track their taksks. They can add their daily todo, and kanban.',
    link: 'https://github.com/banban-22/task_hive',
  },
  {
    iconUrl: briefcase,
    theme: 'btn-back-pink',
    name: 'ProjectQL',
    description:
      'Created an appt that the list of projects, which the users can see who is assigned to what',
    link: 'https://github.com/banban-22/ProjectQL_new',
  },
  {
    iconUrl: group,
    theme: 'btn-back-black',
    name: 'Github User Dashboard',
    description:
      'Created an app that the users can check the github users, and their usage of language and so on easily by chart.',
    link: 'https://github.com/banban-22/github-user-searcher',
  },
  {
    iconUrl: clock,
    theme: 'btn-back-yellow',
    name: 'New Journey Countdown',
    description:
      'Created an web app that the user can set the countdown clock until their new journey.',
    link: 'https://github.com/banban-22/newJourney-Countdown',
  },
];
