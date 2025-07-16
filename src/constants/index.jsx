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
import esg from "../assets/profile-pictures/esg.png"
import womensInheritanceRights from "../assets/profile-pictures/womensInheritanceRights.png"
import copyrightlaw from "../assets/profile-pictures/copyrightlaw.png"
import logo from "../assets/logo.png"
import investmentsandsecurities from "../assets/profile-pictures/investmentsandsecurities.png"


export const locations = [
  {label: "Lagos", href: "#"},
  {label: "Port Harcourt", href: "#"},
  {label: "Abuja", href: "#"},
]

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Practice Areas", path: "/practice" },
  { label: "Our Team", path: "/team" },
  { label: "Insights", path: "/insights" },
  { label: "Firm News", path: "/news" },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
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
    image :esg, 
    text : "Environmental, Social, and Governance (ESG) and Data Protection: A Nexus",
    href : "#"
  },
  {
    image : copyrightlaw,
    text : "Copyright in the Age of Artificial Intelligence (AI): Legal Implications and Emerging Issues",
    href : "#"
  },
  {
    image : investmentsandsecurities,
    text : "Major Highlights of the Investments and Securities Act, 2025: A New Dawn for Nigeria's Capital Market",
    href : "#"
  },
  {
    image : womensInheritanceRights,
    text : "Women's Inheritance Rights Under the Constitution: The Case of Ukeje V. Ukeje and Matters Arising",
    href : "#"
  },
]

export const foothead = [
  {
    logo : logo, 
    head : "ALLIANCE LAW FIRM",
    text : "We are a full-service law firm with a depth of proven experience and expertise in diverse areas of the law."
  }
]


export const intouch = [
  {
    label: 'Head Office:', 
    address : "Alliance House, 71 Ademola Street, SW Ikoyi, Lagos, Nigeria",
    contact : "phone :", 
    number : "+234-9060003017",
    href: "#"
  }
]
