import { useState } from "react";
import Card from "./Card";
import chabi from '../assets/images/chabi.jpg';

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("News");
  const menuItems = ["News", "Tax & Legal", "Help Guides", "Investment"];
  const cardData = [
    { image: chabi, title: "Registries opened for Noida's Sports City", para: "Dec 22, 2025" },
    { image: chabi, title: "UP moves to title based property registration", para: "Dec 17, 2025" },
    { image: chabi, title: "Unified circle rates in UP", para: "Dec 17, 2025" },
    { image: chabi, title: "Unified RERA Portal: How it benefits ...", para: "Sep 05, 2025" },
    { image: chabi, title: "No stamp duty on small housing plots in Harya", para: "Aug 28, 2025" }
  ];

  const styles = {
    outerDivStyle: "border border-gray-400 rounded-2xl flex flex-col overflow-hidden ps-[38%] min-w-full relative pe-2",
    figureStyle: "absolute left-0 bottom-0 top-0 w-[35%]",
    imageStyle: "h-full",
    titleStyle: "font-bold text-[14px] pt-3",
    paraStyle: "pb-2 pt-2"
  };
  return (
    <section>
      <nav className="px-6">
        <ul className="flex gap-3 overflow-x-auto scrollbar-hide text-[14px] text-[#041533]">
          {menuItems.map((item) => {
            return (
              <li key={item} onClick={() => setActiveTab(item)}
                className={`cursor-pointer pb-2 px-3 transition-all text-nowrap ${activeTab === item ? "font-bold border-b-2 border-blue-500" : "text-[#42526E]"}`}
              > {item}</li>
            )
          })}
        </ul>
      </nav>
      <div className="my-8 flex overflow-x-auto scrollbar-hide gap-4 px-4">
        {cardData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} para={card.para} styles={styles} />
        ))}
      </div>
    </section >
  )
}

export default NewsSection;
