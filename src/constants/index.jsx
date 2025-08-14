import { Phone, Mail, MapPinCheck, ChevronRight, Section} from "lucide-react";
import esg from "../assets/profile-pictures/esg.png"
import womensInheritanceRights from "../assets/profile-pictures/womensInheritanceRights.png"
import copyrightlaw from "../assets/profile-pictures/copyrightlaw.png"
import logo from "../assets/logo.png"
import investmentsandsecurities from "../assets/profile-pictures/investmentsandsecurities.png"
import lawteam from "../assets/profile-pictures/lawteam.jpg"
import firmoffice from "../assets/profile-pictures/firmoffice.jpg"
import corporate from "../assets//profile-pictures/corporateimg.png"
import dsp from "../assets/profile-pictures/dsp.png"
import acsl from "../assets/profile-pictures/acsl.png"
import privacy from "../assets/profile-pictures/privacy.png"
import iapp from "../assets/profile-pictures/IAPP.png"
import ipmetp from "../assets/profile-pictures/ipmetp.png"
import bnkf from "../assets/profile-pictures/bnkf.png"
import smdlap from "../assets/profile-pictures/smdlap.png"
import ttpp from "../assets/profile-pictures/ttpp.png"
import idrbracrp from "../assets/profile-pictures/idrbracrp.png"

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


export const aboutData = [
  {
    section: "VISION",
    title: "Striving for Excellence",
    description:
      "Delivering exceptional legal solutions that exceed our clients’ expectations and upholding the highest standards of professionalism, integrity, and innovation in all endeavors.",
  },
  {
    section: "MISSION",
    title: "Innovating Legal Solutions",
    description:
      "Provide high-quality legal services with professionalism and efficiency by utilizing a skilled workforce and cutting-edge technology to achieve optimal results for clients.",
  },
  {
    section: "CORE VALUES",
    title: "The Heart of Our Practice",
    description: "We are committed to upholding integrity, trust, confidentiality, professionalism, dynamism, and teamwork in all aspects of our practice.",
  },
]

export const aboutIdentity = [
  {
    section: "Our Identity",
    description: `ALF is a dynamic partnership registered under the laws of the Federal Republic of Nigeria.

Our mission is to establish a world-class, full-service Nigerian law firm distinguished by its premium service. We incorporate a rich blend of traditional legal practice with the dynamism required to satisfy the constantly evolving dynamism of business in our result-driven professional services.

We present our clients with the broadest mix of cognate skills, and depth of expertise drawn from decades of experience in corporate commercial transactions and dispute resolution. Our up-to-date awareness of and participation in local and international commercial developments, which drive corporate commercial transactions enables us to adopt forward-facing approaches to legal issues referred to us.

With a seamless blend of industry-recognised partners, consultants and over 25 Associates operating from three offices spread around the key commercial centres of Lagos, Abuja and Port-Harcourt, Nigeria, our ability to provide value-added legal services to our clients’ sometimes complex needs has seen our reputation in the industry grow considerably.`,
    image: lawteam,
  },
]

export const aboutIdentity2 = [
  {
    description: `The Partners, Consultants and Associates in the Firm bring with them several years of experience at the cutting edge of transactional advisory, dispute resolution and consulting services. They combine outstanding professional skills and pedigree with an abiding commitment to excellence in clients’ service delivery. The firm remains resolute in its focus on constantly seeking ways of improving, not only the services it gives to its clients, but also the business of its clients. Therefore, we constantly encourage lawyers in the firm to be creative and to think outside the box and endeavour to align legal solutions with clients’ commercial objectives.

The Firm has been ranked amongst the best law firms in Nigeria. The 2018 edition of the International Financial Law Review (“IFLR”) 1000 currently recommends the firm in its “Financial and Corporate” category. The firm is also recognised as a “Recommended Law Firm” in the 2014 and 2015 editions of IFLR 1000 and received the 2014 ESQ / Legal Blitz Award for the “Corporate Restructuring Firm of the Year”. The firm was also recognised in the 2013 edition of the IFLR 1000. It was voted as the Business Law Firm of the Year in Nigeria in 2012, by the Corporate International of the United Kingdom.

In 2008, the firm was conferred with the award of “The Finest Capital Market Legal Consulting Firm in Nigeria” at the West African Direct Marketing Awards. The firm has also been recognized as one of the most integrity-driven organizations in Nigeria by major national newspapers, such as The Guardian, Thisday, and Business Day. It has also been acknowledged by the World Bank/ ITF as a notable contributor to their global Doing Business Guide publications for several years.`,
    image: firmoffice,
},
]

export const aboutAwardsAndAccolades = [
  {
    title: "Awards & Accolades",
    section: "IFLR 1000",
    description: [
      {label: "Recommended Firm: Financial and Corporate – 2015"},
      {label: "Recommended Firm: Financial and Corporate – 2016"},
      {label: "Top Tier Firm – 2019"},
      {label: "Recommended Firm 31st Edition & 2022"},
    ],
  },
  {section: "ESQ Nigerian Legal Awards",
    description: [
      {label: "Corporate Restructuring Team of the year – 2014"},
      {label: "Banking & Finance Team of the year – 2014"},
      {label: "Banking and Finance Team of the Year – 2021"},
      {label: "Dispute Resolution Team of the Year – 2021"},
      {label: "Media and Entertainment Team of the Year– 2021"},
    ],
  },
  {
    section: "Global Law Experts",
    description: [
      {label: "Large Tier Energy Law Firm of the year – 2015"},
      {label: "Business Law Firm of the year in Nigeria – 2016"},
    ],
  },
  {
    section: "ITR World Tax",
    description: [
      {label: "Ranked as a Leading Firm in the ITR World Tax 2025 - Firm ranking (Tier Two - Transaction Tax)"},
      {label: "Ranked as a Leading Firm in the ITR World Tax 2024 – Firm ranking (Tier Two – Transaction Tax)"},
    ],
  }
  
]


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

export const practiceAreasTemplate = [
  {
    image: corporate,
    text: "Corporate & Commercial Practice",
    path: "/practice/corporate"
  },
  {
    image: dsp,
    text: "Dispute Resolution Practice",
    path: "/PracticePages/DisputeResolution"
  },
  {
    image: acsl,
    text: "Alliance Corporate Secretaries Limited (ACSL)",
    path: "/PracticePages/Alliance"
  },
  {
    image: privacy,
    text: "Privacy and Data Protection",
    path: "/practice/privacy-data"
  },
  {
    image: iapp,
    text: "Energy, Extractive Industry and Power Practice",
    path: "/practice/energy-extractive"
  },
  {
    image: ipmetp,
    text: "Intellectual Property, Media, Entertainment & Technology Practice",
    path: "/practice/ip-media-tech"
  },
  {
    image: bnkf,
    text: "Banking & Finance",
    path: "/practice/banking-finance"
  },
  {
    image: smdlap,
    text: "Shipping, Maritime & Dredging Legal Advisory Practice",
    path: "/practice/shipping-maritime"
  },
  {
    image: ttpp,
    text: "Tax and Transfer Pricing Practice",
    path: "/practice/tax-transfer"
  },
  {
    image: idrbracrp,
    text: "Insolvency, Debt Recovery, Business Rescue And Corporate Restructuring Practice.",
    path: "/practice/insolvency-restructuring"
  }
];

export const corporateFinanceContent = [
  {
    title: "Corporate Finance",
    description: `Our team in this practice area, led by 4 Partners, offers deep expertise in all types of Corporate Finance transactions owing to its involvement in a number of high-profile transactions involving local, international, and multinational corporates. Consequently, the ALF corporate finance team at the ESQ Nigerian Legal Awards emerged Banking and Finance Team of the Years 2019 and 2021. This practice area focuses on providing legal advisory services on banking, financing and refinancing transactions, infrastructure finance, project finance, and asset finance. Our lawyers have garnered extensive experience in specialist drafting, negotiating, and advising on a whole range of Corporate financing.`,
    text: "SELECTED INDICATIVE EXPERIENCE",
    experiences: [
      {
        description:
          "Advised the funding entity on a $1.95 billion secured financing in connection with the development and production of an oil mining lease under a Financing and Technical Services Agreement.",
      },
      {
        description:
          "Advised a Client on its US $640 Million Senior Secured Medium Term Facility restructuring.",
      },
      {
        description:
          "Advised Emerging Markets Telecommunication Services (“9Mobile”) on its circa USD $400 Million senior secured facility from the Africa Finance Corporation.",
      },
      {
        description:
          "Advised a conglomerate on its US$400 million real estate tower project in Victoria Island, Lagos.",
      },
      {
        description:
          "Advised a Client on its US$250 Million Syndicated Facilities Refinancing.",
      },
      {
        description:
          "Advised an indigenous conglomerate in connection with the negotiation of a US$242 million facility from a Nigerian bank.",
      },
      {
        description:
          "Advised a London-based Bank on a US$225 million facility to a Nigerian borrower for the acquisition of a jack-up rig from Asia.",
      },
      {
        description:
          "Advised a London-based Bank on the lending of US$80 million to an EPC contractor in Nigeria for a pipeline project.",
      },
      {
        description:
          "Acted as legal advisers to a London-based bank in connection with US$40 million finance to Fidelity Bank Plc.",
      },
      {
        description:
          "Acted as legal advisers to Dansa Foods Limited, a subsidiary company of the Dangote Group, in connection with a US$40 million finance facility from African Export-Import Bank.",
      },
      {
        description:
          "Advised Heritage Bank Company Limited in connection with its N3.6 Billion project finance facility for the building of an Independent Power Plant in Nigeria.",
      },
      {
        description:
          "Advised a Delaware-based green energy fund on its $8.5 million bridge facility to a renewable & hybrid energy service provider company in Nigeria.",
      },
      {
        description:
          "Advised a fund established in the Cayman Islands on its proposed investment of up to US$1 million in a company incorporated in Mauritius, which loan is to be utilised by the company’s Nigerian subsidiary.",
      },
    ],
  },
];

// index.jsx
export const disputeResolutionContent = [
  {
    title: "INTRODUCTION",
    text:
      "This practice area focuses on providing legal advisory services to clients on the best, most effective and beneficial methods of resolving commercial disputes and claims using litigation, arbitration and other alternative dispute resolution methods of negotiation, mediation and conciliation at different stages as may be applicable. We provide cost-effective advocacy and attempt to settle disputes amicably, with the goal of reaching an expedient and successful resolution of the issues in contention.",
    resolutions : [
      {
    section: "Admiralty, Energy, Maritime and Extractive Industry",
    cases: [
      "Representing two oil and gas operators in a multi-billion Dollar environmental claim at a Federal High Court in Niger Delta Region.",
      "Advised and represented an oil and gas company in its successful rebuttal of tax liabilities of over US$100 million at the FIRS.",
      "Defended Messrs Linland Refining & Marketing in a maritime claim of US$1 million instituted against it by Messrs Navale Francaise (Owners of MT Tour Pomerol).",
      "Representing an indigenous maritime operator in a matter seeking the judicial interpretation of the Compulsory Pilotage laws and delineation of the port limits in Nigeria.",
      "Acting as Counsel to a major petroleum marketer in a suit filed by Industrial Training Fund (I.T.F.) for the sum of N101.5 million plus interest and orders for declaration and injunction against our client.",
      "Presently defending a corporate entity relating to a claim of N1.5 billion initiated by the Industrial Training Fund (I.T.F)."
    ]
  },
  {
    section: "Arbitration And Alternative Dispute Resolution",
    cases: [
      "Presently representing a Claimant in a USD 350 million ongoing London arbitration against some IOCs.",
      "Acted as a counsel on a London Arbitration involving a claim of USD13 million against one of the top 6 crude oil traders in the world.",
      "A partner of the firm was one of the three–man arbitral panel that successfully conducted arbitral proceedings between the exploration and production subsidiary of a leading indigenous oil and gas company and a major Nigerian commercial Bank in a claim for a total sum of US$12 million plus interest at the rate of 17% per annum from August 2009 till the conclusion of arbitration. The Tribunal’s unanimous award of US$12 million was accepted and honoured by both parties.",
      "Successfully represented a leading oil and gas downstream company on its mediation with a Trade Union Body on a claim of accumulated arrears of revised pensions and gratuity in the approximate sum of N3 billion and secured a 50% reduction of the trade union’s claim.",
      "Representing one of the quoted companies in Nigeria in an arbitration involving a claim of over N1 billion relating to alleged breach of share option scheme.",
      "Partners in the Firm from time to time are appointed as Expert witnesses to international arbitrations."
    ]
  },
  {
    section: "Banking and Finance",
    cases: [
      "Successfully defended a major Nigerian bank in a N29.1 billion suit arising from the private placement of shares in a Financial Institution in Nigeria, and handling the appeals arising out of it.",
      "Representing a Nigerian bank in a suit filed by a telecommunication company claiming the sum of over N4.5 billion in addition to declaratory and injunctive reliefs.",
      "Represented one of the largest indigenous energy group and one of its major directors in an action challenging the directives of the CBN Bankers Committee compelling a Nigerian bank to transfer 911,000 Zain shares to its debtor-customer even though the current holders had prior to the directive purchased the shares for valuable consideration of N375 million since 2004.",
      "Successfully defended a Nigerian bank in a N50 billion class action filed by customers of the bank in connection with unauthorized ATM withdrawals.",
      "Represented a Nigerian Bank successfully at the High Court in an enforcement action filed by a civil construction company in connection with an order to transfer deposits in the sum of N8.993 billion held by it to the Court’s Chief Registrar’s account pending the determination of the substantive suit.",
      "Acted as Counsel for Securities & Exchange Commission (SEC) against two Nigerian banks participating in the merger of six banks that constitute the present-day Enterprise Bank Limited challenging the sale/transfer of 984,714,071 units of shares of Spring Bank Plc valued at about N7.8 billion to entities connected to a named Bank in a controversial hostile take-over bid.",
      "Representing a commercial Bank in various cases involving directors of MTech Communication Plc which have a combined claim of about N2.505 billion against it.",
      "Represented one of the major Nigerian banks and its subsidiary in a suit whereby a party sought a declaration that they are entitled to full allotment of 13 million units of Zenith Bank shares which they applied for at the Bank’s last public offering of shares plus total monetary damages of N233 million.",
      "Represented a group of shareholders of two Banks in two representative actions against the CBN action in removing the executive management of the affected Banks without recourse to the Shareholders of the Banks"
    ]
  },
  {
    section: "Capital Markets",
    cases: [
      "Representing a Nigerian bank in a class action against a Financial Group, their directors, Issuing Houses and Regulators by some investors who bought substantial quantity of shares totaling over N30 billion being the value of 4.3 billion ordinary shares of 50 kobo each at N7 per share offered during the BGL private placement exercise.",
      "Represented the Securities & Exchange Commission (“SEC”) in an action pending at the Investments & Securities Tribunal Lagos involving a claim for refund of payments made for an Initial Public Offer of shares involving a liquidated bank.",
      "Representing the SEC in a post–merger adjustment claim brought by one of the federating banks in a scheme of merger involving six banks at the Federal High Court and the Court of Appeal.",
      "Defending the Security and Exchange Commission in a suit filed by an unauthorized Fund Management Company whose operation was shut down by the Commission."
    ]
  },
  {
    section: "Election Petition Cases",
    cases: [
      "Successfully represented the Independent Electoral Commission (“INEC”) in 18 election petition appeals arising from the 2011 Gubernatorial, State House of Assembly and National Assembly Elections in Ogun and Oyo States from the Election Tribunals up to the final appeal level.",
      "Represented INEC in the Supreme Court pre–election appeal against a governor of a North–Eastern State.",
      "Part of the legal team that successfully defended the President of the Federal Republic of Nigeria at the 2011 Election petition cases at the Court of Appeal and the Supreme Court.",
      "Successfully represented the Independent Electoral Commission (“INEC”) in selected election petition appeals arising from the 2015 Gubernatorial, State House of Assembly and National Assembly Elections in Lagos State from the Election Tribunals up to the final appeal level."
    ]
  },
  {
    section: "Insolvency and Debt Recovery Matters",
    cases: [
      "Recovery of N3.3 Billion debt through a combination of litigation, Administrative Hearing at the Securities and Exchange Commission (SEC) and negotiated settlements for a stockbroking Firm against a Bank over improper treatment of subscription and allotment of shares.",
      "Recovery of N5 Billion through Receivership /Management for a mid-tier commercial Bank from debtors.",
      "Ongoing Winding up proceedings to recover over N4 Billion for a bank.",
      "Recovered trade debt of USD2 Million for an Engineering company through a winding up petition of the creditors.",
      "Judgment through and Undefended List procedure at the Federal High Court to recover the sum of N175 Million against F.C & T Oil Ltd and attachment of bank accounts of the company through garnishee proceedings.",
      "Successfully joined a Creditors Club on behalf of two creditors in the winding up proceedings for Afren with substantial claims at the Federal High Court.",
      "Successfully joined a Creditor winding up petition in a suit to recover substantial debt owed to our clients by BELBOP Limited."
    ]
  }
    ]
  },
  
];


export const capitalMarketsContent = [
  {
    title: "Capital Markets",
    description: `Alliance Law Firm (“ALF”) is a leading commercial law firm with offices located in Lagos, Abuja and Port-Harcourt, with nine partners, over 40 lawyers and a host of support professionals including certified law professionals, managers and accountants, working cohesively to serve ALF’s select clientele which of course over a 20-year practice period has grown to include sector-leading corporations, multinationals, governmental agencies, and international organisations. ALF is a registered capital market law firm with the Securities and Exchange Commission (SEC) with five members of its team also registered with SEC as Sponsored Individuals and compliance officers. The ALF Capital Market Team is made up of 8 lawyers led by the Managing Partner Uche Val Obi, SAN, FCIArb who has been described as a top Lawyer by Chambers and Partners. Similarly, IFLR described Uche as a Leading Lawyer in High Demand. Following the ALF Capital Markets team’s contribution to the development of Capital Markets law in Nigeria, Uche in 2014, for a term of 2 years was elected as the Chairman of the Capital Market Solicitors Association (CMSA) – an umbrella body of over 100 law firms in Nigeria advising on Capital Markets transactions. In addition, Uche together with Albert A. Adu, a partner in the ALF Capital Markets Team participated as member and researcher respectively. As a result, Uche in 2019 was formally recognised by SEC for his contributions to the development of the Nigerian Capital Market.`,
    text: "SELECTED INDICATIVE EXPERIENCE",
    experiences: [
      { description: "Advised a private telecommunications company on a proposed US$55 Million equity investment for infrastructure rollout in Nigeria." },
      { description: "Advised the Federal Government (Debt Management Office) of Nigeria as Solicitor to the Issuer in its Series 3, N150 Billion Sukuk issuance." },
      { description: "Advised the Federal Government (DMO) in its Series 2, N100 Billion Sukuk issuance." },
      { description: "Advised the Federal Government (DMO) in its Series 1, N100 Billion Sukuk issuance." },
      { description: "Advised a Nigerian fund (N100 Billion capitalized) on raising an additional US$500 Million from international investors." },
      { description: "Advised Stanbic IBTC Trustees and Leadway Capital & Trust on Nova Merchant Bank’s N50 Billion Bond and N10 Billion Series 1 Subordinated Bonds due 2027." },
      { description: "Advised as Transaction Counsel on Nova Merchant Bank’s N50 Billion Commercial Paper Programme." },
      { description: "Advised PAC Trustees and Vetiva Trustees on TAK Agro PLC’s N50 Billion Bond Programme and N15 Billion Series 1 Bond." },
      { description: "Advised ARM Trustees, FBN Quest, Stanbic IBTC, and United Capital Trustees on Fidelity Bank’s N41.213 Billion Series 1 Bond Issuance." },
      { description: "Advised Depthwize Energy as Solicitor to the Issuer on N30 Billion Bond Programme and N20 Billion Series 1 Bonds." },
      { description: "Advised Osun State Government in the restructuring of a N30 Billion Vanilla Bond and N11 Billion Sukuk Al-Ijarah." },
      { description: "Acted as legal advisers to Ekiti State Government on a N15 Billion Bond Issuance for infrastructure finance." },
      { description: "Advised Stanbic IBTC Trustees on Eat and Go Limited’s N15 Billion Bond Programme and N11 Million Series 1 Bonds." },
      { description: "Advised the Security Trustee on N13 Billion refinancing of Series 2 residential mortgage-backed securities by Federal Mortgage Bank." },
      { description: "Advised as Transaction Counsel on Guinness Nigeria’s N10 Billion Commercial Paper Programme." },
      { description: "Advised Leadway Assurance on the US$500,000 Loan Notes issued by Green Africa Airways." },
      { description: "Advised a Microfinance Bank on a N200 Million unsecured loan notes issuance." },
      { description: "Advised international investment banks (Credit Suisse, HSBC, Morgan Stanley, ING, Societe Generale, Mitsubishi) on derivatives law in Nigeria." },
      { description: "Advised SEPLAT on its $500 Million USD dual listing on London and Nigerian Stock Exchanges." },
      { description: "Acted for Nestoil Plc on a N45 Billion private placement." },
      { description: "Advised Abia State on the issuance of a N30 Billion fixed rate infrastructure bond." },
      { description: "Advised Transcorp Hotels Plc’s Trustee on its N30 Billion medium term bond and N10 Billion Series 1 bonds." },
      { description: "Advised on the N28 Billion Nigerian Mortgage Refinance Company transaction." },
      { description: "Advised on Niger State’s N25 Billion private bond Tranche 1 & 2 programme." },
      { description: "Advised Infracredit in its guarantee of GPC-SPV’s N20 Billion 10-year Series 1 Bond under a N50 Billion Debt Programme." },
      { description: "Advised Capital Oil on its N6 Billion private placement." },
      { description: "Advised Globe Reinsurance on a N5.1 Billion private placement." },
      { description: "Advised Naturelle Extracts on a N5 Billion bond flotation." },
      { description: "Advised Crusader Insurance Nigeria Plc on its hybrid public offer to raise N3.5 Billion." },
      { description: "Advised PAC Asset Management on collective investment schemes including N500 Million PACAM Fixed Income Fund, $1 Million Eurobond Fund, and N500 Million Money Market Fund." },
      { description: "Advised ACB International Bank Plc on N20 Billion equity raising." },
      { description: "Advised 11 PLC (formerly Mobil Oil Nigeria) on voluntary delisting of over 360 million shares from the Nigerian Stock Exchange." },
      { description: "Advised NOLCHEM on its public offer and privatization sale of 71% equity in 2000." }
    ]
  }
];

export const otherPracticeAreas = [
  {
    title: "Other Practice Areas",
    areas: [
      { name: "Corporate & Commercial Practice" },
      { name: "Energy, Extractive Industry & Power Practice" },
      { name: "Intellectual Property, Media, Entertainment & Technology Practice" },
      { name: "Tax and Transfer Pricing Practice" },
      { name: "Shipping, Maritime Legal Advisory Practice" },
      { name: "Dispute Resolution Practice" },
      { name: "Alliance Corporate Secretaries Limited (ACSL)" },
      { name: "Banking & Finance" },
      { name: "Insolvency Property, Media, Entertainment and Technology Practice" },
      { name: "Privacy & Data Protection" },
    ],
  },
];


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





