export interface Skill {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  problem: string;
  solution: string;
  tags: string[];
  trustScore: number;
  updatedAt: string;
  agents: string[];
  prompts: string[];
}

export const skills: Skill[] = [
  // Tax & Finance
  {
    id: "ato-bas",
    name: "ATO BAS Expert",
    slug: "ato-bas-expert",
    category: "Tax & Finance",
    categorySlug: "tax-and-finance",
    description: "Complete BAS lodgement guidance including GST calculations, PAYG withholding, and quarterly/monthly reporting requirements per ATO guidelines.",
    problem: "BAS lodgement is complex with multiple components (GST, PAYG, fuel tax credits) and strict deadlines. Errors lead to penalties.",
    solution: "This skill provides step-by-step BAS guidance, calculates obligations, and ensures compliance with current ATO requirements.",
    tags: ["BAS", "GST", "PAYG", "ATO", "Quarterly"],
    trustScore: 92,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "Calculate my GST liability for Q3 with $50,000 sales and $15,000 purchases",
      "What's the BAS due date for quarterly lodgers in March?",
      "Help me complete my BAS for a small retail business"
    ]
  },
  {
    id: "superannuation",
    name: "Superannuation Guide",
    slug: "superannuation-guide",
    category: "Tax & Finance",
    categorySlug: "tax-and-finance",
    description: "Complete superannuation guidance including SG rates, contribution caps, and employer obligations for Australian businesses.",
    problem: "Super Guarantee rates change annually, contribution caps vary by age, and late payments incur the Super Guarantee Charge.",
    solution: "Stay compliant with current SG rates (11.5% in 2024-25), understand concessional/non-concessional caps, and meet quarterly deadlines.",
    tags: ["Super", "SG", "Retirement", "Employer"],
    trustScore: 89,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "What's the current super guarantee rate?",
      "Calculate super for an employee earning $85,000",
      "When is super due for Q2?"
    ]
  },
  {
    id: "payg-withholding",
    name: "PAYG Withholding Calculator",
    slug: "payg-withholding",
    category: "Tax & Finance",
    categorySlug: "tax-and-finance",
    description: "Calculate PAYG withholding amounts using current ATO tax tables and handle special cases like bonuses and termination payments.",
    problem: "PAYG calculations require current tax tables, handling of tax-free threshold claims, HELP/HECS debts, and various payment types.",
    solution: "Accurate withholding calculations for regular pay, overtime, bonuses, commissions, and termination payments per ATO tables.",
    tags: ["PAYG", "Tax", "Withholding", "Payroll"],
    trustScore: 91,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "Calculate PAYG for $1,500 weekly wage with tax-free threshold",
      "How much to withhold from a $5,000 bonus?",
      "PAYG for casual earning $800/week"
    ]
  },
  {
    id: "fbt-calculator",
    name: "FBT Calculator",
    slug: "fbt-calculator",
    category: "Tax & Finance",
    categorySlug: "tax-and-finance",
    description: "Fringe Benefits Tax calculations for car benefits, expense payments, and entertainment using current FBT rates.",
    problem: "FBT is complex with multiple benefit categories, grossing up factors, and exemptions that change annually.",
    solution: "Calculate FBT liability for various benefit types, apply correct gross-up rates, and identify available exemptions.",
    tags: ["FBT", "Car", "Benefits", "Tax"],
    trustScore: 85,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw"],
    prompts: [
      "Calculate FBT on a $50,000 car provided to employee",
      "Is this entertainment expense FBT-exempt?",
      "What's the FBT gross-up rate for Type 1 benefits?"
    ]
  },
  {
    id: "cgt-calculator",
    name: "CGT Calculator",
    slug: "cgt-calculator",
    category: "Tax & Finance",
    categorySlug: "tax-and-finance",
    description: "Capital Gains Tax calculations including the 50% discount, small business concessions, and main residence exemptions.",
    problem: "CGT involves cost base calculations, discount eligibility, rollovers, and various exemptions that are hard to navigate.",
    solution: "Calculate CGT liability, apply the 50% discount for 12+ month holdings, and identify applicable concessions.",
    tags: ["CGT", "Capital Gains", "Property", "Investment"],
    trustScore: 88,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "Calculate CGT on shares bought for $10k, sold for $25k after 2 years",
      "Does main residence exemption apply if I rented it for 1 year?",
      "CGT on investment property sold for $200k profit"
    ]
  },
  {
    id: "stamp-duty",
    name: "State Stamp Duty Guide",
    slug: "stamp-duty",
    category: "Tax & Finance",
    categorySlug: "tax-and-finance",
    description: "State-by-state stamp duty calculations for property transfers, including first home buyer concessions and foreign buyer surcharges.",
    problem: "Stamp duty rates differ by state, property type (residential/commercial), buyer status, and are frequently updated.",
    solution: "Calculate stamp duty for any Australian state, apply first home buyer concessions, and account for foreign buyer surcharges.",
    tags: ["Stamp Duty", "Property", "First Home", "Transfer"],
    trustScore: 87,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw"],
    prompts: [
      "Stamp duty on $800k house in NSW for first home buyer",
      "Calculate Victorian stamp duty on $1.2M investment property",
      "QLD stamp duty for foreign buyer on $500k apartment"
    ]
  },
  // Government Services
  {
    id: "abn-registration",
    name: "ABN Registration Helper",
    slug: "abn-registration",
    category: "Government Services",
    categorySlug: "government-services",
    description: "Guide through ABN registration process including eligibility checks, business structure selection, and GST registration decisions.",
    problem: "ABN applications require understanding of business structures, GST thresholds, and correct entity type selection.",
    solution: "Step-by-step ABN registration guidance, structure recommendations, and automatic GST registration advice based on turnover.",
    tags: ["ABN", "Registration", "GST", "Business"],
    trustScore: 94,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "Do I need an ABN for my freelance work?",
      "Should I register for GST with $60k annual turnover?",
      "ABN application for a partnership"
    ]
  },
  {
    id: "mygov-services",
    name: "myGov Services Navigator",
    slug: "mygov-services",
    category: "Government Services",
    categorySlug: "government-services",
    description: "Navigate myGov linked services including ATO, Centrelink, Medicare, and Child Support with step-by-step guidance.",
    problem: "myGov links to 100+ government services, each with different processes and requirements.",
    solution: "Guide users through linking services, accessing accounts, and completing common tasks across all myGov-connected agencies.",
    tags: ["myGov", "ATO", "Centrelink", "Medicare"],
    trustScore: 86,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw"],
    prompts: [
      "How do I link my ATO account to myGov?",
      "Access my Medicare claims history",
      "Update my Centrelink income estimate"
    ]
  },
  {
    id: "asic-compliance",
    name: "ASIC Compliance Guide",
    slug: "asic-compliance",
    category: "Government Services",
    categorySlug: "government-services",
    description: "ASIC compliance requirements for companies including annual reviews, director obligations, and corporate key changes.",
    problem: "Companies must lodge annual statements, update registers, and notify ASIC of changes within strict timeframes.",
    solution: "Track compliance deadlines, prepare annual reviews, and manage director/shareholder changes correctly.",
    tags: ["ASIC", "Company", "Compliance", "Directors"],
    trustScore: 90,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "When is my company's annual review due?",
      "How to notify ASIC of a new director?",
      "Update company registered address with ASIC"
    ]
  },
  {
    id: "services-australia",
    name: "Services Australia Helper",
    slug: "services-australia",
    category: "Government Services",
    categorySlug: "government-services",
    description: "Navigate Centrelink, Medicare, and Child Support payments, claims, and eligibility requirements.",
    problem: "Services Australia administers complex payment systems with varying eligibility criteria and reporting requirements.",
    solution: "Check payment eligibility, understand reporting obligations, and navigate claim processes efficiently.",
    tags: ["Centrelink", "Medicare", "Payments", "Claims"],
    trustScore: 84,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw"],
    prompts: [
      "Am I eligible for JobSeeker?",
      "How to claim Medicare rebate for specialist visit?",
      "Report income changes to Centrelink"
    ]
  },
  // Legal & Compliance
  {
    id: "fair-work",
    name: "Fair Work Compliance",
    slug: "fair-work",
    category: "Legal & Compliance",
    categorySlug: "legal-compliance",
    description: "National Employment Standards, Modern Awards interpretation, and workplace rights and obligations under Fair Work Act.",
    problem: "Employment law involves 122+ Modern Awards, NES entitlements, and complex termination/redundancy rules.",
    solution: "Identify applicable awards, calculate entitlements, and ensure compliance with minimum employment standards.",
    tags: ["Fair Work", "Awards", "NES", "Employment"],
    trustScore: 93,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "What award covers retail workers?",
      "Calculate redundancy pay for 5 years service",
      "Minimum notice period for termination"
    ]
  },
  {
    id: "privacy-act",
    name: "Privacy Act Compliance",
    slug: "privacy-act",
    category: "Legal & Compliance",
    categorySlug: "legal-compliance",
    description: "Australian Privacy Principles compliance including data collection, storage, and breach notification requirements.",
    problem: "Privacy Act requires understanding of 13 APPs, notifiable data breaches, and cross-border data transfer rules.",
    solution: "Assess privacy compliance, draft privacy policies, and manage data breach notification requirements.",
    tags: ["Privacy", "APP", "Data", "OAIC"],
    trustScore: 88,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "What must be in a privacy policy?",
      "When must I report a data breach?",
      "Can I transfer customer data overseas?"
    ]
  },
  {
    id: "acl-consumer",
    name: "Consumer Law Guide",
    slug: "acl-consumer",
    category: "Legal & Compliance",
    categorySlug: "legal-compliance",
    description: "Australian Consumer Law compliance including consumer guarantees, refund obligations, and product safety requirements.",
    problem: "Businesses must understand consumer guarantees, handle refund requests correctly, and meet product safety standards.",
    solution: "Navigate consumer guarantee obligations, handle disputes, and ensure product compliance.",
    tags: ["ACL", "Consumer", "Refunds", "Guarantees"],
    trustScore: 86,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw"],
    prompts: [
      "When must I give a refund?",
      "What are the consumer guarantees?",
      "Handle a faulty product complaint"
    ]
  },
  {
    id: "whs-compliance",
    name: "WHS Compliance",
    slug: "whs-compliance",
    category: "Legal & Compliance",
    categorySlug: "legal-compliance",
    description: "Work Health and Safety obligations including risk assessments, incident reporting, and PCBU duties.",
    problem: "WHS laws impose duties on PCBUs, officers, and workers with serious penalties for non-compliance.",
    solution: "Understand duty of care, conduct risk assessments, and meet incident notification requirements.",
    tags: ["WHS", "Safety", "Risk", "PCBU"],
    trustScore: 91,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "What are my WHS duties as a business owner?",
      "When must I report a workplace incident?",
      "Conduct a risk assessment for office work"
    ]
  },
  {
    id: "contract-law",
    name: "Contract Basics",
    slug: "contract-law",
    category: "Legal & Compliance",
    categorySlug: "legal-compliance",
    description: "Australian contract law basics including formation, terms, breach remedies, and unfair contract terms.",
    problem: "Contract disputes arise from unclear terms, unfair clauses, and misunderstanding of legal requirements.",
    solution: "Review contracts for key elements, identify potentially unfair terms, and understand breach remedies.",
    tags: ["Contract", "Terms", "Breach", "Law"],
    trustScore: 82,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw"],
    prompts: [
      "Is this contract clause enforceable?",
      "What makes a contract legally binding?",
      "Remedies for contract breach"
    ]
  },
  {
    id: "defamation",
    name: "Defamation Guide",
    slug: "defamation",
    category: "Legal & Compliance",
    categorySlug: "legal-compliance",
    description: "Australian defamation law including what constitutes defamation, defences, and the serious harm threshold.",
    problem: "Online reviews and social media create defamation risks. Understanding defences is crucial.",
    solution: "Assess defamation risk, understand available defences (truth, honest opinion, public interest), and serious harm test.",
    tags: ["Defamation", "Social Media", "Reviews", "Law"],
    trustScore: 79,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw"],
    prompts: [
      "Is this negative review defamatory?",
      "What defences apply to defamation claims?",
      "Social media post defamation risk"
    ]
  },
  {
    id: "ip-basics",
    name: "IP Basics Australia",
    slug: "ip-basics",
    category: "Legal & Compliance",
    categorySlug: "legal-compliance",
    description: "Australian intellectual property basics including trademarks, patents, copyright, and design rights.",
    problem: "IP protection requires understanding different types of rights, registration processes, and enforcement options.",
    solution: "Identify what IP protection is needed, understand registration processes, and basic enforcement strategies.",
    tags: ["IP", "Trademark", "Copyright", "Patent"],
    trustScore: 84,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw"],
    prompts: [
      "Do I need to trademark my business name?",
      "How does copyright work in Australia?",
      "Register a design with IP Australia"
    ]
  },
  {
    id: "aml-ctf",
    name: "AML/CTF Compliance",
    slug: "aml-ctf",
    category: "Legal & Compliance",
    categorySlug: "legal-compliance",
    description: "Anti-Money Laundering and Counter-Terrorism Financing compliance for reporting entities.",
    problem: "AML/CTF obligations include customer identification, ongoing monitoring, and suspicious matter reporting.",
    solution: "Implement AML/CTF programs, conduct customer due diligence, and meet AUSTRAC reporting requirements.",
    tags: ["AML", "CTF", "AUSTRAC", "KYC"],
    trustScore: 87,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "What are my AML/CTF obligations?",
      "When to lodge a suspicious matter report?",
      "Customer identification requirements"
    ]
  },
  {
    id: "building-regulations",
    name: "Building Regulations",
    slug: "building-regulations",
    category: "Legal & Compliance",
    categorySlug: "legal-compliance",
    description: "Navigate Australian building codes, DA requirements, and construction compliance by state.",
    problem: "Building regulations vary by state with complex approval processes and compliance certificate requirements.",
    solution: "Understand DA vs CDC pathways, NCC compliance, and state-specific building requirements.",
    tags: ["Building", "DA", "NCC", "Construction"],
    trustScore: 81,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw"],
    prompts: [
      "Do I need DA for a deck in NSW?",
      "What's exempt development?",
      "NCC requirements for residential build"
    ]
  },
  // Business Operations
  {
    id: "xero-integration",
    name: "Xero Integration",
    slug: "xero-integration",
    category: "Business Operations",
    categorySlug: "business-operations",
    description: "Xero accounting workflows including invoicing, bank reconciliation, BAS preparation, and payroll management.",
    problem: "Xero has powerful features but requires proper setup and workflow understanding to be effective.",
    solution: "Optimize Xero workflows, automate reconciliation, prepare BAS from Xero, and manage payroll efficiently.",
    tags: ["Xero", "Accounting", "Invoicing", "Payroll"],
    trustScore: 90,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "Set up bank feeds in Xero",
      "Prepare BAS from Xero data",
      "Automate invoice reminders in Xero"
    ]
  },
  {
    id: "myob-guide",
    name: "MYOB Guide",
    slug: "myob-guide",
    category: "Business Operations",
    categorySlug: "business-operations",
    description: "MYOB accounting system guidance including setup, payroll, BAS, and end of year processes.",
    problem: "MYOB requires proper configuration for accurate reporting and compliance.",
    solution: "Configure MYOB correctly, process payroll, prepare BAS, and complete EOFY procedures.",
    tags: ["MYOB", "Accounting", "Payroll", "BAS"],
    trustScore: 85,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw"],
    prompts: [
      "Set up payroll in MYOB",
      "MYOB bank reconciliation",
      "EOFY process in MYOB"
    ]
  },
  {
    id: "stp-reporting",
    name: "Single Touch Payroll",
    slug: "stp-reporting",
    category: "Business Operations",
    categorySlug: "business-operations",
    description: "Single Touch Payroll reporting requirements, setup, and troubleshooting for Australian employers.",
    problem: "STP requires real-time payroll reporting to ATO with specific data requirements and error handling.",
    solution: "Set up STP correctly, resolve common errors, and ensure compliant reporting.",
    tags: ["STP", "Payroll", "ATO", "Reporting"],
    trustScore: 88,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "Set up STP in my accounting software",
      "Fix STP reporting error",
      "What data must STP include?"
    ]
  },
  // Localization
  {
    id: "aussie-english",
    name: "Australian English Style",
    slug: "aussie-english",
    category: "Localization",
    categorySlug: "localization",
    description: "Australian English spelling, terminology, and communication style for content localization.",
    problem: "US/UK English differs from Australian English in spelling, terminology, and idioms.",
    solution: "Localize content to Australian English standards including dates, currency, measurements, and spelling.",
    tags: ["English", "Spelling", "Localization", "Style"],
    trustScore: 95,
    updatedAt: "2026-03-29",
    agents: ["cursor", "claude-code", "openclaw", "codex"],
    prompts: [
      "Convert this text to Australian English",
      "What's the Australian term for 'apartment'?",
      "Format dates and currency for Australia"
    ]
  }
];

export const categories = [
  { name: "Tax & Finance", slug: "tax-and-finance", count: 6 },
  { name: "Government Services", slug: "government-services", count: 4 },
  { name: "Legal & Compliance", slug: "legal-compliance", count: 9 },
  { name: "Business Operations", slug: "business-operations", count: 3 },
  { name: "Localization", slug: "localization", count: 1 }
];

export const agents = [
  { id: "cursor", name: "Cursor", icon: "▲" },
  { id: "claude-code", name: "Claude Code", icon: "◆" },
  { id: "openclaw", name: "OpenClaw", icon: "🦎" },
  { id: "codex", name: "Codex", icon: "◎" }
];

export function getSkillBySlug(slug: string): Skill | undefined {
  return skills.find(s => s.slug === slug);
}

export function getSkillsByCategory(categorySlug: string): Skill[] {
  return skills.filter(s => s.categorySlug === categorySlug);
}

// Premium Skills (MIT licensed, can sell)
export interface PremiumSkill {
  id: string;
  name: string;
  slug: string;
  description: string;
  stars: string;
  license: string;
  features: string[];
  category: "agents" | "memory" | "research" | "workflows" | "learning";
}

export const premiumSkills: PremiumSkill[] = [
  {
    id: "ecc",
    name: "Everything Claude Code",
    slug: "everything-claude-code",
    description: "The ultimate collection: 47 agents, 181 skills, 72 commands, rules for 12 languages, hooks, and MCP configs.",
    stars: "145,000+",
    license: "MIT",
    features: ["47 ready-to-use agents", "181 skills", "72 slash commands", "12 language rules", "MCP configs"],
    category: "agents"
  },
  {
    id: "mempalace",
    name: "MemPalace",
    slug: "mempalace",
    description: "Structured memory palace for LLMs — wings/halls/rooms hierarchy with +34% retrieval accuracy.",
    stars: "7,000+",
    license: "MIT",
    features: ["Hierarchical memory", "+34% retrieval", "Persistent context", "Cross-session memory"],
    category: "memory"
  },
  {
    id: "autoagent",
    name: "AutoAgent",
    slug: "autoagent",
    description: "Meta-agent that autonomously improves task agents overnight. Set it and forget it.",
    stars: "3,700+",
    license: "MIT",
    features: ["Self-improving agents", "Overnight optimization", "Task-specific tuning"],
    category: "agents"
  },
  {
    id: "autoresearch",
    name: "AutoResearchClaw",
    slug: "autoresearchclaw",
    description: "Autonomous research pipeline — ran 50 experiments in 72 hours with +411% improvement.",
    stars: "—",
    license: "MIT",
    features: ["Autonomous experiments", "+411% improvement", "Research automation"],
    category: "research"
  },
  {
    id: "openevolve",
    name: "OpenEvolve",
    slug: "openevolve",
    description: "Architecture search engine that discovers optimal model architectures autonomously.",
    stars: "—",
    license: "MIT",
    features: ["Architecture search", "Model optimization", "Auto-discovery"],
    category: "research"
  },
  {
    id: "evoagentx",
    name: "EvoAgentX",
    slug: "evoagentx",
    description: "Self-evolving agent framework based on cutting-edge survey research.",
    stars: "—",
    license: "MIT",
    features: ["Self-evolution", "Survey-based", "Framework"],
    category: "agents"
  },
  {
    id: "wiki-compiler",
    name: "Wiki Compiler",
    slug: "wiki-compiler",
    description: "Living Knowledge Base plugin — compiles markdown into topic wiki with 90% context reduction.",
    stars: "—",
    license: "MIT",
    features: ["90% context reduction", "Auto wiki generation", "Knowledge compilation"],
    category: "memory"
  },
  {
    id: "simplemem",
    name: "SimpleMem",
    slug: "simplemem",
    description: "Clean, simple memory system for LLMs. Companion to AutoResearchClaw.",
    stars: "—",
    license: "MIT",
    features: ["Simple API", "LLM memory", "Research companion"],
    category: "memory"
  },
  {
    id: "karpathy-skills",
    name: "Karpathy CLAUDE.md",
    slug: "karpathy-skills",
    description: "4 principles for LLM coding derived from Andrej Karpathy's observations.",
    stars: "—",
    license: "MIT",
    features: ["Minimal code", "Goal-driven", "Karpathy principles"],
    category: "workflows"
  },
  {
    id: "best-practice",
    name: "Claude Code Best Practice",
    slug: "best-practice",
    description: "Curated best practices from Karpathy, ECC creator, OpenClaw founder, and top practitioners.",
    stars: "—",
    license: "MIT",
    features: ["Curated practices", "Expert insights", "Production patterns"],
    category: "workflows"
  },
  {
    id: "my-setup",
    name: "My Claude Code Setup",
    slug: "my-setup",
    description: "Starter settings, memory bank system, hooks, and slash commands for Claude Code.",
    stars: "—",
    license: "MIT",
    features: ["Starter template", "Memory bank", "Custom hooks"],
    category: "workflows"
  },
  {
    id: "howto",
    name: "Claude HowTo",
    slug: "howto",
    description: "10-module learning path — takes you from beginner to power user in 11-13 hours.",
    stars: "—",
    license: "MIT",
    features: ["10 modules", "11-13 hours", "Copy-paste templates"],
    category: "learning"
  },
  {
    id: "ultimate-guide",
    name: "Ultimate Guide",
    slug: "ultimate-guide",
    description: "Production-ready templates forked by 15+ research groups. Includes quizzes and cheatsheet.",
    stars: "—",
    license: "CC BY-SA 4.0",
    features: ["Production templates", "Research-grade", "Quizzes included"],
    category: "learning"
  },
  {
    id: "academic-workflow",
    name: "Academic Workflow",
    slug: "academic-workflow",
    description: "Multi-agent review workflow with quality gates and adversarial QA. Ready to fork.",
    stars: "—",
    license: "MIT",
    features: ["Multi-agent review", "Quality gates", "Adversarial QA"],
    category: "workflows"
  }
];

// Paid Skills - Trading & Money Making
export interface PaidSkill {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: "trading" | "money-making" | "automation";
  features: string[];
  preview: string[];
}

export const paidSkills: PaidSkill[] = [
  // Trading Skills
  {
    id: "asx-trading",
    name: "ASX Trading Agent",
    slug: "asx-trading",
    description: "Expert ASX stock analysis, technical indicators, sector insights, and Australian market timing.",
    price: 29,
    category: "trading",
    features: [
      "Real-time ASX analysis prompts",
      "Technical indicators (RSI, MACD, MAs)",
      "Sector analysis (XMJ, XFJ, XTJ)",
      "Australian tax considerations (CGT, franking)",
      "Broker comparisons"
    ],
    preview: ["Analyze CBA stock fundamentals", "Best time to trade ASX"]
  },
  {
    id: "crypto-trading-au",
    name: "Crypto Trading Australia",
    slug: "crypto-trading-au",
    description: "Australian crypto trading with ATO tax rules, local exchange comparisons, and DeFi guidance.",
    price: 29,
    category: "trading",
    features: [
      "Australian exchange comparisons",
      "ATO crypto tax rules built-in",
      "CGT calculations for crypto",
      "DeFi staking tax treatment",
      "Risk management frameworks"
    ],
    preview: ["Calculate CGT on crypto sale", "Compare Swyftx vs CoinSpot"]
  },
  {
    id: "forex-trading-au",
    name: "Forex Trading Australia",
    slug: "forex-trading-au",
    description: "ASIC-compliant forex trading with AUD pairs focus, RBA analysis, and session timing.",
    price: 29,
    category: "trading",
    features: [
      "AUD pairs analysis",
      "ASIC broker comparisons",
      "RBA statement interpretation",
      "Session timing for AEST",
      "Position sizing calculator"
    ],
    preview: ["Analyze AUD/USD drivers", "Best forex session for Australians"]
  },
  // Money Making Skills
  {
    id: "dropshipping-au",
    name: "Dropshipping Australia",
    slug: "dropshipping-au",
    description: "Complete Australian dropshipping setup including suppliers, legal requirements, and GST compliance.",
    price: 49,
    category: "money-making",
    features: [
      "Australian supplier directory",
      "ABN and GST guidance",
      "Consumer law compliance",
      "Shipping strategy for AU",
      "Product research methods"
    ],
    preview: ["Find winning products for AU", "Set up GST for Shopify"]
  },
  {
    id: "affiliate-marketing-au",
    name: "Affiliate Marketing Australia",
    slug: "affiliate-marketing-au",
    description: "Top Australian affiliate programs, legal disclosure requirements, and content strategies.",
    price: 39,
    category: "money-making",
    features: [
      "50+ Australian affiliate programs",
      "Commission rates database",
      "Legal disclosure templates",
      "SEO content frameworks",
      "Conversion optimization"
    ],
    preview: ["Best finance affiliate programs AU", "Write comparison article"]
  },
  {
    id: "property-investment-au",
    name: "Property Investment Australia",
    slug: "property-investment-au",
    description: "Australian property investment analysis with state-by-state stamp duty, yields, and tax strategies.",
    price: 49,
    category: "money-making",
    features: [
      "Rental yield calculator",
      "Stamp duty by state",
      "Negative gearing analysis",
      "Depreciation guidance",
      "Due diligence checklists"
    ],
    preview: ["Analyze investment property", "Calculate stamp duty NSW"]
  },
  // Automation Skills
  {
    id: "lead-generation",
    name: "Lead Generation Agent",
    slug: "lead-generation",
    description: "Automated lead generation for Australian businesses — LinkedIn, email, and compliance built-in.",
    price: 39,
    category: "automation",
    features: [
      "LinkedIn outreach templates",
      "Cold email frameworks",
      "Australian Spam Act compliance",
      "Lead qualification (BANT)",
      "CRM integration prompts"
    ],
    preview: ["Write cold email for accountants", "LinkedIn connection request"]
  },
  {
    id: "content-creation",
    name: "Content Creation Agent",
    slug: "content-creation",
    description: "Multi-platform content creation optimized for Australian audiences and time zones.",
    price: 29,
    category: "automation",
    features: [
      "Platform-specific guidelines",
      "Australian timing optimization",
      "Content frameworks (PAS, AIDA)",
      "SEO content templates",
      "Hook formulas library"
    ],
    preview: ["LinkedIn post for AU business", "SEO blog outline"]
  },
  {
    id: "customer-service",
    name: "Customer Service Agent",
    slug: "customer-service",
    description: "Australian Consumer Law compliant customer service with response templates and escalation handling.",
    price: 29,
    category: "automation",
    features: [
      "ACL refund/guarantee rules",
      "Response templates library",
      "Escalation protocols",
      "Multi-channel guidelines",
      "Complaint resolution"
    ],
    preview: ["Handle refund request", "Defuse angry customer"]
  }
];

export const paidSkillCategories = [
  { name: "Trading & Investing", slug: "trading", emoji: "📈" },
  { name: "Money Making", slug: "money-making", emoji: "💰" },
  { name: "Automation", slug: "automation", emoji: "🤖" }
];

// Plugins — installable extensions that supercharge skills
export interface Plugin {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: "mcp" | "browser-ext" | "skill-addon";
  features: string[];
  preview: string[];
  installs: string;
}

export const plugins: Plugin[] = [
  // MCP Servers
  {
    id: "xero-mcp",
    name: "Xero MCP Server",
    slug: "xero-mcp",
    description: "Connect any AI agent directly to Xero. Read invoices, create bills, sync transactions — all from your agent.",
    price: 49,
    category: "mcp",
    features: [
      "OAuth2 with Xero handled for you",
      "Read invoices, contacts, accounts",
      "Create bills and journal entries",
      "Multi-org support for bookkeepers",
      "Works with Claude, Codex, Cursor, OpenClaw"
    ],
    preview: ["Show me unpaid invoices over 30 days", "Create a bill from this PDF receipt"],
    installs: "npx @aussie-agents/xero-mcp"
  },
  {
    id: "ato-tax-mcp",
    name: "ATO Tax Tables MCP",
    slug: "ato-tax-mcp",
    description: "Live, auto-updating ATO tax tables exposed as an MCP server. PAYG, GST, FBT — always current.",
    price: 39,
    category: "mcp",
    features: [
      "Live PAYG withholding calculations",
      "GST rates and BAS components",
      "FBT 2026-27 tables included",
      "Tax-free threshold + HELP/HECS handling",
      "Auto-updates when ATO releases new tables"
    ],
    preview: ["PAYG for $1,500/week with HELP", "FBT on $80,000 car fringe benefit"],
    installs: "npx @aussie-agents/ato-tax-mcp"
  },
  {
    id: "square-au-mcp",
    name: "Square AU MCP Server",
    slug: "square-au-mcp",
    description: "Square POS integration for Australian merchants. Sales, inventory, customers — all queryable from your agent.",
    price: 49,
    category: "mcp",
    features: [
      "Real-time sales data",
      "Inventory updates and alerts",
      "Customer history queries",
      "Refund and payout reporting",
      "AU GST handling built-in"
    ],
    preview: ["Today's takings vs same day last week", "Top 5 selling items this month"],
    installs: "npx @aussie-agents/square-au-mcp"
  },
  {
    id: "xero-myob-mcp",
    name: "Xero + MYOB Bridge MCP",
    slug: "xero-myob-mcp",
    description: "One MCP server, both AU accounting platforms. Bookkeepers can switch clients without switching tools.",
    price: 59,
    category: "mcp",
    features: [
      "Unified API across Xero & MYOB",
      "Per-client credential management",
      "Cross-platform reporting",
      "Reconciliation helpers",
      "Migration assistance prompts"
    ],
    preview: ["Compare Q1 P&L between Xero and MYOB clients", "Migrate this client's chart of accounts"],
    installs: "npx @aussie-agents/xero-myob-mcp"
  },
  // Browser Extensions
  {
    id: "aussie-tax-ext",
    name: "Aussie Tax Browser Extension",
    slug: "aussie-tax-ext",
    description: "Click any AU dollar amount on any webpage — get GST, PAYG, and super breakdown instantly.",
    price: 19,
    category: "browser-ext",
    features: [
      "Right-click any $ amount → tax breakdown",
      "Salary calculator overlay on Seek/LinkedIn",
      "GST detector on shopping sites",
      "Super contribution calculator",
      "Chrome, Edge, Brave"
    ],
    preview: ["Right-click $85,000 → see take-home", "Detect GST in cart automatically"],
    installs: "Chrome Web Store install link emailed"
  },
  {
    id: "rea-ext",
    name: "Realestate.com.au Skill Extension",
    slug: "rea-ext",
    description: "Adds AI agent analysis to every property listing on realestate.com.au — yield, growth, comparable sales.",
    price: 29,
    category: "browser-ext",
    features: [
      "Rental yield auto-calculated",
      "5-year growth estimate per suburb",
      "Comparable sales overlay",
      "Subdivision potential check (NSW LEP)",
      "Save shortlists to your agent"
    ],
    preview: ["Yield on this $850k Byron unit", "Subdivision potential of 18 Left Bank Rd"],
    installs: "Chrome Web Store install link emailed"
  },
  {
    id: "seek-ext",
    name: "Seek Salary Analyzer",
    slug: "seek-ext",
    description: "Browser extension for Seek.com.au — instant market comparison and salary negotiation advice on every job.",
    price: 19,
    category: "browser-ext",
    features: [
      "Market comparison per role+location",
      "Negotiation script generator",
      "Take-home calculator with super",
      "Cost-of-living adjustment by city",
      "Track salary history across listings"
    ],
    preview: ["Is $120k for senior dev in Sydney fair?", "Counter-offer script for this Seek listing"],
    installs: "Chrome Web Store install link emailed"
  },
  {
    id: "gumtree-ext",
    name: "Gumtree Deal Scout",
    slug: "gumtree-ext",
    description: "Scores Gumtree listings, flags scams, suggests counter-offers — bargain hunter's secret weapon.",
    price: 19,
    category: "browser-ext",
    features: [
      "Deal score per listing (0-100)",
      "Scam keyword detector",
      "Counter-offer suggestion",
      "Price history vs comparable items",
      "Watchlist with alerts"
    ],
    preview: ["Score this iPhone listing", "Counter-offer for $2,500 dirt bike"],
    installs: "Chrome Web Store install link emailed"
  },
  // Skill Add-ons
  {
    id: "bas-autofiler",
    name: "BAS Auto-Filer Add-on",
    slug: "bas-autofiler",
    description: "Add-on for ATO BAS Expert skill — auto-prepares your BAS as a fillable PDF every quarter.",
    price: 29,
    category: "skill-addon",
    features: [
      "Quarterly BAS PDF generation",
      "GST + PAYG totals pre-filled",
      "Pulls from Xero/MYOB if MCP installed",
      "Email reminders 14 days before due",
      "Lodgement-ready output"
    ],
    preview: ["Prepare my Q3 BAS", "Email me the BAS PDF when ready"],
    installs: "Drop-in add-on for ATO BAS Expert skill"
  },
  {
    id: "property-comparables",
    name: "Property Comparables Add-on",
    slug: "property-comparables",
    description: "Pulls live CoreLogic-style comparable sales for any AU suburb — turns the Property Investment skill into a pro tool.",
    price: 39,
    category: "skill-addon",
    features: [
      "Last 12 months comparable sales",
      "Median price by bed/bath/land",
      "Days-on-market trends",
      "NSW Valuer General data integration",
      "Export to spreadsheet"
    ],
    preview: ["Comparables for 3-bed in Suffolk Park", "Days-on-market trend in Bangalow"],
    installs: "Drop-in add-on for Property Investment skill"
  },
  {
    id: "asx-quotes",
    name: "ASX Live Quotes Add-on",
    slug: "asx-quotes",
    description: "Adds delayed-15min ASX quotes to the ASX Trading skill via Yahoo Finance — no broker needed.",
    price: 19,
    category: "skill-addon",
    features: [
      "15-min delayed quotes (free tier)",
      "Optional real-time upgrade ($10/mo)",
      "Volume + intraday OHLC",
      "Watchlist with end-of-day summary",
      "Sector ETF tracking"
    ],
    preview: ["Current price of CBA", "End-of-day summary for my watchlist"],
    installs: "Drop-in add-on for ASX Trading skill"
  },
  {
    id: "multi-agent-orch",
    name: "Multi-Agent Orchestrator Add-on",
    slug: "multi-agent-orch",
    description: "Turn any single skill into a 3-agent harness: Planner → Generator → Evaluator. Output quality goes up dramatically.",
    price: 49,
    category: "skill-addon",
    features: [
      "Planner-Generator-Evaluator pattern",
      "Quality gates between agents",
      "Adversarial review built in",
      "Works with any AAS skill",
      "Configurable retry logic"
    ],
    preview: ["Run my BAS prep through 3 agents", "Adversarial review my legal contract"],
    installs: "Drop-in add-on for any skill"
  }
];

export const pluginCategories = [
  { name: "MCP Servers", slug: "mcp", emoji: "🔌" },
  { name: "Browser Extensions", slug: "browser-ext", emoji: "🌐" },
  { name: "Skill Add-ons", slug: "skill-addon", emoji: "⚡" }
];
