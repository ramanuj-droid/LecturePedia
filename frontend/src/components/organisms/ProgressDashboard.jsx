import React from "react";
import StatsGrid from "../molecules/StatsGrid";
import CourseProgressCard from "../molecules/CourseProgressCard";
import { STATS, COURSE_PROGRESS } from "../../constants/progress";

const ProgressDashboard = () => {
  return (
    <div className="progress-dashboard">

      {/* STATS */}
      <h2>Stats</h2>
      <StatsGrid stats={STATS} />

      {/* COURSE PROGRESS */}
      <h2>Course Progress</h2>
      <div className="course-progress">
        {COURSE_PROGRESS.map((course) => (
          <CourseProgressCard key={course.id} course={course} />
        ))}
      </div>

    </div>
  );
};

export default ProgressDashboard;