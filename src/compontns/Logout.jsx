import { ChevronLeft } from "lucide-react";

function LogoutButton() {
    return (
      <div className="flex items-center gap-3 rounded-md p-1 justify-center text-pink-300 hover:text-pink-100 cursor-pointer  bg-black">
        <ChevronLeft size={20} />
        <span className="text-2xl mr-8 mb-1 ">Logout</span>
      </div>
    )
  }
  export default LogoutButton;