const images = import.meta.glob("../assets/projects/*.{jpg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export function resolveProjectImage(filename?: string): string | undefined {
  if (!filename) return undefined;
  const entry = Object.entries(images).find(([path]) => path.endsWith(`/${filename}`));
  return entry?.[1];
}
