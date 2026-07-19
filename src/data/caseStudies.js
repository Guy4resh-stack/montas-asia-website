/**
 * caseStudies.js — full editorial case-study content for internal case pages.
 * Separate from cases.js (which powers the homepage carousel and card grid)
 * so the long-form narrative data never interferes with carousel logic.
 *
 * This is the first of six planned internal case pages. Add future cases
 * (unisend, mb-trade, morocco-team, rippa, clipstorm) as new keys here and
 * register their routes in App.jsx.
 *
 * IMAGE ASSETS: store approved files under public/cases/supreme-yachts/.
 * Until approved files are added, the UI shows clean labelled placeholders
 * (no broken image containers).
 */

export const caseStudies = {
  'supreme-yachts': {
    slug: 'supreme-yachts',
    caseName: 'Supreme Yachts',
    // ── SEO / metadata ──────────────────────────────────────────────
    seo: {
      title: 'Supreme Yachts Marketing Case Study | Montas Asia',
      description: 'How Montas combined SMM, PR, partnerships and content production to generate 1,500+ qualified leads for an international yacht charter brand.',
      canonicalPath: '/cases/supreme-yachts',
      ogImage: '/cases/supreme-yachts/hero.jpg',
    },

    // ── Hero ────────────────────────────────────────────────────────
    hero: {
      label: 'REAL CASE · LUXURY TRAVEL · INTERNATIONAL',
      h1: 'Supreme Yachts — building an international growth system for a premium yacht charter brand',
      intro: 'Montas combined brand strategy, social media, PR, partnerships and premium content production to build demand for an international yacht charter network across multiple markets.',
      serviceTags: [
        'Marketing strategy', 'Brand identity', 'SMM', 'PR',
        'Influencer marketing', 'Content production', 'Lead generation',
      ],
      image: '/cases/supreme-yachts/hero.jpg',
      imageAlt: 'Supreme Yachts premium international yacht charter campaign',
    },

    // ── Hero proof points ───────────────────────────────────────────
    heroProof: [
      { value: '1,500+',  label: 'qualified charter leads'        },
      { value: 'Up to 2M', label: 'monthly reach'                 },
      { value: '10 countries', label: 'international scaling'      },
      { value: '6',       label: 'strategic European partnerships' },
    ],

    // ── Client overview ─────────────────────────────────────────────
    client: {
      label: 'THE CLIENT',
      heading: 'A global charter brand built around premium travel experiences',
      body: [
        'Supreme Yachts is an international private yacht charter network. The original case materials describe a fleet of more than 150 vessels, ranging from compact yachts to superyachts, with destinations including Dubai, the Adriatic, the French Riviera, Indonesia and other international locations.',
        'The company required more than isolated marketing activities. It needed one connected system capable of strengthening the premium brand, producing consistent content, generating qualified enquiries and supporting expansion across new destinations.',
      ],
      overview: [
        { label: 'Industry',       value: 'Luxury travel and yacht charter' },
        { label: 'Geography',      value: 'International'                    },
        { label: 'Business model', value: 'Private yacht charter'           },
        { label: 'Engagement',     value: 'Integrated marketing'            },
        { label: 'Core objective', value: 'Brand growth and qualified enquiries' },
      ],
    },

    // ── Challenge ───────────────────────────────────────────────────
    challenge: {
      label: 'THE CHALLENGE',
      heading: 'Turning a premium service into a scalable international brand',
      intro: 'The challenge was not simply to post more frequently or produce attractive yacht imagery. Supreme Yachts needed a recognisable international identity and a marketing system capable of turning aspiration into measurable demand.',
      cards: [
        { title: 'Build the function',        text: 'Assemble a social media operation and launch structured brand communication from the ground up.' },
        { title: 'Define the brand',          text: 'Create a consistent premium visual identity that could work across social media, websites, campaigns and offline materials.' },
        { title: 'Generate demand',           text: 'Use content, collaborations and distribution to produce qualified yacht charter enquiries.' },
        { title: 'Support international growth', text: 'Build awareness and trusted partnerships across multiple destinations and European markets.' },
      ],
    },

    // ── Approach / pillars ──────────────────────────────────────────
    approach: {
      label: 'THE APPROACH',
      heading: 'One connected system across brand, content, distribution and partnerships',
      intro: 'Instead of treating SMM, PR and production as separate services, the programme connected them around one objective: create a premium international presence and turn that presence into qualified demand.',
      pillars: [
        'Brand and content system',
        'Social media and lead generation',
        'PR and partnerships',
        'Premium production',
      ],
    },

    // ── Brand & content system ──────────────────────────────────────
    brand: {
      heading: 'A visual identity designed for a premium international audience',
      body: [
        'Montas developed a unified visual direction for the brand\u2019s digital communication, including graphic principles, typography, colour treatment and adaptable content formats.',
        'The system gave Supreme Yachts a consistent presence across social media, campaign materials and other customer touchpoints while preserving the emotional qualities associated with luxury yachting: freedom, privacy, comfort and travel.',
      ],
      deliverables: [
        'Premium visual direction',
        'Social media identity',
        'Adaptable content templates',
        'Structured content planning',
        'Consistent communication across digital channels',
      ],
    },

    // ── SMM ─────────────────────────────────────────────────────────
    smm: {
      label: 'SMM',
      heading: 'From a standing start to an international social presence',
      body: [
        'Montas assembled the SMM function, structured the channels and created a consistent content strategy. Regular publishing, campaign content and collaboration formats gave the brand a continuous presence rather than a series of disconnected posts.',
        'Social media was also treated as a lead-generation channel. The wider integrated programme generated more than 1,500 qualified charter leads, with 200 leads attributed directly to social media.',
      ],
      proof: [
        { value: '200',      label: 'leads directly from social media' },
        { value: 'Up to 2M', label: 'monthly reach'                    },
        { value: '10+',      label: 'collaborations with major influencers' },
        { value: '10 countries', label: 'in the reported scaling footprint' },
      ],
    },

    // ── PR & partnerships ───────────────────────────────────────────
    pr: {
      label: 'PR & PARTNERSHIPS',
      heading: 'Building trust through people, networks and premium-market partnerships',
      body: [
        'To extend the brand beyond its owned channels, Montas organised collaborations with influencers and public figures and developed relationships with European event and travel agencies.',
        'These partnerships expanded the brand\u2019s visibility among relevant premium audiences and helped establish a stronger international market presence. The programme strengthened the brand\u2019s position in the UAE luxury market.',
      ],
      proof: [
        { value: '6',          label: 'strategic partnerships in Europe' },
        { value: 'Up to 1.5M', label: 'PR reach'                         },
        { value: '10+',        label: 'influencer and media collaborations' },
        { value: 'Event & travel', label: 'agency partnerships'          },
      ],
    },

    // ── Production ──────────────────────────────────────────────────
    production: {
      label: 'PRODUCTION',
      heading: 'Creating the visual language of freedom, privacy and premium travel',
      body: [
        'The production work translated the Supreme Yachts positioning into photography and video. The creative direction focused on yachts, lifestyle moments, interior details and the wider experience of private travel.',
        'The resulting assets were adapted for websites, social media, advertising campaigns and offline communication, giving the brand a coherent visual library rather than isolated campaign images.',
      ],
      scope: [
        'Visual concept development',
        'Reference and creative-direction preparation',
        'Photo and video production with a production partner',
        'Lifestyle and yacht imagery',
        'Interior and detail shots',
        'Travel-experience storytelling',
        'Adaptations for digital and offline formats',
      ],
      gallery: [
        { src: '/cases/supreme-yachts/production-01.jpg', alt: 'Supreme Yachts lifestyle production still' },
        { src: '/cases/supreme-yachts/production-02.jpg', alt: 'Supreme Yachts yacht photography' },
        { src: '/cases/supreme-yachts/social-01.jpg',     alt: 'Supreme Yachts social media content composition', portrait: true },
        { src: '/cases/supreme-yachts/pr-01.jpg',         alt: 'Supreme Yachts PR and partnership visual', portrait: true },
        { src: '/cases/supreme-yachts/gallery-01.jpg',    alt: 'Supreme Yachts premium travel imagery' },
        { src: '/cases/supreme-yachts/gallery-02.jpg',    alt: 'Supreme Yachts interior and detail photography' },
      ],
    },

    // ── Results ─────────────────────────────────────────────────────
    results: {
      label: 'THE RESULTS',
      heading: 'A premium brand system connected to measurable international growth',
      main: [
        { value: '1,500+ qualified leads', text: 'Generated across the combined PR, SMM and content-production programme.' },
        { value: 'Up to 2M monthly reach', text: 'Reported peak monthly reach across the social media programme.' },
        { value: '10-country scaling',     text: 'The brand expanded its reported marketing footprint across ten countries.' },
        { value: '6 European partnerships', text: 'Strategic relationships established with event and travel agencies.' },
      ],
      supporting: [
        '200 social-media leads',
        '10+ influencer collaborations',
        'Up to 1.5M PR reach',
        '150+ yachts described in the original client profile',
      ],
    },

    // ── Metrics pending verification (NEVER rendered) ───────────────
    pendingVerification: [
      { metric: '+56%',  label: 'conversion increase',            published: false },
      { metric: '+145%', label: 'average order value increase',   published: false },
    ],

    // ── Impact narrative ────────────────────────────────────────────
    impact: {
      heading: 'From fragmented activity to an international growth system',
      body: [
        'The strongest outcome was not a single post, partnership or production day. Supreme Yachts gained a connected system in which brand identity, premium content, social distribution and trusted partnerships supported the same commercial objective.',
        'This allowed the company to communicate consistently across markets while building a repeatable foundation for awareness, enquiries and international expansion.',
      ],
    },

    // ── SEA relevance ───────────────────────────────────────────────
    sea: {
      label: 'TRANSFERABLE TO SEA',
      heading: 'What this project demonstrates for premium brands in Southeast Asia',
      intro: 'Luxury travel markets are shaped by destination-specific behaviour, visual trust and networks of local partners. The Supreme Yachts project demonstrates how premium production, social distribution, partnerships and lead generation can operate as one system across multiple markets.',
      principles: [
        { title: 'Local relevance, global consistency', text: 'Adapt communication to each destination without weakening the central brand.' },
        { title: 'Trust before enquiry',                text: 'Use premium visuals, credible partners and clear proof to reduce hesitation.' },
        { title: 'Connected execution',                 text: 'Align production, PR, social media and lead generation around the same commercial journey.' },
      ],
    },

    // ── Testimonial (omitted until approved English wording exists) ──
    testimonial: null,

    // ── Services used ───────────────────────────────────────────────
    services: [
      { label: 'Marketing strategy',      to: null },
      { label: 'Brand positioning',       to: null },
      { label: 'Social media strategy',   to: '/services/smm-content-systems' },
      { label: 'Social media management', to: '/services/smm-content-systems' },
      { label: 'Influencer collaborations', to: null },
      { label: 'PR and partnerships',     to: null },
      { label: 'Photo production',        to: '/services/ai-assisted-production' },
      { label: 'Video production',        to: '/services/ai-assisted-production' },
      { label: 'Content adaptation',      to: null },
      { label: 'Lead generation',         to: '/services/paid-advertising-lead-gen' },
    ],

    // ── Original source materials ───────────────────────────────────
    sources: [
      { label: 'Integrated marketing', url: 'https://montas.io/cases/supreme-yachts-marketing' },
      { label: 'Social media',         url: 'https://montas.io/cases/supreme-yachts-smm' },
      { label: 'PR and partnerships',  url: 'https://montas.io/cases/supreme-yachts-pr' },
      { label: 'Content production',   url: 'https://montas.io/cases/supreme-yachts-production' },
    ],

    // ── Final CTA ───────────────────────────────────────────────────
    finalCta: {
      heading: 'Planning to grow a premium travel or lifestyle brand in Southeast Asia?',
      body: 'Build a market-entry and demand-generation system around your brand, audience and commercial goals.',
    },
  },

  'unisend': {
    slug: 'unisend',
    caseName: 'Unisend.me',
    seo: {
      title: 'Unisend.me Fintech Marketing Case Study | Montas Asia',
      description:
        'How Montas used research, SMM, content and Telegram acquisition to build 5,255 organic subscribers and 25% subscriber-to-client conversion for Unisend.me.',
      canonicalPath: '/cases/unisend',
      ogImage: '/cases/unisend/hero.jpg',
    },
    hero: {
      label: 'REAL CASE · FINTECH · CROSS-BORDER PAYMENTS',
      h1: 'Unisend.me — building trust and demand for a new cross-border payment service',
      intro:
        'Montas combined audience research, personalised social communication, content production and paid acquisition to help a new international transfer service earn trust and attract its first customers.',
      serviceTags: [
        'Audience research', 'Customer journey mapping', 'SMM strategy',
        'Content strategy', 'Visual identity', 'Video production',
        'Telegram Ads', 'B2B landing page',
      ],
      image: '/cases/unisend-cover.jpg',
      imageContain: true,
      imageAlt: 'Unisend.me cross-border transfer service marketing case',
      secondaryCta: { label: 'Visit live service ↗', url: 'https://unisend.me/' },
    },
    heroProof: [
      { value: '5,255', label: 'organic subscribers in six months' },
      { value: '25%', label: 'subscriber-to-client conversion' },
      { value: '$120K', label: 'transfer turnover reached by month six' },
      { value: '$2', label: 'average Telegram Ads subscriber cost' },
    ],
    client: {
      label: 'THE CLIENT',
      heading: 'A cross-border transfer service entering a trust-sensitive market',
      body: [
        'Unisend.me was introduced as a service for card-to-card transfers between Russia, Turkey, Kazakhstan, Georgia and Armenia. The historical project also included a business direction for accepting payments in Turkey.',
        'For a new financial service, technical availability alone was not enough. Customers needed to understand the product, recognise the people behind it and feel confident using it for real transactions.',
      ],
      overview: [
        { term: 'Industry', value: 'Fintech and cross-border payments' },
        { term: 'Historical markets', value: 'Russia, Turkey, Kazakhstan, Georgia and Armenia' },
        { term: 'Audiences', value: 'Individuals and businesses' },
        { term: 'Core channels', value: 'Telegram and VK' },
        { term: 'Engagement', value: 'Research, SMM, content and acquisition' },
        { term: 'Core objective', value: 'Trust and early customer growth' },
      ],
    },
    challenge: {
      label: 'THE CHALLENGE',
      heading: 'Trust had to be built before growth could begin',
      intro:
        'A new financial product asks users to take a meaningful risk: transfer real money through a service they may not yet recognise. Conventional anonymous advertising could attract attention, but it could not provide the level of trust required to convert that attention into active customers.',
      cards: [
        { title: 'Earn initial trust', text: 'Explain the service clearly and create a visible, responsive brand presence for a new audience.' },
        { title: 'Acquire the first customers', text: 'Turn early social attention into real product usage rather than passive subscriber growth.' },
        { title: 'Create a distinctive identity', text: 'Build a recognisable visual language and tone of voice in a category that often feels impersonal.' },
        { title: 'Control acquisition costs', text: 'Develop a growth system that could attract users without relying on unsustainable spending. The original project set a target of acquiring a customer for no more than $5.' },
      ],
    },
    approach: {
      label: 'THE APPROACH',
      heading: 'Personal communication instead of anonymous financial advertising',
      intro:
        'The strategy treated communication as part of the product experience. Instead of relying only on promotional messages, Montas built a visible and approachable brand presence capable of explaining the service, answering practical questions and staying in continuous contact with users.',
      pillars: [
        'Audience and journey research',
        'Brand personality and visual system',
        'Social content and community communication',
        'Acquisition and product landing pages',
      ],
    },
    brand: {
      heading: 'Making a financial service feel recognisable and human',
      body: [
        'Montas developed a dedicated visual style for the social channels and introduced a branded mascot. This gave the service a recognisable character and helped make complex or unfamiliar financial topics easier to communicate.',
        'The tone of voice was designed around openness, clarity and regular contact rather than distant institutional language.',
      ],
      deliverables: [
        'Social media visual identity', 'Branded mascot', 'Content templates',
        'Consistent colour and graphic treatment', 'Channel-specific visual formats', 'Defined tone of voice',
      ],
    },
    smm: {
      label: 'TELEGRAM',
      heading: 'Six months of consistent communication and audience growth',
      body: [
        'Telegram became the central channel for continuous communication. Montas managed the channel according to the agreed strategy for six months, combining brand content, practical explanations and regular audience contact.',
        'The result was not only subscriber growth. The channel became part of the route from product awareness to customer conversion.',
      ],
      proof: [
        { value: '5,255', label: 'organic subscribers in six months' },
        { value: '25%', label: 'subscriber-to-client conversion' },
        { value: '650–1,000', label: 'new users per month from month two' },
        { value: '$2', label: 'average Telegram Ads subscriber cost' },
      ],
    },
    pr: {
      label: 'CONTENT PRODUCTION',
      heading: 'Explaining the product through useful and locally produced content',
      body: [
        'Montas developed video concepts and organised production in Turkey and Russia. The content connected practical transfer scenarios with a more personal view of the service and the people behind it.',
        'This gave the Telegram and VK channels a repeatable content base rather than relying on isolated announcements or generic promotional posts.',
      ],
      proof: [
        { value: 'Telegram + VK', label: 'content strategy' },
        { value: 'Turkey + Russia', label: 'video production' },
        { value: 'Mascot', label: 'branded content character' },
        { value: 'B2B', label: 'landing page for Turkey payments' },
      ],
    },
    production: {
      label: 'PAID ACQUISITION',
      heading: 'Testing paid growth without losing cost discipline',
      body: [
        'Alongside organic channel development, Montas launched Telegram Ads to test scalable subscriber acquisition. The reported average cost was $2 per acquired subscriber — a subscriber cost, not a customer acquisition cost.',
        'The project also included a dedicated B2B landing page focused on payment acceptance in Turkey, giving the service a separate commercial proposition rather than forcing individual and business audiences through the same journey.',
      ],
      scope: [
        'Customer Journey Mapping and Jobs to Be Done research',
        'SMM strategy for Telegram and VK',
        'Video concepts and scripts',
        'Production organised in Turkey and Russia',
        'Telegram Ads campaign',
        'B2B acquiring landing page for the Turkey direction',
      ],
      gallery: [
        { src: '/cases/unisend/mascot-blue.jpg', alt: 'Unisend.me branded mascot — cross-border transfer character', contain: true },
        { src: '/cases/unisend/mascot-purple.jpg', alt: 'Unisend.me branded mascot — alternate expression', contain: true },
      ],
    },
    results: {
      label: 'THE RESULTS',
      heading: 'From an unfamiliar service to a repeatable customer-growth channel',
      main: [
        { value: '5,255 organic subscribers', text: 'Audience built during six months of consistent Telegram communication.' },
        { value: '25% subscriber-to-client conversion', text: 'Reported conversion from the social audience into product customers.' },
        { value: '$120K transfer turnover', text: 'Reported transfer turnover reached by the sixth month of work.' },
        { value: '$2 Telegram Ads subscriber cost', text: 'Average cost of acquiring a subscriber through the paid Telegram campaign.' },
      ],
      supporting: [
        '650–1,000 new users per month from month two',
        '6 months of Telegram management',
        'Video production in Turkey and Russia',
        'B2B landing page for the Turkey payments direction',
      ],
    },
    impact: {
      heading: 'Trust became part of the acquisition system',
      body: [
        'The project demonstrates that growth in financial services is not created by media buying alone. Research, clear explanations, recognisable visual communication and continuous audience contact reduced the distance between an unfamiliar product and its first active customers.',
        'By connecting organic community growth, content production, paid acquisition and a separate B2B proposition, Unisend.me gained a more complete route from first awareness to product use.',
      ],
    },
    sea: {
      label: 'TRANSFERABLE TO SEA',
      heading: 'What this project demonstrates for fintech growth in Southeast Asia',
      intro:
        'Cross-border financial products often operate in markets where users move between currencies, countries, banks and payment habits. Product understanding and trust therefore become part of the acquisition challenge.',
      principles: [
        { title: 'Explain before promoting', text: 'Make the product journey understandable before asking users to complete a financial action.' },
        { title: 'Humanise the service', text: 'Use visible communication, consistent support and recognisable brand assets to reduce distance.' },
        { title: 'Connect community and conversion', text: 'Treat social channels as part of the customer journey rather than only as distribution.' },
      ],
    },
    testimonial: {
      quote: 'Our challenge was to earn audience trust in a completely new financial service while attracting the first customers quickly. Montas proposed an unconventional social media strategy that delivered a stable flow of users and helped strengthen the brand’s market position.',
      attribution: 'Unisend.me team',
    },
    services: [
      { label: 'Customer research', to: null },
      { label: 'Customer Journey Mapping', to: null },
      { label: 'Jobs to Be Done', to: null },
      { label: 'SMM strategy', to: '/services/smm-content-systems' },
      { label: 'Content strategy', to: '/services/smm-content-systems' },
      { label: 'Telegram management', to: null },
      { label: 'VK communication', to: null },
      { label: 'Visual identity', to: null },
      { label: 'Mascot development', to: null },
      { label: 'Video production', to: null },
      { label: 'Telegram Ads', to: '/services/paid-advertising-lead-gen' },
      { label: 'Landing-page development', to: '/services/landing-pages-websites' },
    ],
    sources: [
      { label: 'Original Montas case', url: 'https://montas.io/cases/unisend' },
      { label: 'Visit Unisend.me', url: 'https://unisend.me/' },
      { label: 'Current transfer flow', url: 'https://unisend.me/order/new' },
      { label: 'Current business direction', url: 'https://unisend.me/acquiring' },
    ],
    finalCta: {
      heading: 'Launching or scaling a fintech product in Southeast Asia?',
      body: 'Build a growth system that connects research, product communication, content and measurable acquisition.',
    },
  },

  'mb-trade': {
    slug: 'mb-trade',
    caseName: 'MB TRADE',
    seo: {
      title: 'MB TRADE B2B Logistics Marketing Case Study | Montas Asia',
      description:
        'How Montas connected a B2B logistics website, Bitrix24 CRM, paid acquisition and call-centre sales to achieve 23% cold-call conversion and 3.3× average deal value.',
      canonicalPath: '/cases/mb-trade',
      ogImage: '/cases/mb-trade/hero.jpg',
    },
    // Four distributed primary image positions (not a gallery)
    images: {
      hero:          { src: '/cases/mb-trade/hero.jpg',           alt: 'MB TRADE China logistics and container shipping operation' },
      operations:    { src: '/cases/mb-trade/operations.jpg',     alt: 'Cargo preparation and logistics operations for MB TRADE in China', cropBottom: true },
      digitalSystem: { src: '/cases/mb-trade/digital-system.jpg', alt: 'MB TRADE website and integrated B2B lead-generation system' },
      results:       { src: '/cases/mb-trade/results.jpg',        alt: 'MB TRADE logistics team coordinating a B2B shipment from China', cropBottom: true },
    },
    hero: {
      label: 'REAL CASE · B2B LOGISTICS · CHINA',
      h1: 'MB TRADE — connecting marketing, sales and operations for a China logistics company',
      intro:
        'Montas built an integrated growth system for a B2B logistics company, connecting customer research, a conversion-focused website, Bitrix24 CRM, paid acquisition, Telegram and call-centre sales.',
      serviceTags: [
        'Customer research', 'Marketing strategy', 'UX/UI design', 'Website development',
        'CRM integration', 'SMM', 'Paid acquisition', 'Call-centre sales', 'Conversion optimisation',
      ],
      image: '/cases/mb-trade/hero.jpg',
      imageAlt: 'MB TRADE China logistics and container shipping operation',
      secondaryCta: { label: 'Visit live website ↗', url: 'https://mbtrade.pro/' },
    },
    heroProof: [
      { value: '23%', label: 'cold-call conversion' },
      { value: '−30%', label: 'cost per lead' },
      { value: '₽300K → ₽1M', label: 'average deal value' },
      { value: '+15%', label: 'monthly Telegram audience growth' },
    ],
    client: {
      label: 'THE CLIENT',
      heading: 'A B2B partner for sourcing, importing and delivering goods from China',
      body: [
        'MB TRADE provides logistics and foreign-trade support for businesses working with China. Its service model covers the route from supplier sourcing and product checks to payments, customs clearance, international delivery and final warehouse fulfilment.',
        'The company works across a complex customer journey involving procurement teams, suppliers, logistics partners, customs processes and sales departments. This made the project broader than a conventional website or advertising engagement.',
      ],
      overview: [
        { term: 'Industry', value: 'B2B logistics and foreign trade' },
        { term: 'Core market', value: 'China–Russia trade' },
        { term: 'Customer type', value: 'Business clients' },
        { term: 'Business model', value: 'Logistics and foreign-trade outsourcing' },
        { term: 'Historical engagement', value: 'Integrated marketing and sales' },
        { term: 'Core objective', value: 'More qualified leads and higher-value deals' },
      ],
    },
    // Current business context (MB TRADE website claims — not Montas results)
    businessContext: {
      label: 'THE BUSINESS TODAY',
      heading: 'A full-cycle service across sourcing, payments, customs and delivery',
      intro: 'The current MB TRADE website presents services spanning supplier sourcing, product checks, sample delivery, individual and consolidated cargo, container shipping, international supplier payments, product labelling in China, customs clearance, delivery to client or marketplace warehouses, and Moscow fulfilment operations.',
      claims: [
        { value: '1,300+', label: 'verified suppliers stated on the current website' },
        { value: '300+', label: 'containers stated as delivered in 2025' },
        { value: '4 locations', label: 'Moscow, Saint Petersburg, Yiwu and Guangzhou' },
      ],
      note: 'These are current MB TRADE website claims, not Montas marketing results. The company and its service offering may have evolved since the original Montas engagement.',
    },
    challenge: {
      label: 'THE CHALLENGE',
      heading: 'A complex logistics service needed one connected commercial system',
      intro:
        'MB TRADE did not need a standalone advertising campaign. The company needed marketing, sales and internal processes to operate as one system — from the first audience touchpoint to a qualified conversation and a high-value logistics contract.',
      cards: [
        { title: 'Clarify the offer', text: 'Translate a complex set of logistics and foreign-trade services into a clear B2B proposition.' },
        { title: 'Build a premium digital presence', text: 'Create a website capable of communicating expertise, scale and operational reliability.' },
        { title: 'Connect marketing and sales', text: 'Ensure leads could move from advertising and content into CRM and structured follow-up.' },
        { title: 'Generate qualified conversations', text: 'Build outbound and inbound processes capable of reaching relevant business decision-makers.' },
        { title: 'Increase commercial value', text: 'Improve conversion while attracting larger clients and increasing average deal value.' },
      ],
    },
    approach: {
      label: 'THE APPROACH',
      heading: 'From first contact to commercial conversation',
      intro:
        'Instead of treating each channel independently, the programme connected seven stages into one commercial system: research, positioning, website, acquisition, CRM, call centre and sales.',
      pillars: [
        'Research — CJM and JTBD foundation',
        'Positioning and marketing strategy',
        'Premium B2B website',
        'Acquisition — Yandex Direct and Telegram',
        'Bitrix24 CRM integration',
        'Call-centre operations',
        'Sales and higher deal value',
      ],
    },
    brand: {
      heading: 'A premium B2B website designed to make complexity understandable',
      body: [
        'Montas designed the UX/UI and implemented the website on Tilda. The digital experience organised a complex service offer into a clearer commercial journey and gave prospects structured paths towards consultation and enquiry.',
        'The project also included SEO and conversion optimisation intended to improve discoverability and the effectiveness of the website as a lead-generation asset. Business processes were then integrated into Bitrix24, creating a shared operational layer between advertising, website enquiries, incoming requests, outbound calls and the sales team.',
      ],
      deliverables: [
        'UX/UI design', 'Premium visual direction', 'Website implementation on Tilda',
        'Enquiry pathways', 'SEO work', 'Conversion optimisation',
        'Bitrix24 business-process integration', 'Connection with sales processes',
      ],
    },
    smm: {
      label: 'CALL CENTRE',
      heading: 'Creating qualified B2B conversations at scale',
      body: [
        'Montas organised call-centre processes for both cold outreach and incoming leads. This gave MB TRADE a structured way to approach potential customers, qualify their needs and move relevant opportunities into the commercial pipeline.',
        'The programme attracted clients with annual turnover above ₽100 million — a figure that refers to the turnover of the attracted client companies, not revenue generated by the project.',
      ],
      proof: [
        { value: '23%', label: 'cold-call conversion' },
        { value: '₽100M+', label: 'annual turnover of attracted clients' },
        { value: 'Outbound', label: 'and inbound call qualification' },
        { value: 'Bitrix24', label: 'connected to every lead' },
      ],
    },
    pr: {
      label: 'ACQUISITION',
      heading: 'Combining paid demand generation with expert content',
      body: [
        'Montas launched campaigns in Yandex Direct and Telegram while developing the company’s social communication. Paid acquisition generated enquiries, while Telegram supported continuous expert contact with an audience interested in sourcing, logistics and trade with China.',
        'The cost-per-lead reduction is attributed to the broader acquisition and optimisation programme rather than a single ad channel. Monthly traffic and lead growth was reported qualitatively.',
      ],
      proof: [
        { value: '−30%', label: 'cost per lead' },
        { value: '+15%', label: 'monthly Telegram audience growth' },
        { value: 'Yandex Direct', label: 'paid search demand' },
        { value: 'Telegram', label: 'expert content channel' },
      ],
    },
    production: {
      label: 'COMMERCIAL IMPACT',
      heading: 'Moving from smaller transactions towards higher-value B2B contracts',
      body: [
        'The reported average deal value increased from ₽300,000 to ₽1,000,000 — approximately 3.3× the original average — as the integrated marketing and sales system began attracting and converting larger business opportunities.',
        'Marketing, research, website, CRM and call-centre operations worked as one connected commercial system rather than isolated services.',
      ],
      scope: [
        'Customer Journey Mapping and Jobs to Be Done',
        'Integrated marketing and SMM strategy',
        'Tilda website with SEO and conversion optimisation',
        'Bitrix24 CRM integration',
        'Yandex Direct and Telegram acquisition',
        'Outbound and inbound call-centre operations',
      ],
      gallery: [],
    },
    results: {
      label: 'THE RESULTS',
      heading: 'A connected system that improved acquisition, conversion and deal value',
      main: [
        { value: '23% cold-call conversion', text: 'Reported conversion from the outbound call-centre programme.' },
        { value: '−30% cost per lead', text: 'Reduction reported across the acquisition and optimisation programme.' },
        { value: '₽300K → ₽1M average deal value', text: 'Average deal value increased approximately 3.3×.' },
        { value: '+15% monthly Telegram growth', text: 'Reported monthly audience growth in the Telegram channel.' },
      ],
      supporting: [
        'Clients with ₽100M+ annual turnover attracted',
        'Monthly traffic and lead growth reported',
        'Premium website launched',
        'Bitrix24 business processes integrated',
        'Call-centre operation established',
        'Yandex Direct and Telegram campaigns launched',
      ],
    },
    impact: {
      heading: 'Marketing became part of the operating system',
      body: [
        'The strongest result was not one channel or one campaign. MB TRADE gained a connected commercial system in which research shaped the offer, the website created demand, CRM organised opportunities and the call centre moved qualified prospects towards a sale.',
        'This connection helped the company attract larger business clients, reduce lead costs and increase the commercial value of each opportunity.',
      ],
    },
    sea: {
      label: 'TRANSFERABLE TO SEA',
      heading: 'What this project demonstrates for cross-border B2B growth in Southeast Asia',
      intro:
        'Companies operating across China and Southeast Asia often manage long sales cycles, multiple decision-makers and complex service delivery. Marketing therefore needs to connect directly with sales and operational processes.',
      principles: [
        { title: 'Explain complex services clearly', text: 'Turn technical logistics processes into an understandable commercial proposition.' },
        { title: 'Connect every lead', text: 'Ensure website, advertising, CRM and sales teams share one journey.' },
        { title: 'Optimise for commercial quality', text: 'Measure not only lead volume, but conversion and deal value.' },
      ],
    },
    testimonial: {
      quote: 'Working with the Montas team allowed us to automate and connect our sales and marketing processes. The result exceeded our expectations.',
      attribution: 'MB TRADE team',
    },
    services: [
      { label: 'Customer research', to: null },
      { label: 'Customer Journey Mapping', to: null },
      { label: 'Jobs to Be Done', to: null },
      { label: 'Marketing strategy', to: null },
      { label: 'SMM strategy', to: '/services/smm-content-systems' },
      { label: 'UX/UI design', to: '/services/landing-pages-websites' },
      { label: 'Tilda development', to: '/services/landing-pages-websites' },
      { label: 'SEO', to: '/services/seo-local-search' },
      { label: 'Conversion optimisation', to: null },
      { label: 'Bitrix24 integration', to: null },
      { label: 'Yandex Direct', to: '/services/paid-advertising-lead-gen' },
      { label: 'Telegram acquisition', to: '/services/paid-advertising-lead-gen' },
      { label: 'Call-centre operations', to: null },
      { label: 'Lead generation', to: '/services/paid-advertising-lead-gen' },
      { label: 'Sales-process development', to: null },
    ],
    sourcesHeading: 'Project and company sources',
    sources: [
      { label: 'Original Montas case', url: 'https://montas.io/cases/mb-trade-multimodal-container-shipping' },
      { label: 'Visit MB TRADE', url: 'https://mbtrade.pro/' },
    ],
    finalCta: {
      heading: 'Need to connect B2B marketing, CRM and sales across Asian markets?',
      body: 'Build a growth system around your customer journey, commercial process and operational reality.',
    },
  },
};

export const getCaseStudy = (slug) => caseStudies[slug] || null;
