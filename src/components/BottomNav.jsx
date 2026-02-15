import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const BottomNav = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  return (
    <div className="fixed bottom-0 w-full h-20 justify-between flex z-50 text-[12px] rounded-t-3xl" style={{
      background: "radial-gradient(circle at 50% -10px, transparent 35px, white 36px)",
      filter: "drop-shadow(0 -5px 5px rgba(0,0,0,0.1))"
    }}>
      <div className="leftBox flex flex-1 justify-evenly ps-4 pe-1 gap-2">
        <div className={`${selectedItem === "Home" ? "bg-[#F0F9FF]" : ""} flex-1 flex flex-col items-center gap-1 pt-3 pb-3 px-1 rounded-b-3xl`} onClick={() => setSelectedItem("Home")}>
          <figure>
            <FontAwesomeIcon icon="fa-solid fa-house" style={{ fontSize: "18px" }} />
          </figure>
          <h2 className={selectedItem === "Home" ? "font-bold" : ""}>Home</h2>
        </div>
        <div className={`${selectedItem === "Insights" ? "bg-[#F0F9FF]" : ""} flex-1 flex flex-col items-center gap-1 pt-3 pb-3 px-1 rounded-b-3xl`} onClick={() => setSelectedItem("Insights")}>
          <figure>
            <FontAwesomeIcon icon="fa-solid fa-lightbulb" style={{ fontSize: "18px" }} />
          </figure>
          <h2 className={selectedItem === "Insights" ? "font-bold" : ""}>Insights</h2>
        </div>
      </div>
      <div className="centerBox relative w-20 flex flex-col items-center justify-end pb-2">
        <div className="absolute left-2.5 -top-10 bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-white shadow-lg">
          {/* Using string syntax like your other icons */}
          <FontAwesomeIcon icon="fa-solid fa-plus" className="text-xl" />
        </div>
        <h2 className="font-bold text-gray-700 mt-8">Sell/Rent</h2>
      </div>
      <div className="rightBox flex flex-1 justify-evenly pe-4 ps-1 gap-2">
        <div className={`${selectedItem === "Shortlisted" ? "bg-[#F0F9FF]" : ""} flex-1 flex flex-col items-center gap-1 pt-3 pb-3 px-1 rounded-b-3xl`} onClick={() => setSelectedItem("Shortlisted")}>
          <figure>
            <FontAwesomeIcon icon="fa-solid fa-star" style={{ fontSize: "18px" }} />
          </figure>
          <h2 className={selectedItem === "Shortlisted" ? "font-bold" : ""}>Shortlisted</h2>
        </div>
        <div className={`${selectedItem === "Profile" ? "bg-[#F0F9FF]" : ""} flex-1 flex flex-col items-center gap-1 pt-3 pb-3 px-1 rounded-b-3xl`} onClick={() => setSelectedItem("Profile")}>
          <figure>
            <FontAwesomeIcon icon="fa-solid fa-circle-user" style={{ fontSize: "18px" }} />
          </figure>
          <h2 className={selectedItem === "Profile" ? "font-bold" : ""}>Profile</h2>
        </div></div>
    </div >
  )
}

export default BottomNav
