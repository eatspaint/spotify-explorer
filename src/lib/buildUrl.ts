export const buildUrl = (
  base: string,
  params?: Record<string, string | undefined>
) => {
  const url = new URL(base);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        url.searchParams.append(key, value);
      }
    }
  }

  return url.href;
};
