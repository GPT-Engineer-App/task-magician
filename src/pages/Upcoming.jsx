import React from "react";
import TaskList from "@/components/TaskList";

const UpcomingPage = () => {
  // Placeholder data for tasks due in the future
  const tasks = [
    { id: 1, name: "Task 1", dueDate: "2023-10-02", completed: false },
    { id: 2, name: "Task 2", dueDate: "2023-10-03", completed: false },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upcoming</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default UpcomingPage;