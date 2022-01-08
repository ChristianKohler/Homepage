import slug from "url-slug";

export function createSlug(title: string): string {
  return slug(title, { camelCase: false });
}
