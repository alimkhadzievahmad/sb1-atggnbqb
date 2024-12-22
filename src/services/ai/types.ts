export interface AIError {
  code: string;
  message: string;
  type: 'api_error' | 'validation_error' | 'network_error';
}

export interface AIResponse {
  content: string;
  error?: AIError;
  isOffline?: boolean;
}