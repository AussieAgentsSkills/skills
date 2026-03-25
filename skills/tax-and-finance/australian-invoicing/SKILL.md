---
name: Australian Invoicing
slug: australian-invoicing
category: tax-and-finance
description: Create compliant Australian tax invoices, recipient created tax invoices, and e-invoicing
version: 1.0.0
author: aussie-agent-skills
tags:
  - invoice
  - tax-invoice
  - gst
  - abn
  - australia
agents:
  - claude-code
  - cursor
  - github-copilot
  - windsurf
  - openclaw
trustScore: 81
---

# Australian Invoicing Requirements

You are an expert in Australian invoicing requirements, tax invoices, and e-invoicing.

## Tax Invoice Requirements

### For Sales ≤$1,000 (inc GST)
Must include:
- "Tax invoice" stated
- Seller's identity (name or ABN)
- ABN
- Date of issue
- Brief description of items
- GST amount (or statement "Total includes GST")
- Total price

### For Sales >$1,000 (inc GST)
All of the above PLUS:
- Buyer's identity or ABN
- Quantity of each item
- Price of each item (ex GST or inc GST)

## GST Calculation on Invoice

| Show | Format |
|------|--------|
| GST-exclusive pricing | Item: $100.00 + GST: $10.00 = Total: $110.00 |
| GST-inclusive pricing | Item: $110.00 (inc GST) |
| GST statement | "Total price includes GST of $XX.XX" |

## No ABN Withholding

If supplier doesn't provide ABN:
- Withhold 47% of payment
- Pay withheld amount to ATO
- Report on BAS

Exceptions: supplies ≤$75, domestic nature

## Invoice vs Tax Invoice

| Invoice | Tax Invoice |
|---------|-------------|
| Any commercial document | Must meet ATO requirements |
| For any sale | Required for GST-registered suppliers |
| No set format | Specific information required |
| Can't claim GST credits | Buyer needs this to claim GST credits |

## E-Invoicing (Peppol)

### What is it?
Electronic invoice sent directly between accounting systems using Peppol network.

### Benefits
- Faster payment (30% faster on average)
- Fewer errors
- Automatic matching
- Government contracts may require it

### Getting Started
1. Check if your software supports Peppol
2. Register as Peppol participant
3. Update invoicing process

## Payment Terms

Common Australian terms:
| Term | Meaning |
|------|---------|
| COD | Cash on delivery |
| Net 7 | Due in 7 days |
| Net 14 | Due in 14 days |
| Net 30 | Due in 30 days |
| EOM | End of month |
| 2/10 Net 30 | 2% discount if paid in 10 days |

## Invoice Numbering

Requirements:
- Sequential (gaps allowed, but queries may arise)
- Unique
- Consistent system

Good practice:
- INV-2024-0001, INV-2024-0002
- Include date prefix for easy sorting

## Record Keeping

Keep invoices for:
- **5 years** from when lodging related tax return
- Or 5 years from when transaction completed
- Whichever is later

Format:
- Paper or electronic
- Must be readable
- Backup recommended

## Credit Notes

Required information:
- "Credit note" stated
- Seller's ABN
- Date
- Original invoice reference
- Description of adjustment
- GST adjustment amount
- Reason for credit

## Recipient Created Tax Invoice (RCTI)

When buyer creates the invoice:
- Written agreement required
- Both parties GST registered
- Buyer must issue within 28 days
- Supplier can't issue separate invoice

Common in: agriculture, construction, commission arrangements

## Resources

- ATO tax invoices: ato.gov.au/business/gst/tax-invoices
- E-invoicing: ato.gov.au/e-invoicing
- ABN Lookup: abr.business.gov.au
