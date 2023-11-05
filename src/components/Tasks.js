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
        <ColumnDirective field="assignee" headerText="Assignee" width="180" />
        <ColumnDirective field="dueDate" headerText="Due Date" width="100" />
        <ColumnDirective field="add" headerText="+" width="60" />
      </ColumnsDirective>
    </TreeGridComponent>
  );
};
export default Tasks;

// import React from "react";
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
// const Tasks = () => {
//     const sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
//     return (
//         <div className='p-4 bg-white'>
//             <div className="flex flex-row justify-between mb-4">
//                 <h4 className='text-xl font-normal leading-{25} text-[#161616]'>Tasks</h4>
//                 <div className="flex gap-4">
//                     <span className="e-icons e-large e-plus"></span>
//                     <span className="e-icons e-large e-edit-5"></span>
//                     <span className="e-icons e-large e-more-horizontal-1"></span>
//                 </div>
//             </div>
//             <div className="flex flex-row justify-between mb-4 items-center">
//                 <DropDownListComponent id="ddlelement" dataSource={sportsData} placeholder="Task name" />
//                 <div className="border-x-2 px-3 border-b-2 w-[120px]">
//                     <p className="text-base font-thin">Assignee</p>
//                 </div>
//                 <div className="px-3 border-b-2 w-[120px]">
//                     <p className="text-base font-thin">Due Date</p>
//                 </div>
//                 <div className="px-3 border-x-2 border-b-2 w-[30px] flex flex-row justify-center items-center">
//                     <p className="text-base font-bold">+</p>
//                 </div>
//             </div>
//             <div className="flex flex-row gap-2 items-center">
//                 <span className="e-icons e-small e-chevron-down-fill"></span>
//                 <p>Idea & Concept</p>
//             </div>
//             <div className="flex flex-row justify-between my-4 items-center">
//                 <div className="px-3 border-b-2 w-[100%]">
//                     <p className="text-base font-thin">Example task one</p>
//                 </div>
//                 <div className="border-x-2 px-3 border-b-2 w-[120px]">
//                     <p className="text-base font-thin">Aron more</p>
//                 </div>
//                 <div className="px-3 border-b-2 w-[120px]">
//                     <p className="text-base font-thin">Sunday</p>
//                 </div>
//                 <div className="px-3 border-x-2 border-b-2 w-[30px] flex flex-row justify-center items-center">
//                     <p className="text-base font-bold">+</p>
//                 </div>
//             </div>
//             <div className="mt-4 flex flex-row gap-2 items-center">
//                 <span className="e-icons e-small e-chevron-down-fill"></span>
//                 <p>Set Visual Tons</p>
//             </div>
//             <div className="flex flex-row justify-between my-4 items-center">
//                 <div className="px-3 border-b-2 w-[100%]">
//                     <p className="text-base font-thin">Example task one</p>
//                 </div>
//                 <div className="border-x-2 px-3 border-b-2 w-[120px]">
//                     <p className="text-base font-thin">Aron more</p>
//                 </div>
//                 <div className="px-3 border-b-2 w-[120px]">
//                     <p className="text-base font-thin">Sunday</p>
//                 </div>
//                 <div className="px-3 border-x-2 border-b-2 w-[30px] flex flex-row justify-center items-center">
//                     <p className="text-base font-bold">+</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Tasks;
