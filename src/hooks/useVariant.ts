import { useState, useEffect } from 'react';
import { Variant } from '../types';
import { VariantStorage } from '../utils/variantStorage';

export function useVariant(variantId: string | undefined) {
  const [variant, setVariant] = useState<Variant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!variantId) {
      setError('Идентификатор варианта не указан');
      setIsLoading(false);
      return;
    }

    try {
      const loadedVariant = VariantStorage.getVariant(variantId);
      if (loadedVariant) {
        setVariant(loadedVariant);
      } else {
        setError('Вариант не найден');
      }
    } catch (e) {
      setError('Ошибка при загрузке варианта');
    } finally {
      setIsLoading(false);
    }
  }, [variantId]);

  const updateVariant = (updatedVariant: Variant) => {
    if (!variantId) return;
    
    try {
      VariantStorage.saveVariant(variantId, updatedVariant);
      setVariant(updatedVariant);
    } catch (e) {
      setError('Ошибка при сохранении варианта');
    }
  };

  return { variant, isLoading, error, updateVariant };
}