import {
  CalendarIcon,
  //DownloadIcon,
  MapIcon,
  MusicNoteIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline';

import heroImage from '../images/gig.webp'; //TODO: credit @minkmingle on Unsplash
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';

import profilepic from '../images/nghthwk.jpg';
import testimonialImage from '../images/crowd.webp'; //TODO: credit @tijsvl on Unsplash
//import hubwarImage from '../images/testimonials/hubwar.jpg'
//import korruptImage from '../images/testimonials/korrupt.jpg'
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
//import AppleMusicIcon from '../components/Icon/AppleMusicIcon';
//import BeatportIcon from '../components/Icon/BeatportIcon';
import BandCampIcon from '../components/Icon/BandCampIcon';
import SoundCloudIcon from '../components/Icon/SoundCloudIcon';
import SpotifyIcon from '../components/Icon/SpotifyIcon';
import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'NGHTHWK Music EPK',
  description: "Portfolio website for Producer/DJ NGHTHWK, highlighting his works and accomplishments",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'releases',
  Resume: 'music',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;
/**
 * TODO list : 
 *  - Better hero image
 *  - Press Kit !
 *  - Promotional photos ?
 *  - Video section ?
 *  - contact details : finish form (use https://sendgrid.com/pricing/)
 */

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `NGHTHWK`,
  description: (
    <>
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      US-based <strong className="text-stone-100">electronic music producer</strong> and DJ, 
      focusing on <strong className="text-stone-100">Deep Dubstep, Freeform Bass, and Bass House</strong> music.
    </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Music released on <a href="https://open.spotify.com/user/subbassbro">Spotify</a>, <a href="https://soundcloud.com/nghthwk">SoundCloud</a>, 
        and <a href="https://www.youtube.com/@nghthwkmusic">Youtube</a>.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/presskit.pdf',//TODO
    //   text: 'Press kit',
    //   primary: true,
    //   Icon: DownloadIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hacker by day, DJ by night, NGHTHWK (Matt) has been taking the underground scene by storm! 
  Being a Bass Capital baby from Denver, Colorado and now living in Austin, Texas, Matt has a deep understanding 
  of the electronic music scene and how to get the audience going. His passion for music started with the early 
  works of UKF, Circus One, and Mau5Trap, falling in love with Flux Pavilion's remix of Gold Dust and 
  Deadmau5's Strobe. Overtime, Matt's music taste has evolved, following more of the works released on Wakaan, 
  Deep Dark and Dangerous, and Deadbeats labels. As a artist, Matt is known for his crowd control abilities, 
  being able to move a crowd as needed. His genre versitility also plays into this, allowing him to engage a 
  diverse audience and prime them for other artists to follow!`,
  aboutItems: [
    {label: 'Location', text: 'Austin, TX', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Genres', text: 'Deep Dubstep, Freeform Bass, House', Icon: MusicNoteIcon},
    {label: 'Labels', text: 'Self Signed', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = []; //TODO: music
export const experience: TimelineItem[] = []; //TODO: photos

/**
 * Skills section
 */
export const skills: SkillGroup[] = []; //TODO: videos

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Honey: After Hours 04',
    description: 'January 21st, 2023 @ The Austin Tunnels',
    url: 'https://youtu.be/4uXdOx_OcRU',
    image: porfolioImage1,
  },
  {
    title: 'Drop It Like It\'s Clozee',
    description: 'Feburary 23rd, 2023',
    url: 'https://on.soundcloud.com/4X5qC',
    image: porfolioImage5,
  },
  {
    title: 'Baked Up: B2B Showcase',
    description: 'March 10th, 2023 @ Gnar Bar',
    url: 'https://www.instagram.com/p/Co-tjRDPGZL/',
    image: porfolioImage6,
  },
  {
    title: 'DEF CON 30: The Afters',
    description: 'August 11th, 2022 @ Def Con 2022',
    url: 'https://soundcloud.com/nghthwk/def-con-30',
    image: porfolioImage2,
  },
  {
    title: 'NGHTHWK: FROM THE NEST',
    description: 'July 18th, 2022 On Twitch',
    url: 'https://youtu.be/w1BEDAofUo0',
    image: porfolioImage3,
  },
  {
    title: 'Sundaze Fundaze',
    description: 'January 29th, 2023 @ Fourth and Co',
    url: 'https://www.instagram.com/p/Cn-Cg0bPTvA/',
    image: porfolioImage4,
  },
  {
    title: 'NGHTHWK: Summer Sessions',
    description: 'June 4th, 2022 @ Lou Neff Point',
    url: 'https://www.instagram.com/p/CeURcLnPgNr/',
    image: porfolioImage7,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Eric Weiser (Honey Music)',
      text: 'Really happy to have had you play, you did such a great job. Looking forward to seeing you keep moving up!',
      //image: hubwarImage,
    },
    {
      name: 'Abel (BakedUp Co-Owner and Artist Manager)',
      text: 'Matttttt, great set BITTTTTCCCHHHHHH!',
    },
    {
      name: 'Katrina-Marie Devayness (Central Florida and Miami Artist Promoter)',
      text: 'Matt, Loved seeing you play at Deadrocks! You legitimately did better then most of the openers for day 2. Can\'t wait to see you play a festival!',
    },
    {
      name: 'Beth (Artist Photographer)',
      text: 'LOVED your set tonight!',
    },
    {
      name: 'Jacoby (Fan)',
      text: 'You had a dope ass set bro, def will be seeing you again😎',
    },
    {
      name: 'Emma (Fan)',
      text: 'Hey I was at your show last night and it was awesome!! definitly the best tunnel show me and my friends have been to!',
    },
    {
      name: 'Luke (Fan)',
      text: 'Yoo your set last night was crazyyy. ⛽',
    },
    {
      name: 'Rew (Fan)',
      text: 'You were the vibe FR bro',
    },
    /*
    {
      name: 'MJ (Merry Jane Music)',
      text: 'I caught your set tonight and just wanted to say you killed it! Vibes were on point!',
    },
    */
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact me on any platform. I tend to respond quickest to Instagram DMs.',
  items: [
    // {
    //   type: ContactType.Email,
    //   text: 'mgmt@nghthwk.net',
    //   href: 'mailto:mgmt@nghthwk.net',
    // },
    {
      type: ContactType.Location,
      text: 'Austin, Texas',
      href: 'https://www.google.com/maps/place/Austin/@30.2672791,-97.7397479,17z',
    },
    {
      type: ContactType.Instagram,
      text: '@nghthwkmusic',
      href: 'https://www.instagram.com/nghthwkmusic/',
    },
    {
      type: ContactType.SoundCloud,
      text: 'nghthwk',
      href: 'https://soundcloud.com/nghthwk',
    },
    {
      type: ContactType.Facebook,
      text: 'nghthwkmusic',
      href: 'https://www.facebook.com/nghthwkmusic/',
    },
    // {
    //   type: ContactType.Github,
    //   text: 'nghthwkmusic',
    //   href: 'https://github.com/nghthwkmusic',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/nghthwkmusic/'},
  {label: 'SoundCloud', Icon: SoundCloudIcon, href: 'https://soundcloud.com/nghthwk'},
  //{label: 'YouTube', Icon: SpotifyIcon, href: 'https://www.youtube.com/@nghthwkmusic'},
  {label: 'Spotify', Icon: SpotifyIcon, href: 'https://open.spotify.com/user/subbassbro'},
  {label: 'Bandcamp', Icon: BandCampIcon, href: 'https://nghthwk.bandcamp.com/'},
  //{label: 'Beatport', Icon: BeatportIcon, href: 'https://www.beatport.com/artist/'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/nghthwkmusic/'},
  //{label: 'Apple Music', Icon: AppleMusicIcon, href: 'https://music.apple.com/fr/artist/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/nghthwkmusic'},
  //{label: "Twitter", Icon: TwitterIcon, href: ''}
];
