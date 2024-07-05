import React from "react";
import TaskList from "@/components/TaskList";

const TodayPage = () => {
  // Placeholder data for tasks due today
  const tasks = [
    { id: 1, name: "Task 1", dueDate: "2023-10-01", completed: false },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Today</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TodayPage;