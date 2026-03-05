import React from "react";

interface StatCardProps {
  title: string;
  value: number;
  icon: string;
  trendline: string;
  desc: string;
  background: string;
  descColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trendline, desc, background, descColor }) => {
  return (
    <div className="rounded-xl p-4 flex flex-col justify-between" style={{ backgroundColor: background, color: "#fff" }}>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-sm font-semibold">{title}</h2>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      <div className="flex items-center mt-4 gap-2">
        <img src={trendline} alt="trend" className="w-4 h-4" />
        <p className="text-xs" style={{ color: descColor || "#fff" }}>{desc}</p>
      </div>
    </div>
  );
};

export default StatCard;
