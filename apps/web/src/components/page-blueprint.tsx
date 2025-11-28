import { SectionStack, SectionDefinition } from "./sections";
import { SchemaScript } from "./schema-script";

type PageBlueprintProps = {
  title: string;
  description: string;
  sections: SectionDefinition[];
  schema?: Record<string, unknown>;
};

export function PageBlueprint({ title, description, sections, schema }: PageBlueprintProps) {
  return (
    <>
      <section className="page-shell mt-12 space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-midnight/70">
          Experience Architecture
        </p>
        <h1 className="font-display text-4xl text-midnight">{title}</h1>
        <p className="text-lg text-slate-600">{description}</p>
      </section>
      <div className="page-shell">
        <SectionStack sections={sections} />
      </div>
      {schema ? <SchemaScript data={schema} /> : null}
    </>
  );
}

