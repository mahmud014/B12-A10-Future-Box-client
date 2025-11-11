import React from "react";
import Swal from "sweetalert2";

const JobCard = ({ job }) => {
  const handleApply = () => {
    Swal.fire({
      icon: "success",
      title: "Application Sent!",
      text: `You have successfully applied for ${job.title}.`,
      confirmButtonColor: "#f97316",
    });
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-1">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="text-gray-600 mb-3">
        <strong>Type:</strong> {job.type}
      </p>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <button onClick={handleApply} className="btn btn-primary w-full">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
