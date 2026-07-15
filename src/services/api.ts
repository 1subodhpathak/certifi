export async function authenticatedFetch(endpoint: string, options: RequestInit = {}) {
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';
  const headers: Record<string, string> = {
    ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...(options.headers as Record<string, string>)
  };
  
  if (typeof window !== 'undefined' && (window as any).clerkGetToken) {
    try {
      const token = await (window as any).clerkGetToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    } catch (err) {
      console.error('Failed to get Clerk token for fetch:', err);
    }
  }
  
  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers
  });
  return response;
}
