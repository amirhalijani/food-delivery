import React from "react";

function Notification() {
  return (
    <div className="mt-16">
      <h2 className="text-lg font-bold">Email notification</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div>
          <div className="flex">
            <input type="checkbox" name="Newdeal" />
            <h2 className="mx-3">New deal</h2>
          </div>
          <div className="flex my-3">
            <input type="checkbox" name="Newdeal" />
            <h2 className="mx-3">New resturants</h2>
          </div>
          <div className="flex">
            <input type="checkbox" name="Newdeal" />
            <h2 className="mx-3">Order statuses</h2>
          </div>
        </div>

        <div>
          <div className="flex">
            <input type="checkbox" name="Newdeal" />
            <h2 className="mx-3">Password changes</h2>
          </div>
          <div className="flex my-3">
            <input type="checkbox" name="Newdeal" />
            <h2 className="mx-3">Special offers</h2>
          </div>
          <div className="flex">
            <input type="checkbox" name="Newdeal" />
            <h2 className="mx-3">Newsletter</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
