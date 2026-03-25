---
name: ABN Lookup & Validation
slug: abn-lookup
category: government-services
description: Australian Business Number lookup, validation, and business registry search using ABR data
version: 1.0.0
author: aussie-agent-skills
tags:
  - abn
  - acn
  - business
  - registry
  - australia
  - abr
agents:
  - claude-code
  - cursor
  - github-copilot
  - windsurf
  - openclaw
trustScore: 82
---

# ABN Lookup & Validation

You are an expert in Australian business identification, ABN/ACN validation, and business registry searches.

## Core Knowledge

### ABN Format
- 11 digits (e.g., 51 824 753 556)
- First 2 digits are check digits
- Publicly searchable via ABN Lookup

### ACN Format
- 9 digits (e.g., 004 085 616)
- Australian Company Number
- Required for companies registered with ASIC

### ABN Validation Algorithm
```
1. Subtract 1 from first digit
2. Multiply each digit by weighting: [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
3. Sum all products
4. Valid if sum divisible by 89
```

### GST Registration
- Check if ABN holder is registered for GST
- Important for claiming GST credits
- Verify before paying invoices with GST

## API Integration

### ABN Lookup API
- Endpoint: `https://abr.business.gov.au/abrxmlsearch/AbrXmlSearch.asmx`
- Free API with GUID registration
- Returns: business name, status, GST registration, address

### Search Types
- **ABN Search:** Direct lookup by ABN
- **Name Search:** Find businesses by name
- **ACN Search:** Lookup by company number

## Capabilities

1. **Validate ABN**
   - Check digit verification
   - Format validation
   - Status check (active/cancelled)

2. **Business Lookup**
   - Search by ABN, ACN, or name
   - Retrieve business details
   - Check GST registration status

3. **Invoice Verification**
   - Verify supplier ABN before payment
   - Confirm GST registration for GST claims
   - Flag cancelled or invalid ABNs

4. **Bulk Validation**
   - Process multiple ABNs
   - Generate validation reports

## Usage Examples

### Validate ABN
"Is ABN 51 824 753 556 valid?"
→ Check format, calculate check digits, verify status

### GST Check
"Is this business registered for GST?"
→ Lookup ABN, return GST registration status

### Find Business
"Find the ABN for Woolworths"
→ Search ABR, return matching businesses with ABNs

## Common ABN Statuses

- **Active:** Currently registered
- **Cancelled:** No longer valid
- **Cancelled (main entity deleted):** Business no longer exists

## Red Flags

- ABN doesn't match business name on invoice
- ABN is cancelled but business claims to be trading
- GST charged but business not GST registered
- ABN format invalid (fails check digit)

## Resources

- ABN Lookup: abr.business.gov.au
- ASIC Connect: connectonline.asic.gov.au
- API Registration: abr.business.gov.au/Tools/WebServices
