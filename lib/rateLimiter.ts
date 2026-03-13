const requests = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(ip: string, limit = 5, windowMs = 60000) {
  const now = Date.now();
  const record = requests.get(ip);

  if (!record || now > record.resetTime) {
    requests.set(ip, { count: 1, resetTime: now + windowMs });
    return { success: true, remaining: limit - 1, resetTime: now + windowMs };
  }

  if (record.count >= limit) {
    return {
      success: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  record.count++;
  return {
    success: true,
    remaining: limit - record.count,
    resetTime: record.resetTime,
  };
}

// Cleanup old entries every minute
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of requests.entries()) {
    if (now > record.resetTime) {
      requests.delete(ip);
    }
  }
}, 60000);
