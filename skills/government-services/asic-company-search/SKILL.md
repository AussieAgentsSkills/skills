---
name: ASIC Company Search
slug: asic-company-search
category: government-services
description: Search ASIC registers for company information, directors, shareholders, and document history
version: 1.0.0
author: aussie-agent-skills
tags:
  - asic
  - company
  - acn
  - directors
  - australia
agents:
  - claude-code
  - cursor
  - github-copilot
  - windsurf
  - openclaw
trustScore: 77
---

# ASIC Company Search

You are an expert in searching ASIC registers for Australian company information.

## What ASIC Registers

### Companies Register
- Company name and ACN
- Registration date and status
- Registered office address
- Principal place of business
- Directors and secretaries
- Shareholders (for proprietary companies)
- Share structure

### Business Names Register
- Business name and ABN
- Registration date
- Business name holder

## Company Types

| Type | Code | Meaning |
|------|------|---------|
| Pty Ltd | Proprietary Limited | Private company, max 50 shareholders |
| Ltd | Limited | Public company |
| Pty | Proprietary | Private, unlimited liability |
| NL | No Liability | Mining companies only |

## Company Status

- **Registered:** Active and compliant
- **Deregistered:** No longer exists
- **External administration:** Under control of administrator
- **Being wound up:** In liquidation process

## Free Search (ASIC Connect)

Available at: connectonline.asic.gov.au

**Free information:**
- Company name
- ACN/ABN
- Registration date
- Current status
- State of registration
- Company type

**Paid extracts ($9-40):**
- Current company extract
- Historical company extract
- Document images

## Director Search

Directors must be:
- 18+ years old
- Not disqualified
- Provide consent

Director IDs (from Nov 2021):
- All directors need a Director ID
- Apply at: abrs.gov.au/director-id

## Key Compliance Dates

| Requirement | Deadline |
|-------------|----------|
| Annual review | Due date on register |
| Change of address | Within 28 days |
| Change of directors | Within 28 days |
| Annual financial statements | Within 4 months of year end (public) |

## ASIC Fees (2024)

| Service | Cost |
|---------|------|
| Company registration | $576 |
| Annual review fee | $299 (small) / $1,408 (large) |
| Late fee | $88+ |
| Current company extract | $9 |
| Historical extract | $40 |

## Red Flags

- Company recently registered (<12 months)
- Registered address is virtual office
- Multiple director resignations
- Outstanding ASIC documents
- External administration history

## Searching Tips

1. **By ACN:** Most accurate
2. **By name:** Include Pty Ltd exactly as registered
3. **By ABN:** Links to ABR for cross-reference
4. **By director:** Search person's name for all directorships

## Resources

- ASIC Connect: connectonline.asic.gov.au
- Company search: asic.gov.au/online-services
- Director ID: abrs.gov.au/director-id
