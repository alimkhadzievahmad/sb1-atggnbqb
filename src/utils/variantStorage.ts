import { Variant } from '../types';

const STORAGE_PREFIX = 'variant-';

export class VariantStorage {
  static getVariant(variantId: string): Variant | null {
    try {
      const stored = localStorage.getItem(`${STORAGE_PREFIX}${variantId}`);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      console.error('Error loading variant:', e);
      return null;
    }
  }

  static saveVariant(variantId: string, variant: Variant): void {
    try {
      localStorage.setItem(
        `${STORAGE_PREFIX}${variantId}`,
        JSON.stringify(variant)
      );
    } catch (e) {
      console.error('Error saving variant:', e);
      throw new Error('Failed to save variant');
    }
  }

  static getAllVariants(): Variant[] {
    const variants: Variant[] = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(STORAGE_PREFIX)) {
        const variant = this.getVariant(key.slice(STORAGE_PREFIX.length));
        if (variant) {
          variants.push(variant);
        }
      }
    }

    return variants.sort((a, b) => 
      (b.createdAt || 0) - (a.createdAt || 0)
    );
  }
}