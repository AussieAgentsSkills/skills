# ABN Validation Algorithm

## Format
ABN: 11 digits (can have spaces, e.g., 51 824 753 556)

## Validation Steps

1. Remove spaces, verify 11 digits
2. Subtract 1 from the first digit
3. Apply weights to each digit:
   `[10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]`
4. Multiply each digit by its weight
5. Sum all products
6. **Valid if sum % 89 == 0**

## Example: 51 824 753 556

| Position | Digit | Adjusted | Weight | Product |
|----------|-------|----------|--------|---------|
| 1 | 5 | 4 | 10 | 40 |
| 2 | 1 | 1 | 1 | 1 |
| 3 | 8 | 8 | 3 | 24 |
| 4 | 2 | 2 | 5 | 10 |
| 5 | 4 | 4 | 7 | 28 |
| 6 | 7 | 7 | 9 | 63 |
| 7 | 5 | 5 | 11 | 55 |
| 8 | 3 | 3 | 13 | 39 |
| 9 | 5 | 5 | 15 | 75 |
| 10 | 5 | 5 | 17 | 85 |
| 11 | 6 | 6 | 19 | 114 |

Sum = 534
534 mod 89 = 0 ✓ Valid

## ACN Validation
ACN: 9 digits
Weights: [8, 7, 6, 5, 4, 3, 2, 1]
Sum products, add check digit, must be divisible by 10.
