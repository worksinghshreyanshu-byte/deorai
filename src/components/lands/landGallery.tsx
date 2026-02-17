"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as AntdImage } from "antd";

interface Props {
  images: string[];
  title: string;
}

export default function LandGallery({ images, title }: Props) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  return (
    <div className="mt-20">
      <h3 className="text-2xl font-serif text-center text-[#5b2c0f] mb-10">
        Gallery
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => {
              setPreviewIndex(index);
              setPreviewOpen(true);
            }}
            className="relative h-[280px] rounded-xl overflow-hidden shadow-md group cursor-pointer"
          >
            <Image
              src={img}
              alt={`${title} ${index}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div style={{ display: "none" }}>
        <AntdImage.PreviewGroup
          preview={{
            visible: previewOpen,
            current: previewIndex,
            onVisibleChange: (visible) => setPreviewOpen(visible),
          }}
        >
          {images.map((img, index) => (
            <AntdImage key={index} src={img} />
          ))}
        </AntdImage.PreviewGroup>
      </div>
    </div>
  );
}
