import { useState } from "react"
import {Bell,LayoutGrid,Menu,X} from "lucide-react"
import Sidebar from "../compontns/Sidebar"
import LogoutButton from "./Logout"
import EventTable from "./EventTable"
import SearchInput from "./Searchinput"
import bitCoin from "../assets/bitcoin-01.png"
import profileIcon from "../assets/Ellipse 1.png"

export default function figma() {
  const [expandedSections, setExpandedSections] = useState({
    events: true,
    users: true,
  })
  const [menuOpen, setMenuOpen] = useState(false) 

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleMenu = () => setMenuOpen(!menuOpen) 

  const eventRequests = Array(10)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      name: "Filled Name",
      startDate: "Jan 12, 2024",
      endDate: "Jan 14, 2024",
      clientName: "Muhammad Asad",
      contactInfo: "+1 234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
    }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#010002] via-[#280F3C] to-[#60218B] text-white relative">


      <header className="flex justify-between items-center p-4  ">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="lg:hidden p-2 text-pink-300 hover:text-pink-100">
            <Menu size={24} />
          </button>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r  flex items-center justify-center">
            <span className="text-2xl font-bold"><img src={bitCoin}/></span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-pink-300 hover:text-pink-100 hidden lg:block">
            <LayoutGrid size={20} />
          </button>
          <button className="p-2 text-pink-300 hover:text-pink-100">
            <Bell size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r border-1 border-[#D960B6]  flex items-center justify-center overflow-hidden">
              <img
                src={profileIcon}
                alt="Profile"
                className="object-cover h-24 "
              />
            </div>
            <div className="text-right mr-2">
              <p className="text-sm">
                Hi, <span className="text-green-400">Muhammad Asad</span>
              </p>
              <p className="text-xs text-gray-300">Welcome back!</p>
            </div>
          </div>
        </div>
      </header>




      {menuOpen && <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={toggleMenu}></div>}

      <div className="flex flex-col lg:flex-row h-[calc(100vh-73px)]">
        <aside
          className={`fixed inset-y-0 left-0  lg:relative lg:w-[220px] border-r border-pink-500/20 transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0 w-1/2 max-w-[300px]" : "-translate-x-full lg:translate-x-0"
          }`}
        >






          <div className="p-4 space-y-6 flex border-[#D960B6] h-[870px] border-1 rounded-xl flex-col lg:block ml-1">
            <button onClick={toggleMenu} className="lg:hidden text-white self-end">
              <X size={24} />
            </button>





            <Sidebar/>
            <LogoutButton />
          </div>


        </aside>








        <main className="flex-1 p-4 overflow-auto ml-5 border-1 border-[#D960B6] rounded-xl  ">
          <div className="h-6 mb-4 flex justify-between items-center">
            <h1 className=" text-2xl font-bold">Event Requests</h1>

            {!menuOpen && (
              <div className="flex items-center gap-2">
                <SearchInput />
              </div>
            )}
          </div>

          <EventTable eventRequests={eventRequests} />
        </main>


      </div>


    </div>
  )
}