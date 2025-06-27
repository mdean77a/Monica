// Configuration for API endpoints
export const config = {
  // In production on Vercel, use relative URLs (Vercel handles routing)
  // In development or with custom API URL, use full URL
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL || '',
  
  // API endpoints
  endpoints: {
    chat: '/api/chat',
    health: '/api/health'
  }
}

// Helper function to get full API URL
export const getApiUrl = (endpoint: string) => {
  return `${config.apiBaseUrl}${endpoint}`
} 