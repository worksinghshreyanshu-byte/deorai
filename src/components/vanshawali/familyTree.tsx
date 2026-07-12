import { familyData } from "@/utils/constants";
import SectionHeader from "../general/sectionHeader";

interface FamilyNode {
  name: string;
  children?: FamilyNode[];
}

interface FlatLineageItem {
  name: string;
  parent: string | null;
  generation: number;
}

const buildFlatLineageMap = (
  rootNodes: FamilyNode[]
): FlatLineageItem[] => {
  const items: FlatLineageItem[] = [];

  const traverse = (
    nodes: FamilyNode[],
    parentName: string | null = null,
    gen = 1
  ) => {
    nodes.forEach((node) => {
      items.push({
        name: node.name,
        parent: parentName,
        generation: gen,
      });

      if (node.children?.length) {
        traverse(node.children, node.name, gen + 1);
      }
    });
  };

  traverse(rootNodes);

  return items;
};

export default function FamilyTreeUI() {
  const flatLineage = buildFlatLineageMap(familyData.rootGeneration);

  const maxGen = Math.max(
    ...flatLineage.map((item) => item.generation)
  );

  const generationsArray = Array.from(
    { length: maxGen },
    (_, index) => index + 1
  );

  return (
    <div className="min-h-screen bg-stone-50 p-4 sm:p-8">
      <SectionHeader
        eyebrow="वंशावली • Genealogy"
        title="Raghuvanshi Vanshavali"
        subtitle="Lineage Chart & Parent–Child Records of Deorai"
      />

      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        {generationsArray.map((genNumber) => {
          const membersInGen = flatLineage.filter(
            (member) => member.generation === genNumber
          );

          return (
            <div
              key={genNumber}
              className="flex flex-col items-start gap-4 md:flex-row"
            >
              {/* Generation Badge */}

              <div className="min-w-[100px] pt-2">
                <span className="block w-fit rounded-md border border-amber-200 bg-amber-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
                  Gen {genNumber}
                </span>
              </div>

              {/* Members */}

              <div className="flex flex-1 flex-wrap gap-4">
                {membersInGen.map((member) => (
                  <div
                    key={`${member.generation}-${member.name}`}
                    className="min-w-[200px] rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition-all hover:border-amber-400"
                  >
                    {member.parent ? (
                      <div className="mb-1 text-[11px] font-medium uppercase tracking-tight text-stone-400">
                        S/o{" "}
                        <span className="font-semibold text-amber-700">
                          {member.parent}
                        </span>
                      </div>
                    ) : (
                      <div className="mb-1 text-[11px] font-bold uppercase italic tracking-tight text-stone-400">
                        Root Ancestor
                      </div>
                    )}

                    <div className="font-serif text-lg font-bold text-stone-800">
                      {member.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}