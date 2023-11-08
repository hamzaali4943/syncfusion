import React from "react";
import EditableInput from "./editableInput";

const EditableTable = ({ data, editable, handleEdit }) => {
  console.log(editable);
  console.log("EditableTable rendered");

  return (
    <div className="overflow-auto h-64">
      <table className="min-w-full divide-y divide-gray-150 border border-gray-150">
        <thead>
          <tr className="divide-x divide-gray-150 bg-gray-50">
            <th className="px-4 py-3.5 text-left text-xs !text-[#0000008A] font-medium w-56">
              Name
            </th>
            <th className="px-4 py-3.5 text-left text-xs !text-[#0000008A] font-medium w-56">
              2023
            </th>
            <th className="px-4 py-3.5 text-left text-xs !text-[#0000008A] font-medium w-56">
              2024
            </th>
            <th className="px-4 py-3.5 text-left text-xs !text-[#0000008A] font-medium w-56">
              2025
            </th>
            <th className="px-4 py-3.5 text-left text-xs !text-[#0000008A] font-medium w-56">
              2026
            </th>
            <th className="px-4 py-3.5 text-left text-xs !text-[#0000008A] font-medium w-56">
              2027
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-gray-150">
              <td className="whitespace-nowrap px-4 py-2 text-sm !text-[#0000008A]">
                {item.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-sm !text-[#0000008A]">
                <EditableInput
                  editable={editable}
                  value={item.value2023}
                  onChange={(e) =>
                    handleEdit(item.id, e.target.value, "value2023")
                  }
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-sm !text-[#0000008A]">
                <EditableInput
                  editable={editable}
                  value={item.value2024}
                  onChange={(e) =>
                    handleEdit(item.id, e.target.value, "value2024")
                  }
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-sm !text-[#0000008A]">
                <EditableInput
                  editable={editable}
                  value={item.value2025}
                  onChange={(e) =>
                    handleEdit(item.id, e.target.value, "value2025")
                  }
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-sm !text-[#0000008A]">
                <EditableInput
                  editable={editable}
                  value={item.value2026}
                  onChange={(e) =>
                    handleEdit(item.id, e.target.value, "value2026")
                  }
                />
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-sm !text-[#0000008A]">
                <EditableInput
                  editable={editable}
                  value={item.value2027}
                  onChange={(e) =>
                    handleEdit(item.id, e.target.value, "value2027")
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
