// import React, { useState, useEffect } from "react";
// import "./Dashboard.css";

// function Dashboard() {
//   const [appointments, setAppointments] = useState([]);

//   // Загружаем записи из сервера (или базы данных)
//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     // Имитация получения данных с сервера
//     const data = [
//       { id: 1, name: "Alice", date: "2024-10-30", service: "Haircut" },
//       { id: 2, name: "Bob", date: "2024-11-05", service: "Coloring" },
//     ];
//     setAppointments(data);
//   };

//   const deleteAppointment = (id) => {
//     setAppointments(appointments.filter(appointment => appointment.id !== id));
//   };

//   return (
//     <section className="dashboard">
//       <h2>My Appointments</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Client Name</th>
//             <th>Date</th>
//             <th>Service</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.map((appointment) => (
//             <tr key={appointment.id}>
//               <td>{appointment.name}</td>
//               <td>{appointment.date}</td>
//               <td>{appointment.service}</td>
//               <td>
//                 <button onClick={() => deleteAppointment(appointment.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </section>
//   );
// }

// export default Dashboard;
import React from "react";

const Dashboard = () => {
  return <h2>Welcome to your Dashboard</h2>;
};

export default Dashboard;
