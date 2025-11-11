#!/usr/bin/env python3
"""
Generate translation template for a batch of products
Usage: python3 generate_template.py START_NUM END_NUM
"""

import sys

def generate_template(start_num, end_num, product_file='/tmp/product_list.txt'):
    """Generate translation template for a batch of products"""

    try:
        with open(product_file, 'r', encoding='utf-8') as f:
            products = [line.strip().split('|||') for line in f if '|||' in line]
    except FileNotFoundError:
        print(f"Error: {product_file} not found")
        print("Please extract products first using the extraction script.")
        return

    if start_num < 1 or end_num > len(products):
        print(f"Error: Valid range is 1-{len(products)}")
        return

    batch = products[start_num-1:end_num]

    print(f"// ========== BATCH: Products {start_num}-{end_num} ({len(batch)} products) ==========\n")

    print("// ====================")
    print("// ENGLISH (en) section")
    print("// ====================")
    for prod_id, name in batch:
        print(f'        "{prod_id}": "{name}",')

    print("\n// ====================")
    print("// RUSSIAN (ru) section - ADD TRANSLATION IN PARENTHESES")
    print("// ====================")
    for prod_id, name in batch:
        print(f'        "{prod_id}": "{name} (RUSSIAN_TRANSLATION_HERE)",')

    print("\n// ====================")
    print("// UZBEK (uz) section - ADD TRANSLATION IN PARENTHESES")
    print("// ====================")
    for prod_id, name in batch:
        print(f'        "{prod_id}": "{name} (UZBEK_TRANSLATION_HERE)",')

    print("\n// ====================")
    print("// FARSI (fa) section - ADD TRANSLATION IN PARENTHESES")
    print("// ====================")
    for prod_id, name in batch:
        print(f'        "{prod_id}": "{name} (FARSI_TRANSLATION_HERE)",')

    print("\n// ====================")
    print("// TAJIK (tg) section - ADD TRANSLATION IN PARENTHESES")
    print("// ====================")
    for prod_id, name in batch:
        print(f'        "{prod_id}": "{name} (TAJIK_TRANSLATION_HERE)",')

    print(f"\n// ========== END BATCH {start_num}-{end_num} ==========")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python3 generate_template.py START_NUM END_NUM")
        print("Example: python3 generate_template.py 1 50")
        print("\nGenerates translation template for products START_NUM through END_NUM")
        sys.exit(1)

    try:
        start = int(sys.argv[1])
        end = int(sys.argv[2])

        if start > end:
            print("Error: START_NUM must be less than or equal to END_NUM")
            sys.exit(1)

        generate_template(start, end)

    except ValueError:
        print("Error: START_NUM and END_NUM must be integers")
        sys.exit(1)
