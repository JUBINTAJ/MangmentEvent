import { Eye } from "lucide-react";
import bgArrow from "../assets/Arrow.png";

function EventTable({ eventRequests }) {
  return (
    <div className="bg-black/20 rounded-lg  overflow-auto h-[800px]">
      <table className="min-w-full border-collapse text-xs">
        <thead className="bg-[#D960B6] text-white">
          <tr>
            {["Event Name", "Event Start", "Event End", "Client Name", "Contact Info", "Venue"].map(
              (title, i) => (
                <th key={i} className="py-4 px-3 text-left min-w-[100px]">
                  <div className="flex items-center gap-1">
                    <span>{title}</span>
                    {i !== 0 && <img src={bgArrow} className={`w-3 h-3 ${i === 2 ? "rotate-180" : ""}`} />}
                  </div>
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {eventRequests.map((event) => (
            <tr key={event.id} className="border-t border-[#D960B6] hover:bg-pink-500/5 min-h-[60px]"> 
              <td className="py-6 px-3 flex items-center gap-1">
                <Eye size={16} className="text-gray-400" />
                {event.name}
              </td>
              {[event.startDate, event.endDate, event.clientName, event.contactInfo, event.venue].map(
                (data, i) => (
                  <td key={i} className="py-6 px-3">{data}</td> 
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;
