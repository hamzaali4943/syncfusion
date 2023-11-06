import * as React from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  TreeGridComponent,
} from "@syncfusion/ej2-react-treegrid";

const Tasks = () => {
  const orderData = [
    {
      taskName: "Idea & Concept",
      assignee: "Hamza Zafar",
      dueDate: "Sunday",
      subtasks: [
        {
          taskName: "Subtask 1",
          assignee: "Hamza zafar",
          dueDate: "Sunday",
        },
        {
          taskName: "Subtask 2",
          assignee: "Hamza zafar",
          dueDate: "Sunday",
        },
      ],
    },
    {
      taskName: "Set visual tone",
      assignee: "Hamza zafar",
      dueDate: "Sunday",
      subtasks: [
        {
          taskName: "Subtask 1",
          assignee: "Hamza zafar",
          dueDate: "Sunday",
        },
        {
          taskName: "Subtask 2",
          assignee: "Hamza zafar",
          dueDate: "Sunday",
        },
      ],
    },
    {
      taskName: "Due Date",
      assignee: "Hamza zafar",
      dueDate: "Sunday",
      subtasks: [
        {
          taskName: "Subtask 1",
          assignee: "Hamza zafar",
          dueDate: "Sunday",
        },
        {
          taskName: "Subtask 2",
          assignee: "Hamza zafar",
          dueDate: "Sunday",
        },
      ],
    },
  ];

  return (
    <TreeGridComponent
      dataSource={orderData}
      treeColumnIndex={0}
      childMapping="subtasks"
      height="315"
    >
      <ColumnsDirective>
        <ColumnDirective field="taskName" headerText="Task Name" />
        <ColumnDirective
          field="assignee"
          headerText="Assignee"
          template={(props) => {
            return (
              <div className="flex items-center space-x-1">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg"
                  alt=""
                />{" "}
                <span>{props.assignee}</span>
              </div>
            );
          }}
          width="180"
        />
        <ColumnDirective field="dueDate" headerText="Due Date" width="100" />
        <ColumnDirective field="add" headerText="+" width="60" />
      </ColumnsDirective>
    </TreeGridComponent>
  );
};
export default Tasks;
