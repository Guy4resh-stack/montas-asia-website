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
};

export const getCaseStudy = (slug) => caseStudies[slug] || null;
