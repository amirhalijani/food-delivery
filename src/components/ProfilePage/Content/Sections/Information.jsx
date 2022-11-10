import React from "react";

function Information() {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold text-xs text-[#545563]">First name</h2>
          <input
            type="text"
            placeholder="Jane"
            className="w-full mt-1 bg-transparent outline-none border-2 border-[#C7C8D2] rounded-md p-3"
          />
        </div>
        <div>
          <h2 className="font-semibold text-xs text-[#545563]">Last name</h2>
          <input
            type="text"
            placeholder="Robertson"
            className="w-full mt-1 bg-transparent outline-none border-2 border-[#C7C8D2] rounded-md p-3"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <div>
          <h2 className="font-semibold text-xs text-[#545563]">Email</h2>
          <input
            type="email"
            placeholder="Jane.robertson@example.com"
            className="w-full mt-1 bg-transparent outline-none border-2 border-[#C7C8D2] rounded-md p-3"
          />
        </div>
        <div>
          <h2 className="font-semibold text-xs text-[#545563]">Phone number</h2>
          <input
            type="number"
            placeholder="0000-000-0000"
            className="w-full mt-1 bg-transparent outline-none border-2 border-[#C7C8D2] rounded-md p-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Information;
