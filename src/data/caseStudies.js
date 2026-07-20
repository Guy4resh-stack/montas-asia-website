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
      imageFill: true,
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

  'morocco-team': {
    slug: 'morocco-team',
    caseName: 'Morocco Team',
    seo: {
      title: 'Morocco Team Travel SMM Case Study | Montas Asia',
      description:
        'How Montas doubled social reach, generated 63 leads in one month and supported two tour sales for a bespoke Morocco travel brand.',
      canonicalPath: '/cases/morocco-team',
      ogImage: '/cases/morocco-team/hero.jpg',
    },
    hero: {
      label: 'REAL CASE · SMM · BESPOKE TRAVEL',
      h1: 'Morocco Team — turning consistent social content into tour enquiries',
      intro:
        'Montas restarted regular social communication for a bespoke Morocco tour operator, introduced a structured Stories system and developed creative formats that increased reach and generated measurable demand.',
      serviceTags: ['SMM', 'Content strategy', 'Stories system', 'Creative concepts', 'Organic lead generation'],
      image: '/cases/morocco-team/hero.jpg',
      imageAlt: 'Morocco Team bespoke tour experience in Morocco',
      secondaryCta: { label: 'View original case ↗', url: 'https://montas.io/cases/morocco-team' },
    },
    heroProof: [
      { value: '2×', label: 'reach' },
      { value: '63', label: 'leads in one month' },
      { value: '2', label: 'tour sales' },
    ],
    client: {
      label: 'THE CLIENT',
      heading: 'Bespoke travel experiences built around Morocco',
      body: [
        'Morocco Team offers author-led and bespoke travel experiences in Morocco. In a visually driven travel category, social media plays an important role in showing the atmosphere of the destination and turning interest into direct enquiries.',
        'The engagement focused specifically on social communication: restoring regular publishing, improving the Stories structure and developing creative content capable of supporting both audience growth and commercial demand.',
      ],
      overview: [
        { term: 'Industry', value: 'Travel and tourism' },
        { term: 'Product', value: 'Bespoke tours in Morocco' },
        { term: 'Core channel', value: 'Social media' },
        { term: 'Engagement', value: 'SMM and content' },
        { term: 'Main objective', value: 'Reach and lead generation' },
        { term: 'Reported commercial outcome', value: 'Two tour sales' },
      ],
    },
    challenge: {
      label: 'THE CHALLENGE',
      heading: 'Rebuilding momentum in a category driven by attention and trust',
      intro:
        'Travel decisions are highly visual, but visibility alone is not enough. Potential guests need regular inspiration, a clear sense of the experience and an easy reason to begin a conversation.',
      cards: [
        { title: 'Restore reach', text: 'Restart consistent publishing and improve the account’s ability to reach its audience.' },
        { title: 'Structure Stories', text: 'Replace disconnected Stories with a repeatable content system.' },
        { title: 'Generate enquiries', text: 'Turn creative content into measurable interest in the tours.' },
      ],
    },
    approach: {
      label: 'THE TASK',
      heading: 'Make social communication consistent, useful and commercially relevant',
      intro:
        'The project set three objectives: increase reach, develop a structured Stories rubric and attract leads. Each was approached as part of one continuous communication system rather than a separate deliverable.',
      pillars: [
        'Increase reach — restore a regular, relevant publishing rhythm',
        'Develop a Stories rubric — define repeatable daily themes',
        'Attract leads — connect content with concrete interest in the tours',
      ],
    },
    contentFlow: {
      heading: 'How the content system supported demand',
      stages: [
        { title: 'Regular posting', text: 'Created consistent audience contact.' },
        { title: 'Structured Stories', text: 'Made everyday communication more repeatable.' },
        { title: 'Creative formats', text: 'Provided stronger reasons to stop, watch and respond.' },
        { title: 'Higher reach', text: 'Expanded the amount of audience attention around the offer.' },
        { title: 'Enquiries', text: 'Turned content interaction into direct commercial interest.' },
        { title: 'Tour sales', text: 'Demonstrated that social activity supported real purchase decisions.' },
      ],
    },
    brand: {
      heading: 'Consistency first, then creative variation',
      body: [
        'Regular posting gave the account a continuous presence and created more opportunities to reach potential travellers. A defined Stories rubric then gave daily communication a clearer structure and made the channel easier to sustain.',
        'With that foundation in place, new creative ideas helped the content move beyond routine updates and support both attention and enquiries.',
      ],
      deliverables: [
        'Regular posting resumed',
        'New Stories rubric launched',
        'Creative content ideas developed',
      ],
    },
    results: {
      label: 'THE RESULTS',
      heading: 'Content activity translated into measurable commercial interest',
      main: [
        { value: '2× reach', text: 'The account’s reported reach doubled after regular publishing and the new Stories system were introduced. A more consistent content rhythm increased the amount of audience attention around the offer.' },
        { value: '63 leads in one month', text: 'The refreshed content system generated 63 reported leads during one month — a measurable flow of people who moved beyond passive viewing and expressed commercial interest.' },
        { value: '2 tour sales', text: 'Two tours were sold, with tour prices starting from €2,000. The reported activity was connected to real purchases, not visibility alone.' },
      ],
      supporting: [
        'Tours priced from €2,000',
        'Regular publishing rhythm restored',
        'Stories rubric introduced',
        'Creative formats developed',
      ],
    },
    impact: {
      heading: 'Why these results matter',
      body: [
        'The case is relatively compact, but the commercial logic is clear. Regular content restored visibility, the Stories system gave the account a repeatable communication structure and creative formats helped turn attention into direct enquiries.',
        'The strongest proof point is not reach alone. The project also generated leads and confirmed tour sales, showing that a focused SMM engagement can support both brand visibility and near-term demand.',
      ],
    },
    sea: {
      label: 'TRANSFERABLE TO SEA',
      heading: 'What this project demonstrates for travel brands in Southeast Asia',
      intro:
        'Travel brands often compete through highly visual channels, but attractive imagery alone does not create a reliable flow of enquiries. Consistency, repeatable content formats and a clear path to contact are equally important.',
      principles: [
        { title: 'Consistency builds visibility', text: 'A stable publishing rhythm creates more opportunities to remain present during a long travel decision.' },
        { title: 'Stories need a system', text: 'Repeatable formats make day-to-day communication easier to sustain and easier for the audience to understand.' },
        { title: 'Content should support action', text: 'Reach becomes commercially useful when users have a clear reason and path to enquire.' },
      ],
    },
    testimonial: {
      quote: 'The collaboration was highly productive. The team quickly helped move the account to a new level: the content became more systematic and considered, while reach increased noticeably. What mattered most was that the ideas were not created only for appearance — they generated real leads and sales. The team remained accessible and continued proposing fresh formats, helping us increase customer interest and strengthen our market position.',
      attribution: 'Morocco Team',
    },
    services: [
      { label: 'SMM', to: '/services/smm-content-systems' },
      { label: 'Content strategy', to: '/services/smm-content-systems' },
      { label: 'Stories planning', to: null },
      { label: 'Creative concepts', to: null },
      { label: 'Organic lead generation', to: null },
      { label: 'Social media management', to: '/services/smm-content-systems' },
    ],
    sourcesHeading: 'Original project source',
    sources: [
      { label: 'View the original Montas case', url: 'https://montas.io/cases/morocco-team' },
    ],
    finalCta: {
      heading: 'Need to turn travel content into measurable enquiries?',
      body: 'Build a clear content system around your audience, offer and booking journey.',
    },
  },

  'rippa': {
    slug: 'rippa',
    caseName: 'Rippa',
    seo: {
      title: 'Rippa UAE Brand Relaunch & B2B Website Case Study | Montas Asia',
      description:
        'How Montas researched, rebranded and launched an eight-page Webflow platform with a 100+ SKU CMS catalogue for Rippa UAE in one month.',
      canonicalPath: '/cases/rippa',
      ogImage: '/cases/rippa/hero.jpg',
    },
    images: {
      operations:      { src: '/cases/rippa/uae-market.jpg',       alt: 'Rippa construction equipment positioned for professional buyers in the UAE' },
      digitalPlatform: { src: '/cases/rippa/digital-platform.jpg', alt: 'Rippa UAE Webflow website and scalable industrial-equipment catalogue' },
    },
    hero: {
      label: 'REAL CASE · INDUSTRIAL B2B · UAE MARKET ENTRY',
      h1: 'Rippa — relaunching an industrial equipment brand for the UAE market',
      intro:
        'Montas combined audience research, brand strategy, UX design and Webflow development to create a scalable B2B platform for an international construction-equipment manufacturer entering the UAE.',
      serviceTags: [
        'Audience research', 'Competitor analysis', 'Brand strategy', 'Brand identity',
        'UX/UI design', 'Design system', 'Webflow development', 'CMS architecture', 'B2B catalogue design',
      ],
      image: '/cases/rippa/hero.jpg',
      imageAlt: 'Rippa industrial equipment brand launched for the UAE market',
      secondaryCta: { label: 'Visit live website ↗', url: 'https://rippa-uae.com/' },
    },
    heroProof: [
      { value: '1 month', label: 'from research to launch' },
      { value: '8 pages', label: 'fully responsive Webflow platform' },
      { value: '100+ SKUs', label: 'managed through a scalable CMS catalogue' },
      { value: 'Custom filters', label: 'categories, tags and filter parameters' },
    ],
    client: {
      label: 'THE CLIENT',
      heading: 'An international manufacturer entering a highly competitive regional market',
      body: [
        'Rippa manufactures construction machinery and industrial equipment for professional buyers. Its product range includes compact and large excavators, skid-steer loaders, wheel loaders, backhoe loaders, forklifts, telescopic handlers and equipment attachments.',
        'The project focused on adapting the brand and its digital platform for the UAE — a market where professional buyers expect a clear catalogue, credible local presence and fast access to product and service information.',
      ],
      overview: [
        { term: 'Industry', value: 'Construction and industrial equipment' },
        { term: 'Audience', value: 'B2B buyers, operators and dealers' },
        { term: 'Target market', value: 'United Arab Emirates' },
        { term: 'Platform', value: 'Webflow' },
        { term: 'Engagement', value: 'Research, branding, UX/UI and development' },
        { term: 'Core objective', value: 'Market-ready digital relaunch' },
      ],
    },
    businessContext: {
      label: 'THE BUSINESS TODAY',
      heading: 'A global equipment manufacturer with a local UAE proposition',
      intro: 'The current Rippa UAE website presents an exclusive UAE distribution proposition, equipment available from stock in Dubai, a warehouse and showroom in Jebel Ali, delivery across the UAE and GCC, spare-parts availability and local technical support. Current product categories include mini and large excavators, skid-steer loaders, wheel loaders, backhoe loaders, forklifts, telescopic handlers and equipment attachments.',
      claims: [
        { value: '100+ countries', label: 'stated on the current Rippa website' },
        { value: 'Jebel Ali', label: 'warehouse and showroom presence' },
        { value: 'B2B model', label: 'equipment sales and dealer relationships' },
      ],
      note: 'These are current Rippa website claims, not results produced by Montas. Rippa’s commercial offer and live website may have evolved since the original Montas engagement.',
    },
    challenge: {
      label: 'THE CHALLENGE',
      heading: 'A global manufacturer needed to look and operate like a local UAE brand',
      intro:
        'Entering a new market required more than translating an existing website. Rippa needed a brand and digital platform capable of communicating industrial scale, professional credibility and a locally relevant customer journey.',
      cards: [
        { title: 'Adapt the brand', text: 'Create a visual and verbal system suitable for the UAE B2B market.' },
        { title: 'Understand professional buyers', text: 'Study how target customers evaluate equipment, specifications, availability and support.' },
        { title: 'Structure a complex catalogue', text: 'Make more than 100 products easy to navigate and compare.' },
        { title: 'Support scalable management', text: 'Give the internal team a CMS that could be updated without rebuilding the site.' },
        { title: 'Launch quickly', text: 'Complete research, design and development within a one-month delivery period.' },
      ],
    },
    approach: {
      label: 'THE APPROACH',
      heading: 'Research → brand system → scalable digital platform',
      intro:
        'The programme moved through four connected stages, each informing the next rather than running as an isolated deliverable.',
      pillars: [
        'Understand the market — research the audience, category and digital expectations of professional buyers in the UAE',
        'Rebuild the brand — create a unified visual and verbal language supporting a premium B2B position',
        'Build for scale — an eight-page Webflow platform with a CMS catalogue of 100+ SKUs',
        'Create a direct enquiry route — connect catalogue exploration with a dedicated personal manager',
      ],
    },
    smm: {
      label: 'RESEARCH',
      heading: 'Design decisions grounded in real B2B buying behaviour',
      body: [
        'Montas began with qualitative and quantitative interviews with the target audience, supported by competitor and UX analysis of the industrial-equipment segment.',
        'The research helped determine how professional users searched the catalogue, evaluated specifications, moved between categories and contacted a sales representative.',
      ],
      proof: [
        { value: 'Audience interviews', label: 'qualitative and quantitative research with professional buyers' },
        { value: 'Competitor analysis', label: 'category conventions and usability gaps' },
        { value: 'UX analysis', label: 'catalogue structure, navigation and enquiry routes' },
      ],
    },
    brand: {
      heading: 'A consistent identity for an industrial brand in a premium market',
      body: [
        'Montas developed a brandbook defining the visual and verbal standards of Rippa’s UAE communication. The system aligned the company’s industrial scale with a more structured and premium digital presentation.',
        'A dedicated design system and UI Kit then translated those principles into reusable website elements, catalogue components and interaction patterns.',
      ],
      deliverables: [
        'Brandbook', 'Visual communication standards', 'Verbal communication standards',
        'Colour and typography rules', 'UI Kit', 'Reusable interface components',
        'Design system', 'Consistent digital presentation',
      ],
    },
    pr: {
      label: 'B2B UX',
      heading: 'Making a large equipment catalogue easier to navigate',
      body: [
        'Industrial buyers rarely browse a catalogue casually. They search by equipment type, specifications, operational requirements and commercial availability.',
        'The platform therefore used multi-level navigation, categories, tags and custom filters to help users move through a catalogue of more than 100 SKUs without losing context.',
      ],
      proof: [
        { value: 'Category hierarchy', label: 'machinery types separated into clear product groups' },
        { value: 'Flexible filtering', label: 'categories, tags and filter parameters' },
        { value: 'Specification-led', label: 'technical information easier to scan and compare' },
        { value: 'Direct consultation', label: 'dedicated manager visible throughout the journey' },
      ],
    },
    production: {
      label: 'DIGITAL PLATFORM',
      heading: 'An eight-page website built around a scalable product catalogue',
      body: [
        'Montas designed and developed eight responsive pages in Webflow. The platform combined brand storytelling, product discovery and enquiry pathways within one consistent system.',
        'The catalogue was built in CMS with more than 100 SKUs, structured through categories, tags and custom filters. This allowed the Rippa team to manage and expand the product range without rebuilding page layouts manually.',
      ],
      scope: [
        'Eight responsive pages', 'Webflow implementation', '100+ SKU CMS catalogue',
        'Product categories', 'Product tags', 'Custom filters',
        'Multi-level navigation', 'Responsive desktop, tablet and mobile behaviour', 'Self-managed catalogue content',
      ],
      gallery: [],
    },
    contentFlow: {
      heading: 'From research to market-ready platform in one month',
      stages: [
        { title: 'Research', text: 'Audience interviews, competitor analysis and UX assessment.' },
        { title: 'Brand system', text: 'Brandbook, verbal standards, design system and UI Kit.' },
        { title: 'Product design', text: 'Information architecture, B2B scenarios and responsive interface design.' },
        { title: 'Development and launch', text: 'Eight Webflow pages and the 100+ SKU CMS catalogue prepared for release.' },
      ],
    },
    results: {
      label: 'THE RESULTS',
      heading: 'A complete digital ecosystem prepared for the UAE market',
      main: [
        { value: '1-month launch', text: 'Research, UX, brand development and Webflow implementation completed within the reported project period.' },
        { value: '8 responsive pages', text: 'A multi-page website built for professional use across desktop, tablet and mobile.' },
        { value: '100+ SKU catalogue', text: 'A structured CMS supporting categories, tags and custom product filters.' },
        { value: 'Scalable brand system', text: 'A brandbook, UI Kit and reusable design system prepared for consistent future communication.' },
      ],
      supporting: [
        'Premium UAE-facing brand presentation',
        'Clearer B2B navigation',
        'Self-managed product catalogue',
        'Dedicated consultation route',
        'Foundation for future catalogue expansion',
        'Market-ready digital platform',
      ],
    },
    impact: {
      heading: 'The platform reduced the distance between global scale and local relevance',
      body: [
        'Rippa already had an extensive product range and international manufacturing experience. The role of the project was to translate that scale into a digital experience suitable for professional buyers in the UAE.',
        'The resulting system did more than present individual machines. It created a consistent brand, a navigable catalogue and a scalable foundation that the local team could continue to manage as the offer evolved.',
      ],
    },
    sea: {
      label: 'TRANSFERABLE TO SEA',
      heading: 'What this project demonstrates for international B2B brands entering Asian markets',
      intro:
        'Industrial brands entering a new regional market need more than a translated corporate website. Professional buyers expect clear product architecture, locally relevant trust signals and access to people who understand the commercial and technical context.',
      principles: [
        { title: 'Research the local buying journey', text: 'Understand how professional customers evaluate products, suppliers and after-sales support.' },
        { title: 'Localise the proposition, not only the language', text: 'Adapt information hierarchy, proof points and enquiry routes to local expectations.' },
        { title: 'Build catalogues for scale', text: 'Use structured CMS architecture so a large product range can grow without creating navigation chaos.' },
      ],
    },
    testimonial: {
      quote: 'We needed a website that matched the level of the company and the expectations of the UAE market. The Montas team did more than create a modern platform — they reconsidered the brand and proposed solutions designed for future growth. The result is structured, premium and ready to scale.',
      attribution: 'Rippa team',
    },
    services: [
      { label: 'Audience research', to: null },
      { label: 'Qualitative interviews', to: null },
      { label: 'Quantitative research', to: null },
      { label: 'Competitor analysis', to: null },
      { label: 'UX analysis', to: null },
      { label: 'Brand strategy', to: null },
      { label: 'Brandbook development', to: null },
      { label: 'Verbal identity', to: null },
      { label: 'UI Kit', to: null },
      { label: 'Design system', to: null },
      { label: 'UX/UI design', to: '/services/landing-pages-websites' },
      { label: 'Webflow development', to: '/services/landing-pages-websites' },
      { label: 'CMS architecture', to: null },
      { label: 'Catalogue design', to: null },
      { label: 'Responsive development', to: '/services/landing-pages-websites' },
    ],
    sourcesHeading: 'Project and company sources',
    sources: [
      { label: 'View original Montas case', url: 'https://montas.io/cases/rippa' },
      { label: 'Visit Rippa UAE', url: 'https://rippa-uae.com/' },
    ],
    finalCta: {
      heading: 'Entering a new Asian market with a complex B2B product?',
      body: 'Build a research-led brand and digital platform around your audience, catalogue and commercial journey.',
    },
  },

  'clipstorm': {
    slug: 'clipstorm',
    caseName: 'Clipstorm',
    seo: {
      title: 'Clipstorm MarTech Platform Case Study | Montas Asia',
      description:
        'How Montas transformed Clipstorm into a complete MarTech platform in six weeks, followed by a reported 100% increase in sales.',
      canonicalPath: '/cases/clipstorm',
      ogImage: '/cases/clipstorm-cover.jpg',
    },
    hero: {
      label: 'REAL CASE · MARTECH · PRODUCT DEVELOPMENT',
      h1: 'Clipstorm — building a digital platform for short-form video campaigns',
      intro:
        'Montas transformed an existing short-form video campaign product into a complete online ecosystem combining product packaging, a sales website, a realtime client dashboard, API connections and a 3D showreel.',
      serviceTags: [
        'Market research', 'Competitor analysis', 'Product strategy', 'Technical specification',
        'UX/UI design', 'Webflow development', 'Client dashboard', 'API integration', 'UX testing', '3D production',
      ],
      image: '/cases/clipstorm-cover.jpg',
      imageAlt: 'Clipstorm short-form video marketing platform logo',
      imageContain: true,
      secondaryCta: { label: 'View original case ↗', url: 'https://montas.io/cases/clipstorm' },
    },
    heroProof: [
      { value: '6 weeks', label: 'from project start to full implementation' },
      { value: '+100%', label: 'reported sales growth after platform launch' },
      { value: 'Realtime', label: 'campaign statistics in the client dashboard' },
      { value: 'Full stack', label: 'website, dashboard, API and 3D showreel' },
    ],
    client: {
      label: 'THE PRODUCT',
      heading: 'A platform for launching campaigns through short-form video',
      body: [
        'Clipstorm was conceived as a platform helping companies launch marketing campaigns through formats such as Reels, TikTok, Shorts and other short-form video channels.',
        'The client already had the underlying product idea, but it lacked the digital packaging and online infrastructure required to present the offer, onboard customers and scale sales.',
      ],
      overview: [
        { term: 'Industry', value: 'MarTech' },
        { term: 'Product type', value: 'Short-form video campaign platform' },
        { term: 'Audience', value: 'Companies and marketing teams' },
        { term: 'Core formats', value: 'Reels, TikTok and Shorts' },
        { term: 'Engagement', value: 'Product packaging and development' },
        { term: 'Platform', value: 'Webflow' },
        { term: 'Core objective', value: 'Online launch and scalable sales' },
      ],
    },
    challenge: {
      label: 'THE CHALLENGE',
      heading: 'A working product needed a complete digital form',
      intro:
        'The challenge was not to invent Clipstorm from zero. The product already existed as a business concept, but it needed a clear structure, convincing digital presentation and functional client experience before it could scale online.',
      cards: [
        { title: 'Package the product', text: 'Turn the existing service into an understandable and commercially convincing digital proposition.' },
        { title: 'Define the logic', text: 'Translate business requirements into a clear technical specification and user journey.' },
        { title: 'Build the sales layer', text: 'Create a website that explained the product and supported online sales.' },
        { title: 'Build the product layer', text: 'Provide registration, campaign information and client-management functionality.' },
        { title: 'Communicate technological value', text: 'Use visual design and 3D production to demonstrate the platform’s scope and ambition.' },
      ],
    },
    approach: {
      label: 'THE APPROACH',
      heading: 'One connected system across presentation, product and client management',
      intro:
        'Montas approached the engagement as a product system rather than a standalone landing page: ready product → digital packaging → sales website → client dashboard → scalable platform.',
      pillars: [
        'Product research — understand the category, competitors and expected audience journeys',
        'Technical specification — translate commercial goals into product requirements and user logic',
        'Sales website — explain the platform through a strong visual system, considered UX and controlled animation',
        'Client dashboard — registration, realtime statistics, customisation and connected campaign workflows',
        '3D product presentation — communicate technological scale and product capability',
      ],
    },
    smm: {
      label: 'RESEARCH',
      heading: 'Defining the market, audience scenarios and product logic',
      body: [
        'Montas began with an in-depth study of competitors and audience interaction scenarios within the video-advertising market.',
        'The findings were translated into an agreed technical specification defining the product goals, interface logic and required user flows.',
      ],
      proof: [
        { value: 'Market research', label: 'the video-advertising landscape and comparable digital products' },
        { value: 'Audience scenarios', label: 'how customers would discover, evaluate and use the platform' },
        { value: 'Specification', label: 'business requirements converted into product goals and logic' },
      ],
    },
    brand: {
      heading: 'A visual sales experience designed around a new product category',
      body: [
        'Montas created the website design with a strong visual system, considered UX patterns and carefully controlled animation.',
        'The website needed to explain an unfamiliar product quickly while preserving the technological and creative character of short-form video marketing.',
      ],
      deliverables: [
        'Website structure', 'Visual system', 'UX solutions', 'Interface design',
        'Considered animations', 'Product explanation', 'Sales-focused presentation',
      ],
    },
    pr: {
      label: 'CLIENT PLATFORM',
      heading: 'A personal dashboard built around live campaign information',
      body: [
        'The dashboard was assembled in Webflow with connected functionality, including registration, a complete user flow, realtime statistics, customisation and API connections.',
        'It turned the public-facing proposition into a usable client environment for accessing and managing campaign information. Custom settings and API connections created a more flexible environment capable of supporting different campaign scenarios.',
      ],
      proof: [
        { value: 'Registration', label: 'user sign-up and complete user flow' },
        { value: 'Realtime statistics', label: 'current campaign information in one environment' },
        { value: 'Customisation', label: 'configurable dashboard settings' },
        { value: 'API connections', label: 'support for the wider product workflow' },
      ],
    },
    production: {
      label: '3D PRODUCTION',
      heading: 'Making an intangible product feel tangible',
      body: [
        'Montas created a dedicated 3D showreel to demonstrate the platform’s capabilities and reinforce the technological character of the brand.',
        'For a digital service without a physical product, the showreel provided a more expressive way to communicate scale, functionality and ambition. Before release, internal UX testing was conducted to review the main user journey, identify unclear interface moments and confirm that key product actions were understandable.',
      ],
      scope: [
        'Dedicated 3D showreel',
        'Product demonstration',
        'Reinforcement of the visual identity',
        'Stronger perception of technological scale',
        'Internal UX testing before release',
        'Review of the main user journey',
      ],
      gallery: [],
    },
    contentFlow: {
      heading: 'A complete product ecosystem delivered in six weeks',
      stages: [
        { title: 'Research', text: 'Competitor and audience-scenario analysis.' },
        { title: 'Specification', text: 'Definition of business goals, functionality and product logic.' },
        { title: 'UX/UI design', text: 'Sales website, dashboard experience and visual system.' },
        { title: 'Development and connections', text: 'Webflow implementation, registration, customisation and API functionality.' },
        { title: 'Testing and release', text: 'Internal UX review and completion of the full platform.' },
      ],
    },
    results: {
      label: 'THE RESULTS',
      heading: 'A complete online platform prepared for scalable sales',
      main: [
        { value: '6-week delivery', text: 'The complete project was implemented from start to finish within the reported six-week period.' },
        { value: '+100% sales', text: 'The official case reports 100% sales growth after the new online platform launched.' },
        { value: 'Realtime client dashboard', text: 'A personal environment with campaign statistics, customisation and API connections.' },
        { value: 'Complete product packaging', text: 'Research, specification, website, user flows and 3D presentation combined into one system.' },
      ],
      supporting: [
        'Product prepared for broader promotion',
        'Sales-focused website',
        'User registration flow',
        'Flexible dashboard settings',
        'Internal UX testing',
        '3D product showreel',
        'Foundation for further product growth',
        'Greater system autonomy',
      ],
    },
    impact: {
      heading: 'The website was only one part of the outcome',
      body: [
        'Clipstorm did not receive a promotional landing page in isolation. The engagement connected product research, technical definition, interface design, client functionality, API connections and visual production.',
        'This made the new online platform capable of supporting both product presentation and the client experience — creating a stronger foundation for sales and future development.',
      ],
    },
    sea: {
      label: 'TRANSFERABLE TO SEA',
      heading: 'What this project demonstrates for digital products entering Asian markets',
      intro:
        'New digital products often need more than localisation and advertising. They need a clearly defined proposition, a coherent user journey and a platform capable of turning initial interest into product use.',
      principles: [
        { title: 'Package the product before scaling traffic', text: 'Clarify the offer, functionality and customer journey before increasing acquisition.' },
        { title: 'Connect marketing and product experience', text: 'Ensure the promise made by the website continues inside the client platform.' },
        { title: 'Make data visible', text: 'Give customers clear access to the information they need to understand ongoing activity.' },
      ],
    },
    testimonial: {
      quote: 'The team understood the core of the task from the first meeting. We received more than a website — we gained a complete ecosystem for sales and client management. The realtime dashboard and 3D showreel were particularly impressive and gave the product the level associated with major digital brands.',
      attribution: 'Clipstorm team',
    },
    services: [
      { label: 'Market research', to: null },
      { label: 'Competitor analysis', to: null },
      { label: 'Audience-scenario analysis', to: null },
      { label: 'Product strategy', to: null },
      { label: 'Technical specification', to: null },
      { label: 'Information architecture', to: null },
      { label: 'UX/UI design', to: '/services/landing-pages-websites' },
      { label: 'Visual system', to: null },
      { label: 'Webflow development', to: '/services/landing-pages-websites' },
      { label: 'Client dashboard development', to: null },
      { label: 'Registration flow', to: null },
      { label: 'API connections', to: null },
      { label: 'UX testing', to: null },
      { label: '3D production', to: null },
    ],
    sourcesHeading: 'Original project source',
    sources: [
      { label: 'View the original Montas case', url: 'https://montas.io/cases/clipstorm' },
    ],
    finalCta: {
      heading: 'Building a digital product for fast-moving Asian markets?',
      body: 'Turn your product logic, interface and customer journey into one scalable online system.',
    },
  },
};

export const getCaseStudy = (slug) => caseStudies[slug] || null;
