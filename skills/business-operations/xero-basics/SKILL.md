---
name: Xero Basics for Australia
slug: xero-basics
category: business-operations
description: Using Xero accounting software for Australian businesses - BAS, payroll, invoicing, and compliance
version: 1.0.0
author: aussie-agent-skills
tags:
  - xero
  - accounting
  - bas
  - payroll
  - australia
agents:
  - claude-code
  - cursor
  - github-copilot
  - windsurf
  - openclaw
trustScore: 79
---

# Xero Basics for Australia

You are an expert in using Xero accounting software for Australian businesses.

## Australian-Specific Setup

### GST Settings
- Enable GST in Settings > Financial Settings
- Choose reporting basis: Cash or Accrual
- Set up GST rates: GST on Income, GST on Expenses, GST Free, BAS Excluded

### BAS Integration
- Xero auto-calculates BAS amounts
- Review in Reports > Accounting > Activity Statement
- Lodge directly through ATO integration or manually

### Single Touch Payroll (STP)
- Required for ALL employers
- Xero reports to ATO each pay run
- Finalise by 14 July each year

## Chart of Accounts (Australian)

Key accounts to set up:
| Account | Type | Tax |
|---------|------|-----|
| GST Collected | Liability | N/A |
| GST Paid | Asset | N/A |
| PAYG Withholding | Liability | N/A |
| Superannuation Payable | Liability | N/A |
| Bank Account | Bank | No GST |
| Sales Revenue | Revenue | GST on Income |
| Office Expenses | Expense | GST on Expenses |

## BAS Workflow in Xero

1. **Bank Reconciliation** - Match all transactions
2. **Review Suspense** - Clear any unallocated items
3. **Check GST codes** - Ensure correct on all transactions
4. **Run Activity Statement** - Reports > Activity Statement
5. **Review figures** - Compare to prior periods
6. **Lodge BAS** - Via ATO portal or accountant

## Payroll Setup

### Required Information
- TFN for each employee
- Super fund details
- Tax file declaration
- Employment type (Full-time/Part-time/Casual)

### Pay Items
- Ordinary hours
- Overtime (1.5x, 2x)
- Leave loading
- Allowances
- Deductions (union fees, salary sacrifice)

### Super
- Currently 11.5% (2024-25)
- Xero calculates automatically
- Pay via Xero's Superannuation portal or separately

## Key Reports for Australian Businesses

| Report | Use |
|--------|-----|
| Activity Statement | BAS preparation |
| Payroll Activity Summary | PAYG and super |
| Aged Receivables | Outstanding invoices |
| Aged Payables | Bills to pay |
| Profit and Loss | Performance |
| Balance Sheet | Financial position |
| GST Audit Report | Verify GST coding |

## Invoicing Best Practice

- Include ABN (auto-populated from settings)
- GST line shows "Tax Invoice" automatically if GST applies
- Set payment terms (Net 14, Net 30, etc.)
- Enable online payments (Stripe, PayPal)

## Bank Feeds

Supported Australian banks:
- All major banks (CBA, NAB, ANZ, Westpac)
- Regional banks
- Building societies
- Most credit unions

Setup: Bank Accounts > Add Bank Account > Connect

## Xero Pricing (Australia 2024)

| Plan | Monthly | Features |
|------|---------|----------|
| Starter | $29 | 20 invoices, 5 bills |
| Standard | $63 | Unlimited, BAS |
| Premium | $81 | Multi-currency, expenses |

## Common Errors to Avoid

1. **Wrong GST code** - Review before BAS
2. **Double entry** - Check for duplicates in reconciliation
3. **Missing super** - Set up correctly from start
4. **No bank reconciliation** - Do weekly minimum
5. **Wrong financial year** - Should be July-June

## Useful Integrations

- **Deputy/Tanda** - Time and attendance → Payroll
- **Stripe/Square** - Payment processing
- **Shopify** - E-commerce sync
- **Receipt Bank** - Bill capture
- **WorkflowMax** - Job costing

## Resources

- Xero Central: central.xero.com
- ATO integration: xero.com/accounting-software/ato-reporting
- Payroll: xero.com/au/accounting-software/payroll
