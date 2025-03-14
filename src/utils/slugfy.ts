import slugify from 'slugify';

export function generateSlug(text: string): string {
  // Configure slugify to handle special characters that might not be handled well by default
  slugify.extend({
    'ç': 'c', 'Ç': 'C',
    'ã': 'a', 'Ã': 'A',
    'õ': 'o', 'Õ': 'O',
    'á': 'a', 'Á': 'A',
    'à': 'a', 'À': 'A',
    'â': 'a', 'Â': 'A',
    'é': 'e', 'É': 'E',
    'ê': 'e', 'Ê': 'E',
    'í': 'i', 'Í': 'I',
    'ó': 'o', 'Ó': 'O',
    'ô': 'o', 'Ô': 'O',
    'ú': 'u', 'Ú': 'U',
    'ü': 'u', 'Ü': 'U'
  });

  // First, apply slugify with proper options
  let slug = slugify(text, {
    lower: true,
    strict: true,
    replacement: '-',  // Replace spaces with dashes
    remove: /[*+~,.()'"!:@]/g  // Remove specific characters
  });

  // Remove any duplicate dashes that might have been created
  slug = slug.replace(/-+/g, '-');

  // Remove trailing dash if exists
  slug = slug.replace(/-+$/, '');

  // Remove leading dash if exists
  slug = slug.replace(/^-+/, '');

  return slug;
}
