import slugify from 'slugify';

export function generateSlug(text: string): string {
  // First, apply slugify with proper options
  let slug = slugify(text, {
    lower: true,
    strict: true,
    replacement: '-',  // Replace spaces with dashes
    remove: /[*+~.()'"!:@]/g  // Remove specific characters
  });

  // Remove any duplicate dashes that might have been created
  slug = slug.replace(/-+/g, '-');

  // Remove trailing dash if exists
  slug = slug.replace(/-+$/, '');

  return slug;
}
