/**
 * Placeholder for a detail only the owner can supply (see FILL-IN-CHECKLIST.md).
 * Shows a yellow marker on the dev server; renders nothing in the live build,
 * so no made-up information is ever published.
 */
export function Fill({ what }: { what: string }) {
  if (process.env.NODE_ENV === 'production') return null;
  return <mark className="fill-in">[FILL IN: {what}]</mark>;
}

export const isProd = process.env.NODE_ENV === 'production';
