import React from "react";
import buffs from "../data/buffs";
import BuffCard, { Buff } from "../components/BuffCard"; // импортируем тип Buff
import "./BuffsPage.css";

function BuffsPage() {
  return (
    <div className="buffs-page">
      {buffs.map((buff: Buff) => (
        <BuffCard key={buff.id} buff={buff} />
      ))}
    </div>
  );
}

export default BuffsPage;

