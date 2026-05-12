interface JsonLdProps {
  schema: Record<string, unknown>;
  id?: string;
}

export default function JsonLd({ schema, id }: JsonLdProps) {
  const rawType = (schema["@type"] as string | string[] | undefined) ?? "data";
  const typeId = Array.isArray(rawType) ? rawType.join("-") : rawType;
  const slug = String(typeId).toLowerCase().replace(/[^a-z0-9-]/g, "-");
  return (
    <script
      id={id ?? `jsonld-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
