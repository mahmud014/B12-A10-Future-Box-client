import React, { useEffect, useState } from "react";
import JobCard from "../Components/JobCard";
import Swal from "sweetalert2";
import LoadingPage from "../Components/LoadingPage";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch jobs from API (MongoDB)
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load jobs!",
        });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold">
          <LoadingPage></LoadingPage>
        </p>
      </div>
    );
  }

  return (
    <section className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('https://i.ibb.co/Y7sMhkJ5/restaurant-interior.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Join <span className="text-orange-500">DishDive</span>
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Be part of our passionate team and help create unforgettable dining
            experiences.
          </p>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Current Openings
        </h2>
        {jobs.length === 0 ? (
          <p className="text-center text-gray-500">
            No job openings available.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Jobs;
