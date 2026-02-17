"use client";

import { FamilyMember, familyTree } from "@/utils/constants";

function TreeNode({ member }: { member: FamilyMember }) {
  return (
    <div className="flex flex-col items-center relative">

   
      <div
        className={`px-4 py-2 rounded-md border text-sm font-medium
        ${
          member.highlight
            ? "bg-red-800 text-white border-red-900"
            : "bg-white text-[#3E2F25] border-[#D9C7B8]"
        }`}
      >
        {member.name}
      </div>

      {/* Children */}
      {member.children && member.children.length > 0 && (
        <>
          {/* Vertical Line */}
          <div className="w-[2px] h-6 bg-[#D9C7B8]" />

          {/* Horizontal Children Row */}
          <div className="flex gap-6 mt-4">
            {member.children.map((child) => (
              <TreeNode key={child.id} member={child} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function FamilyTree() {
  return (
    <section className="bg-[#F5EFE6] py-20 overflow-x-auto">
      <div className="min-w-max flex justify-center">
        <TreeNode member={familyTree} />
      </div>
    </section>
  );
}
