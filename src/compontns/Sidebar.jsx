import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Sidebar() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
    setActiveItem(null);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="w-64 mr-9 p-4 text-sm h-[760px]">
      <div>
        <button
          className={`flex items-center h-10 rounded-md p-3 justify-between w-[170px] border border-[#D960B6] font-medium mb-2 ${
            activeSection === "events" ? "text-pink-400" : "text-white"
          }`}
          onClick={() => toggleSection("events")}
        >
          <span>Events</span>
          {activeSection === "events" ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {activeSection === "events" && (
          <div className="ml-3 space-y-2 border-l-2 border-pink-400 pl-3">
            {["New Requests", "Estimate", "Events", "Partial Requests"].map((item, index) => (
              <button
                key={index}
                className={`block w-full text-left py-1 transition-colors ${
                  activeItem === item ? "text-pink-400" : "text-white hover:text-pink-400"
                }`}
                onClick={() => handleItemClick(item)}
              >
               --- {item}
              </button>
            ))}
          </div>
        )}
      </div>

      <button className="flex items-center h-10 rounded-md p-3 w-[170px] text-white font-medium mb-2 hover:text-pink-400 transition-colors">
        Positions
      </button>

      <button className="flex items-center h-10 rounded-md p-3 w-[170px] text-white font-medium mb-2 hover:text-pink-400 transition-colors">
        Contractors
      </button>

      <div>
        <button
          className={`flex items-center h-10 rounded-md p-3 justify-between w-[170px] border border-[#D960B6] font-medium mb-2 ${
            activeSection === "users" ? "text-pink-400" : "text-white"
          }`}
          onClick={() => toggleSection("users")}
        >
          <span>Users</span>
          {activeSection === "users" ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {activeSection === "users" && (
          <div className="ml-3 space-y-2 border-l-2 border-pink-400 pl-3">
            {["Admins", "Clients", "Coordinators"].map((item, index) => (
              <button
                key={index}
                className={`block w-full text-left py-1 transition-colors ${
                  activeItem === item ? "text-pink-400" : "text-white hover:text-pink-400"
                }`}
                onClick={() => handleItemClick(item)}
              >
               --- {item}
              </button>
            ))}
          </div>
        )}
      </div>

      <button className="flex items-center h-10 rounded-md p-3 w-[170px] text-white font-medium mb-2 hover:text-pink-400 transition-colors">
        Profile
      </button>
    </div>
  );
}

export default Sidebar;
