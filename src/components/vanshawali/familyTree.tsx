"use client";
import { familyData } from "@/utils/constants";
import SectionHeader from "../general/sectionHeader";
import { useState } from "react";
import Image from "next/image";
import { Modal } from "antd";

interface FamilyNode {
  name: string;
  children?: FamilyNode[];
}

interface FlatLineageItem {
  name: string;
  parent: string | null;
  generation: number;
}

const buildFlatLineageMap = (rootNodes: FamilyNode[]): FlatLineageItem[] => {
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

  const maxGen = Math.max(...flatLineage.map((item) => item.generation));

  const generationsArray = Array.from(
    { length: maxGen },
    (_, index) => index + 1
  );
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 p-4 sm:p-8">
      <div className="mx-auto mb-10 flex max-w-5xl flex-col items-center py-16 justify-between">
        <SectionHeader
          eyebrow="वंशावली • Genealogy"
          title="Raghuvanshi Vanshavali"
          subtitle="Lineage Chart & Parent–Child Records of Deorai"
        />

        <button
          onClick={() => setOpen(true)}
          className="bg-[#c2410c] transition-all duration-200 active:scale-95 cursor-pointer text-white px-5 py-2 rounded-md hover:bg-[#9a3412]"
        >
          View Complete Chart
        </button>
      </div>

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

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width="95%"
        centered
        styles={{
          body: {
            padding: 0,
            background: "#fafaf9",
          },
        }}
      >
        <div className="flex justify-center overflow-auto max-h-[85vh] bg-stone-50 p-6">
          <Image
            src="/lineage.jpg"
            alt="Raghuvanshi Vanshavali"
            width={2200}
            height={3200}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </Modal>
    </div>
  );
}
