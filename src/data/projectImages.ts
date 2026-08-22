const images = import.meta.glob("../assets/projects/*.{jpg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const logos = import.meta.glob("../assets/logos/*.{svg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function resolve(map: Record<string, string>, filename?: string): string | undefined {
  if (!filename) return undefined;
  const entry = Object.entries(map).find(([path]) => path.endsWith(`/${filename}`));
  return entry?.[1];
}

export function resolveProjectImage(filename?: string): string | undefined {
  return resolve(images, filename);
}

export function resolveProjectLogo(filename?: string): string | undefined {
  return resolve(logos, filename);
}
