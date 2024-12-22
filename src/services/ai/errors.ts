import { AIError } from './types';

export function handleAIError(error: any): AIError {
  if (error.error?.code === 'insufficient_quota') {
    return {
      code: 'quota_exceeded',
      message: 'API quota exceeded. Working in offline mode.',
      type: 'api_error'
    };
  }

  if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
    return {
      code: 'network_error',
      message: 'Network connection error. Working in offline mode.',
      type: 'network_error'
    };
  }

  return {
    code: 'unknown_error',
    message: 'An unexpected error occurred. Working in offline mode.',
    type: 'api_error'
  };
}