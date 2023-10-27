// hero
import heroImage1 from "./assets/hero-section/girl.png";
import heroImage2 from "./assets/hero-section/2.png";
import heroImage3 from "./assets/hero-section/3.png";

//  activity

import activity1 from "./assets/activitylog/1.png";
import activity2 from "./assets/activitylog/2.png";
import activity3 from "./assets/activitylog/3.png";
import activity4 from "./assets/activitylog/4.png";
import activity5 from "./assets/activitylog/5.png";
import activity6 from "./assets/activitylog/6.png";
import activity7 from "./assets/activitylog/7.png";
import activity8 from "./assets/activitylog/8.png";
import activity9 from "./assets/activitylog/9.png";

// articles

import article1 from "./assets/articles/1.png";
import article2 from "./assets/articles/2.png";
import article3 from "./assets/articles/3.png";
import article4 from "./assets/articles/4.png";

// socials-icons
import { ReactComponent as Instagram } from "./assets/social-icons/instagram.svg";
import { ReactComponent as Facbook } from "./assets/social-icons/facebook.svg";
import { ReactComponent as Twitter } from "./assets/social-icons/twitter.svg";
import { ReactComponent as Youtube } from "./assets/social-icons/youtube.svg";

export const pageroutes = {
  home: "/",
  health: "/health",
  about: "/about-us",
  careerAndFinance: "/career-and-finance",
  family: "/family",
  food: "/food",
  wellness: "/wellness",
  sexRealtionShip: "/sex-&-realtionship",
  beauty: "/beauty",
  careers: "/careers",
};

export const homeHeroSection = {
  category: "Career/Finance",
  title: "5 Bonding Ritual for colleagues in the Office Space ",
  description:
    "Did you know that general health in the UK faces several significant challenges and disparities? Despite progress, there are still issues related to healthcare accessibility and affordability.",
  image: heroImage1,
};

export const heroListing = [
  {
    category: "Career/Finance",
    title: "5 Bonding Ritual for colleagues in the Office Space ",
    description:
      "Did you know that general health in the UK faces several significant challenges and disparities? Despite progress, there are still issues related to healthcare accessibility and affordability. ",
    image: heroImage1,
    button: true,
    buttonText: "Read More",
  },
  {
    category: "Lifestyle",
    title: "7 Habit to quit become a Strong Personality",
    image: heroImage2,
    button: false,
    description: "",
    color: "#a0d4a1",
  },
  {
    category: "Relationship",
    title: "Mental Health Matters: Breaking the Stigma and Seeking Help",
    image: heroImage3,
    button: false,
    description: "",
    color: "#FAA19B",
  },
];

export const activityLog = [
  {
    title: "health",
    image: activity1,
  },
  {
    title: "FAMILY",
    image: activity2,
  },
  {
    title: "WELLNESS/FITNESS",
    image: activity3,
  },
  {
    title: "HYGIENE",
    image: activity4,
  },
  {
    title: "BEAUTY/STYLE",
    image: activity5,
  },
  {
    title: "CAREER/FINANCE",
    image: activity6,
  },
  {
    title: "FOOD",
    image: activity7,
  },
  {
    title: "LIFESTYLE",
    image: activity8,
  },
  {
    title: "SEX/RELATIONSHIP",
    image: activity9,
  },
];

export const articles = [
  {
    image: article1,
    title:
      "All the Questions you are scared to ask a sex therapists have been asking",
    category: "Relationships/Friendships",
  },
  {
    image: article2,
    title:
      "All the Questions you are scared to ask a sex therapists have been asking",
    category: "Lifestyle",
  },
  {
    image: article3,
    title:
      "All the Questions you are scared to ask a sex therapists have been asking",
    category: "Lifestyle",
  },
  {
    image: article4,
    title:
      "All the Questions you are scared to ask a sex therapists have been asking",
    category: "Exercise",
  },
];

export const navlinks = [
  {
    title: "home",
    title2: null,
    slug: pageroutes?.home,
    subLinks: null,
  },
  {
    title: "Health",
    title2: "Health",
    slug: pageroutes?.health,
    subLinks: [
      {
        title: "Cold Flu",
        slug: "#",
      },
      {
        title: "Breast Cancer",
        slug: "#",
      },
      ,
      {
        title: "Allergies",
        slug: "#",
      },
      {
        title: "Mental Health",
        slug: "#",
      },
      {
        title: "Rheumatoid Arthritis",
        slug: "#",
      },
      {
        title: "Diabetes",
        slug: "#",
      },
      {
        title: "Vitamins & Supplement",
        slug: "#",
      },
      {
        title: "Pregnancy",
        slug: "#",
      },
    ],
  },

  {
    title: "About us",
    title2: "About us",
    slug: pageroutes.about,
    subLinks: [
      {
        title: "Community",
        slug: "/community",
      },
      {
        title: "Team",
        slug: "#",
      },
      ,
      {
        title: "Mission/Vision",
        slug: "#",
      },
      {
        title: "Legal Services",
        slug: "#",
      },
      {
        title: "Cookies/Privacy",
        slug: "#",
      },
      {
        title: "Terms of Use",
        slug: "#",
      },
      {
        title: "On Call Services",
        slug: "#",
      },
    ],
  },
  {
    title: "Career & finance",
    title2: "Career & finance",
    slug: pageroutes.careerAndFinance,
    subLinks: [
      {
        title: "Life & Workskills",
        slug: "#",
      },
      {
        title: "Job Search",
        slug: "#",
      },
      ,
      {
        title: "Productivity",
        slug: "#",
      },
      {
        title: "Career",
        slug: "#",
      },
      {
        title: "Savings",
        slug: "#",
      },
    ],
  },
  {
    title: "Family",
    title2: "Family",
    slug: pageroutes.family,
    subLinks: [
      {
        title: "Parenting",
        slug: "#",
      },
      {
        title: "Motherhood",
        slug: "#",
      },
      ,
      {
        title: "Parenting News",
        slug: "#",
      },
      {
        title: "Single Parent",
        slug: "#",
      },
      {
        title: "Marriage",
        slug: "#",
      },

      {
        title: "Work/Family Balance",
        slug: "#",
      },
    ],
  },
  {
    title: "Food",
    title2: "Food",
    slug: pageroutes.food,
    subLinks: [
      {
        title: "Latest Recipe",
        slug: "#",
      },
      {
        title: "Cooking Tips/Trends",
        slug: "#",
      },
      ,
      {
        title: "Diet Plans",
        slug: "#",
      },
      {
        title: "Good Restaurants",
        slug: "#",
      },
      {
        title: "Cooking Classses",
        slug: "#",
      },
    ],
  },
  {
    title: "Wellness",
    title2: "Wellness/fitness",
    slug: pageroutes.wellness,
    subLinks: [
      {
        title: "Mind",
        slug: "#",
      },
      {
        title: "Cooking Tips/Trends",
        slug: "#",
      },
      ,
      {
        title: "Sleep",
        slug: "#",
      },
      {
        title: "Exercise",
        slug: "#",
      },
      {
        title: "Self Care",
        slug: "#",
      },
    ],
  },
  {
    title: "sex & relationship",
    title2: "sex & relationship",
    slug: pageroutes.sexRealtionShip,
    subLinks: [
      {
        title: "Sexual Health",
        slug: "#",
      },
      {
        title: "Sex Toys ",
        slug: "#",
      },
      ,
      {
        title: "Dating ",
        slug: "#",
      },
      {
        title: "Dating Communities",
        slug: "#",
      },
    ],
  },
  {
    title: null,
    title2: "lifestyle",
    slug: "/lifestyle",
    subLinks: [
      {
        title: "Horoscope",
        slug: "#",
      },
      {
        title: "Decor & styling",
        slug: "#",
      },
      ,
      {
        title: "Travel ",
        slug: "#",
      },
      {
        title: "Home & Garden",
        slug: "#",
      },
      {
        title: "Cleaning & Organization",
        slug: "#",
      },
    ],
  },
  {
    title: "beauty",
    title2: "beauty and style",

    slug: pageroutes.beauty,
    subLinks: [
      {
        title: "Fashion Accessories",
        slug: "#",
      },
      {
        title: "Capsule Wardrobe ",
        slug: "#",
      },
      ,
      {
        title: "Celebrity Style  ",
        slug: "#",
      },
      {
        title: "Body & Skin care",
        slug: "#",
      },
      {
        title: "Hair Care ",
        slug: "#",
      },
    ],
  },
  {
    title: "careers",
    title2: null,

    slug: pageroutes.careers,
    subLinks: null,
  },
];

export const soicals = [
  {
    title: "instagram",
    Image: Instagram,
  },
  {
    title: "Twitter",
    Image: Twitter,
  },
  {
    title: "Facebook",
    Image: Facbook,
  },
  {
    title: "youtube",
    Image: Youtube,
  },
];
