import { useState } from "react";

import chabi from '../assets/images/chabi.jpg';
import NewsCard from "./NewsCard";

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("News");

  const menuItems = ["News", "Tax & Legal", "Help Guides", "Investment"];

  let cardData = []

  if (activeTab === "News") {
    cardData = [
      { image: chabi, title: "Registries opened for Noida's Sports City", para: "Dec 22, 2025" },
      { image: chabi, title: "UP moves to title based property registration", para: "Dec 17, 2025" },
      { image: chabi, title: "Unified circle rates in UP", para: "Dec 17, 2025" },
      { image: chabi, title: "Unified RERA Portal: How it benefits ...", para: "Sep 05, 2025" },
      { image: chabi, title: "No stamp duty on small housing plots in Harya", para: "Aug 28, 2025" }
    ];
  } else if (activeTab === "Tax & Legal") {
    cardData = [
      { image: chabi, title: "Construction delay What to do next?", para: "Aug 20, 2025" },
      { image: chabi, title: "Impact of possession delays on rental income", para: "Dec 17, 2025" },
      { image: chabi, title: "How to assess a project's appreach ...", para: "Dec 17, 2025" },
      { image: chabi, title: "What to ask residents before buying a home?", para: "Sep 05, 2025" },
      { image: chabi, title: "Steps to verify a conveyance deed", para: "Aug 28, 2025" }
    ]
  } else if (activeTab === "Help Guides") {
    cardData = [
      { image: chabi, title: "Homebyer's stamp duty and registration", para: "Aug 20, 2025" },
      { image: chabi, title: "Shortlist homes smarter with 99shorts", para: "Dec 17, 2025" },
      { image: chabi, title: "5 broker questions for old resale homes", para: "Dec 17, 2025" },
      { image: chabi, title: "Stages of home buying & role of a broker", para: "Sep 05, 2025" },
      { image: chabi, title: "How to fix structural damage due to ...", para: "Aug 28, 2025" }
    ]
  } else {
    cardData = [
      { image: chabi, title: "Comparing your new home with current one", para: "Aug 20, 2025" },
      { image: chabi, title: "Home loan process for army personnel", para: "Dec 17, 2025" },
      { image: chabi, title: "Guide to home loan process for lawyers", para: "Dec 17, 2025" },
      { image: chabi, title: "Home loan with low CIBIL score", para: "Sep 05, 2025" },
      { image: chabi, title: "Home loan from an HFC or a bank?", para: "Aug 28, 2025" }
    ]
  }



  const styles = {
    outerDivStyle: "border border-gray-400 rounded-2xl flex flex-col overflow-hidden ps-[110px] max-w-[288px] flex-shrink-0 flex-grow-0 relative pe-2 ",
    figureStyle: "absolute left-0 bottom-0 top-0 h-[94px] w-[35%]",
    imageStyle: "h-full",
    titleStyle: "font-bold text-[14px] pt-3 ",
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
      <NewsCard cardData={cardData} styles={styles} />
      <div className="px-4">
        <button className="bg-[#0069E1] text-white font-bold text-[14px] rounded-4xl border-none w-full px-5 py-3">Read realty news, guides & articles</button>
      </div>
    </section >
  )
}

export default NewsSection;
