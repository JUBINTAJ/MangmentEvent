import { ChevronDown, ChevronLeft, ChevronLeftCircle, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

function Eventright() {


    const [activeTab, setActiveTab] = useState("Assign Coordinator/Coordinator");

    const tabs = [
      "Event Details",
      "Assign Coordinator/Coordinator",
      "Session Management",
      "Generate SOW",
    ];

  return (
    <div>

      <card className="bg-[#1a1a2e]  ">
            <div className="flex items-center mb-4 ">
              <ChevronLeftCircle className="h-5 w-5 mr-2" />
              <h2 className="text-3xl font-semibold">
                Event Name <span className="text-gray-200 text-lg">(Venue Details)</span>
              </h2>
            </div>



            <div className="flex mb-6 border-1 w-[800px] rounded-xl border-[#D960B6] h-14">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm rounded-t-md transition-all duration-200  border-1 w-[700px] ${
            activeTab === tab
              ? "bg-pink-600 text-white"
              : "bg-transparent text-pink-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>




            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3 text-white">Assign Coordinator</h3>
                <div className="relative w-full">
      <input
        type="text"
        placeholder="Search Coordinator"
        className="w-full p-2 pl-3 pr-10 rounded-xl border border-white text-white bg-transparent  placeholder:text-xl"
      />
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
    </div>

                <button className="text-xl text-pink-500 mb-6"> Add New Coordinator</button>

                <h3 className="text-lg font-medium mb-3 text-white">Assign Contractor</h3>

                <div className="space-y-3  border shadow-sm shadow-amber-50 border-[#D960B6] bg-black w-[500px] p-4  rounded-2xl">
                  {[1, 2, 3, 4, 5].map((room) => (
                    <div
                      key={room}
                      className={`p-3 rounded-md ${room === 1 ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-transparent border border-[#D960B6]"}`}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Meeting Room {room}</h4>
                        <div className="flex items-center">
                          <span className="text-xs bg-pink-500 px-2 py-0.5 rounded-full mr-1">12 Positions</span>
                          {room === 1 ? (
                            <ChevronDown className="h-4 w-4" />


                          ) : (
                            <ChevronRight className="h-4 w-4 text-pink-500" />

                          )}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</div>
                    </div>
                  ))}
                </div>



              </div>

              <div>
                <div className="flex justify-between items-start  mb-10">
                  <div>
                    <h3 className="text-2xl font-medium">
                      Event Name <span className="text-gray-200 text-lg">(Venue Here)</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-2 mt-2 ">
                      <div className="bg-transparent border border-[#D960B6]  p-2 w-[795px] rounded text-sm">
                        <span className="text-gray-400">Start: </span>12-12-2023
                        <span className="text-gray-400 ml-[300px] ">Ends: </span>15-12-2023
                      </div>
                   
                      <div className="bg-transparent border border-[#D960B6] p-2 rounded text-sm col-span-2">
                        <span className="text-gray-400">Venue Address: </span>Some Location 12, Name Here, City, State
                      </div>
                    </div>
                  </div>
             
                </div>

<h5 >Postion</h5>
                <div className="bg-black rounded-md overflow-hidden w-[1090px]  border border-[#D960B6] -ml-[290px] mt-10 h-[470px]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-black border-b bord">
                        <th className="text-left p-3">Position</th>
                        <th className="text-left p-3">Time</th>
                        <th className="text-left p-3">Info</th>
                        <th className="text-left p-3">Quantity</th>
                        <th className="text-left p-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                        <tr key={index} className="border-b border-[#D960B6]">
                          <td className="p-3">Camera 1 (Video)</td>
                          <td className="p-3">9 am - 7 pm</td>
                          <td className="p-3">LP default</td>
                          <td className="p-3">20</td>
                          <td className="p-3">
                            <div className="relative">
                              <select className="w-full p-2 rounded bg-[#2a2a4a] border border-[#D960B6] text-white appearance-none pr-8">
                                <option>Select Contractor</option>
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />

                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  
                  <div className="flex items-center justify-center p-3 gap-2">
                    <ChevronLeft className="h-5 w-5" />
                    <div className="w-6 h-6 rounded-full flex items-center justify-center">1</div>
                    <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center">2</div>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center">3</div>
                    <ChevronRight className="h-5 w-5" />

                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <button className="bg-gradient-to-r bg-pink-700  text-white px-8 py-2 text-xl mr-[400px] rounded-md hover:opacity-90">
                    Save Edits
                  </button>
                </div>
              </div>
            </div>
          </card>

  
    </div>
  )
}

export default Eventright