export function formatMongo<T>(data: T): T {
  if (Array.isArray(data)) {
    return data.map(item => formatMongo(item)) as unknown as T;
  }

  if (data && typeof data === "object") {
    const obj = data as Record<string, unknown>;

    const formatted: Record<string, unknown> = { ...obj };

    if ("_id" in formatted) {
      formatted.id = String(formatted._id);
      delete formatted._id;
    }

    for (const key in formatted) {
      formatted[key] = formatMongo(formatted[key]);
    }

    return formatted as T;
  }

  return data;
}