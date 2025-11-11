#!/usr/bin/env python3
"""
Product Extraction Script
Extracts all product names from HTML catalog files
Generates a product list with unique IDs for translation
"""

import re
import sys
from pathlib import Path

def extract_products_from_html(filename):
    """Extract product names from a single HTML catalog file"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ File not found: {filename}")
        return []

    # Pattern to find product-name divs
    pattern = r'<div class="product-name"[^>]*>([^<]+)</div>'
    products = re.findall(pattern, content)

    # Clean up products (strip whitespace)
    products = [p.strip() for p in products if p.strip()]

    return products

def extract_all_products(catalog_dir='.'):
    """Extract products from all catalog HTML files"""

    # Find all catalog files
    catalog_files = [
        'catalog_diabetic_hospital.html',
        'catalog_mobility_aids.html',
        'catalog_orthotic_prosthetic.html',
        'catalog_patient_care.html',
        'catalog_specialized.html',
        'catalog_surgical_dressings.html',
        'catalog_therapeutic.html'
    ]

    all_products = []
    product_sources = {}  # Track which files contain each product

    print("=" * 60)
    print("PRODUCT EXTRACTION REPORT")
    print("=" * 60)
    print()

    for catalog_file in catalog_files:
        filepath = Path(catalog_dir) / catalog_file
        if not filepath.exists():
            print(f"⚠️  Skipping {catalog_file} (not found)")
            continue

        products = extract_products_from_html(filepath)
        print(f"📁 {catalog_file}")
        print(f"   Found {len(products)} products")

        for product in products:
            if product not in product_sources:
                product_sources[product] = []
            product_sources[product].append(catalog_file)

        all_products.extend(products)
        print()

    # Get unique products
    unique_products = list(dict.fromkeys(all_products))  # Preserves order

    print("=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print()
    print(f"Total product instances: {len(all_products)}")
    print(f"Unique products: {len(unique_products)}")
    print(f"Duplicates: {len(all_products) - len(unique_products)}")
    print()

    # Find products that appear in multiple catalogs
    duplicates = {prod: files for prod, files in product_sources.items() if len(files) > 1}
    if duplicates:
        print(f"📋 Products appearing in multiple catalogs: {len(duplicates)}")
        for i, (product, files) in enumerate(list(duplicates.items())[:5]):
            print(f"   {i+1}. {product[:50]}...")
            print(f"      In: {', '.join(files)}")
        if len(duplicates) > 5:
            print(f"   ... and {len(duplicates) - 5} more")
        print()

    return unique_products

def save_product_list(products, output_file='/tmp/product_list.txt'):
    """Save product list with IDs to a file"""

    print(f"💾 Saving product list to {output_file}")
    print()

    with open(output_file, 'w', encoding='utf-8') as f:
        for i, product in enumerate(products, start=1):
            # Format: prod.0001|||PRODUCT NAME
            product_id = f"prod.{i:04d}"
            f.write(f"{product_id}|||{product}\n")

    print(f"✅ Saved {len(products)} products")
    print()
    print("Next steps:")
    print(f"1. View products: cat {output_file}")
    print(f"2. View batch 1: sed -n '1,50p' {output_file}")
    print(f"3. View batch 2: sed -n '51,100p' {output_file}")
    print()

def main():
    """Main function"""

    # Extract products
    products = extract_all_products()

    if not products:
        print("❌ No products found!")
        sys.exit(1)

    # Save product list
    save_product_list(products)

    print("=" * 60)
    print("✅ EXTRACTION COMPLETE")
    print("=" * 60)

if __name__ == "__main__":
    main()
