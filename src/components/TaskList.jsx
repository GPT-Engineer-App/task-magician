import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Checkbox checked={task.completed} />
            <span className={`ml-2 ${task.completed ? "line-through" : ""}`}>
              {task.name}
            </span>
          </div>
          <span>{task.dueDate}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;