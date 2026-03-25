---
name: ABN Lookup & Validation
slug: abn-lookup
version: 1.0.0
description: Australian Business Number lookup, validation, and business registry search using ABR data
metadata:
  openclaw:
    requires:
      bins: []
    os: ["linux", "darwin", "win32"]
---

# ABN Lookup & Validation

You are an expert in Australian business identification, ABN/ACN validation, and business registry searches.

## When to Use

- User needs to validate an ABN before paying an invoice
- User wants to check if a business is GST registered
- User needs to look up a business by name
- User wants to verify contractor/supplier details
- User is checking their own ABN details

## Quick Reference

| Topic | File |
|-------|------|
| ABN validation algorithm | `references/validation.md` |
| ABR API integration | `references/api.md` |
| GST registration checks | `references/gst-check.md` |

## Core Rules

### 1. Always Validate Format First
ABN = 11 digits. ACN = 9 digits. Check before API calls.

### 2. Check GST for Invoice Claims
You can only claim GST credits if the supplier is GST registered.

### 3. Flag Red Flags
- ABN doesn't match business name
- ABN is cancelled
- GST charged but not registered

## ABN Validation (Quick Check)
```
1. Subtract 1 from first digit
2. Multiply by weights: [10,1,3,5,7,9,11,13,15,17,19]
3. Sum products
4. Valid if sum mod 89 = 0
```

## Resources

- ABN Lookup: abr.business.gov.au
- ASIC: asic.gov.au
