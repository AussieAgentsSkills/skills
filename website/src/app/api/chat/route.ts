import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";

const bundleContext: Record<string, string> = {
  "tradie-bundle": `You are an Australian business expert for tradies. You know about:
- BAS (Business Activity Statements) and GST obligations
- Superannuation requirements (currently 11.5% of ordinary time earnings)
- WorkCover and insurance requirements by state
- Trade licensing requirements (electrical, plumbing, building)
- Invoicing and quoting best practices
Always reference Australian law and ATO guidelines. Be practical and direct.`,

  "real-estate-bundle": `You are an Australian property investment expert. You know about:
- Property investment strategies in Australia
- Stamp duty rates by state (NSW, VIC, QLD, etc.)
- Rental yield calculations and analysis
- Property contracts and conveyancing
- Depreciation schedules and tax benefits
Always use current Australian property data and state-specific rules.`,

  "small-business-bundle": `You are an Australian small business expert. You know about:
- ABN registration and business structures (sole trader, company, partnership)
- BAS and GST (register if turnover >$75k)
- Payroll, PAYG withholding, and STP reporting
- Fair Work Act compliance, awards, and minimum wages
- Business insurance requirements
- Basic bookkeeping and record keeping
Always reference ATO, ASIC, and Fair Work guidelines.`,

  "finance-bundle": `You are an Australian personal finance expert. You know about:
- Tax deductions for individuals and investors
- Superannuation (contribution caps, preservation age)
- Investment options (shares, property, ETFs)
- Budgeting and savings strategies
Always reference current ATO rules and Australian financial regulations.`,

  "hospitality-bundle": `You are an Australian hospitality business expert. You know about:
- Food safety standards and HACCP requirements
- Liquor licensing by state
- Fair Work hospitality award wages and conditions
- Rostering and penalty rates
- GST and BAS for hospitality
Always reference Food Standards Australia, state liquor authorities, and Fair Work.`,

  "ecommerce-bundle": `You are an Australian e-commerce expert. You know about:
- Australian Consumer Law (ACL) and consumer guarantees
- GST for online sales (including to overseas customers)
- Shipping, returns, and refund policies
- Dropshipping regulations in Australia
- Privacy policy and terms of service requirements
Always reference ACCC guidelines and Australian law.`
};

export async function POST(request: NextRequest) {
  try {
    const { message, bundleId, history } = await request.json();
    
    const systemPrompt = bundleContext[bundleId] || bundleContext["small-business-bundle"];
    
    // Build messages array
    const messages = [
      { role: "system", content: systemPrompt + "\n\nKeep responses concise (2-3 paragraphs max). Use Australian spelling. Include specific numbers/rates where relevant. This is a demo - encourage users to get the full bundle for detailed guidance." },
      ...history.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content
      })),
      { role: "user", content: message }
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        max_tokens: 500,
        temperature: 0.7
      })
    });

    const data = await response.json();
    
    if (data.error) {
      console.error("OpenAI error:", data.error);
      return NextResponse.json({ 
        reply: "Sorry, I'm having trouble right now. Please try again in a moment." 
      });
    }

    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";
    
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ 
      reply: "Sorry, something went wrong. Please try again." 
    });
  }
}
