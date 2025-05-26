import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { Phone, Mail, MapPinCheck, ChevronRight} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import ESG from "../assets/profile-pictures/ESG.png"
import Copyright from "../assets/profile-pictures/Copyright.png"

export const locations = [
  {label: "Lagos", href: "#"},
  {label: "Port Harcourt", href: "#"},
  {label: "Abuja", href: "#"},
]

export const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Practice Areas", href: "#" },
  { label: "Our Team", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Firm News", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const contacts = [
  { label: "Phone", icon: <Phone />, contact: "+234-9060003017", href: "#" },
  { label: "Email", icon: <Mail />, contact: "info@alliancelawfirm.ng", href: "#" },
  { label: "Address", icon: <MapPinCheck />, contact: "71 Ademola Street, Ikoyi, Lagos", href: "#" },
];


export const trackRecords = [
  {label: "22 YEARS OF", info :"EXCELLENCE"},
  {label: "SEASONED", info: "LAWYERS"},
  {label: "RESULTS", info: "ORIENTED"},
]


export const newsMessages = [
  "Alliance Law Firm Achieves Tier 2 Ranking in ITR World Tax Rankings 2025 — Leading Firm in Transaction Tax",
  "Alliance Law Firm Recognized by Lexology as Legal Influencer for Q2 2024 — Second Consecutive Win",
  "Alliance Law Firm Recognized by Lexology as Legal Influencer in Infrastructure (Africa and Middle East) for Q1 2024",
  "Alliance Law Firm Achieves Tier 2 Ranking in ITR World Tax Rankings 2025 — Leading Firm in Transaction Tax",
  "Alliance Law Firm Recognized by Lexology as Legal Influencer for Q2 2024 — Second Consecutive Win",
  "Alliance Law Firm Recognized by Lexology as Legal Influencer in Infrastructure (Africa and Middle East) for Q1 2024",
];

export const practiceAreas = [
  {
    icon: <ChevronRight />, 
    text:'Alliance Corporate Secretaries Limited (ACSL)',
    href: '#'
  },
  {
    icon: <ChevronRight />,
    text:'Banking & Finance',
    href: '#'
  },
  {
    icon: <ChevronRight />,
    text:'Corporate and Commercial Practice',
    href: '#'
  },
  {
    icon: <ChevronRight />,
    text:'Dispute Resolution Practice',
    href: '#'
  },
  {
    icon: <ChevronRight />,
    text:'Energy, Extractive Industry and Power Practice',
    href: '#'
  },
  {
    icon: <ChevronRight />,
    text:'Intellectual Property, Media, Entertainment and Technology Practice',
    href: '#'
  },
  {
    icon: <ChevronRight />,
    text:'Privacy and Data Protection',
    href: '#'
  },
  {
    icon: <ChevronRight />,
    text:'Shipping, Maritime Legal Advisory Practice Group',
    href: '#'
  },
  {
    icon: <ChevronRight />,
    text:'Tax and Transfer Pricing Practice',
    href: '#'
  },
  {
    icon: <ChevronRight />,
    text:'Insolvency, Debt Recovery, Business Rescue And Corporate Restructuring Practice',
    href: '#'
  },
]


export const explore = [
  {
    image : <ESG />, 
    text : "Environmental, Social, and Governance (ESG) and Data Protection: A Nexus"
  },
  {
    image : <Copyright />,
    text : "Copyright in the Age of Artificial Intelligence (AI): Legal Implications and Emerging Issues"
  },
  {},
  {},
]




export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
