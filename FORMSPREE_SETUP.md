# Formspree Setup for Email Collection

The website uses Formspree to collect:
1. Skill submissions → emailed to you for review
2. Newsletter signups → builds your email list

## Setup Steps

1. Go to https://formspree.io and create account with joyjacob42920@gmail.com

2. Create TWO forms:
   
   **Form 1: Skill Submissions**
   - Name: "Skill Submissions"
   - Get the form ID (looks like: f/xpwzgvqr)
   - Update in: website/src/app/submit/page.tsx
   
   **Form 2: Newsletter**
   - Name: "Newsletter Signups" 
   - Get the form ID
   - Update in: website/src/app/newsletter/page.tsx

3. In each form settings:
   - Enable email notifications to your email
   - Set up auto-response (optional but nice)
   - Export to Google Sheets for easy list management

## Current Placeholder IDs

The code currently uses placeholder IDs:
- Skill submissions: f/movqgwrz (REPLACE THIS)
- Newsletter: f/xwpkgjvn (REPLACE THIS)

## Alternative: Use Supabase

Since you have Supabase connected, we could also store submissions in a database table instead of Formspree. Let me know if you prefer this approach.
