"use client";

import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import "../app/page.css";

const itemsData = [
  { id: "intro", label: "Introduction" },
  { id: "image", label: "Image", isImage: true },
  { id: "blog", label: "Blog and Articles" },
  { id: "works", label: "Works" },
  { id: "experience", label: "Work Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cta", label: "Let's build something amazing together! Get in touch." },
  { id: "contact", label: "Contact Info" },
  { id: "skills", label: "Skills and Technologies" },
];

const SortableItem = ({
  id,
  label,
  isImage,
}: {
  id: string;
  label: string;
  isImage?: boolean;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="item"
    >
      {isImage ? (
        <div className="relative overflow-hidden w-full h-full">
          <Image
            src="/assets/me/_DSC8035.JPG"
            alt="Person Image"
            fill
            className="object-cover"
          />
        </div>
      ) : (
        label
      )}
    </div>
  );
};

const LandingPage = () => {
  const [items, setItems] = useState(itemsData);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={items.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="container">
          {items.map((item) => (
            <SortableItem
              key={item.id}
              id={item.id}
              label={item.label}
              isImage={item.isImage}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default LandingPage;
