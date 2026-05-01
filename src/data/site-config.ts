import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    title: 'Due Voci Una Storia Edizioni',
    subtitle: 'Storie che non spiegano. Accompagnano. Tra musica, mistero e immaginazione.',
    description: 'Libri per bambini e ragazzi: storie che accompagnano, emozionano e fanno crescere.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Due Voci Una Storia Edizioni',
        text: "Storie per bambini e ragazzi che accompagnano, emozionano e fanno crescere. Un viaggio tra musica, mistero e immaginazione.",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
    {
        text: 'Scopri i libri',
        href: '/projects'
    },
    {
        text: 'Contattaci',
        href: '/contact'
    }
]
    },
    subscribe: {
    enabled: false,
    title: '',
    text: '',
    form: {
        action: '#'
    }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
