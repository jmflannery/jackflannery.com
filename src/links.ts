import RoboBlogIcon from '@/assets/robo-blog.svg';
import ResumeIcon from '@/assets/resume.svg';
import GithubIcon from '@/assets/github.svg';
import DevIcon from '@/assets/dev.svg';
import LinkedInIcon from '@/assets/linked-in.svg';
import BlueSkyIcon from '@/assets/bluesky.svg';
import ThreadsIcon from '@/assets/threads.svg';
import SloppyFacebookIcon from '@/assets/sloppy-facebook.svg';
import InstagramIcon from '@/assets/instagram.svg';
import TwitterIcon from '@/assets/twit-bird.svg';

const links = [
  {
    name: 'Blog',
    href: '/blog',
    Component: RoboBlogIcon,
  },
  {
    name: 'Resume',
    href: '/resume',
    Component: ResumeIcon,
  },
  {
    name: 'Github',
    href: 'https://github.com/jmflannery',
    Component: GithubIcon,
  },
  {
    name: 'Dev.to',
    href: 'https://dev.to/jackf',
    Component: DevIcon,
  },
  {
    name: 'Linked In',
    href: 'https://www.linkedin.com/in/jack-flannery-a6bb5b26/',
    Component: LinkedInIcon,
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/jackflannery.com',
    Component: BlueSkyIcon,
  },
  {
    name: 'Threads',
    href: 'https://www.threads.net/@jackflannery81',
    Component: ThreadsIcon,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/jackflannery81',
    Component: InstagramIcon,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/jack.flannery1',
    Component: SloppyFacebookIcon,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/jackflannery81',
    Component: TwitterIcon,
  },
];

export default links;
