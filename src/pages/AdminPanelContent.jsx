import React, { useEffect, useState } from "react";

const AdminPanelContent = () => {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  const fetchBookings = () => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.log("Fetch Error:", err));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus = (id, status) => {
    fetch(`http://localhost:5000/api/bookings/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    }).then(() => fetchBookings());
  };

  const deleteBooking = (id) => {
    if (!window.confirm("Delete booking?")) return;

    fetch(`http://localhost:5000/api/bookings/${id}`, {
      method: "DELETE",
    }).then(() => fetchBookings());
  };

  const filtered = bookings.filter(
    (b) =>
      b.name?.toLowerCase().includes(search.toLowerCase()) ||
      b.phone?.includes(search)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Panel - All Bookings</h1>

      <input
        type="text"
        placeholder="Search..."
        className="p-2 mb-4 w-full border rounded"
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={fetchBookings}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Refresh
      </button>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Car</th>
              <th className="p-3">Issue</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="p-3">{b.id}</td>
                <td className="p-3">{b.name}</td>
                <td className="p-3">{b.phone}</td>
                <td className="p-3">{b.car_model}</td>
                <td className="p-3">{b.description}</td>
                <td className="p-3">{b.appointment_date}</td>

                <td className="p-3">
                  <select
                    className="border px-2 py-1"
                    value={b.status || "Pending"}
                    onChange={(e) => updateStatus(b.id, e.target.value)}
                  >
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Completed</option>
                  </select>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => deleteBooking(b.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanelContent;
