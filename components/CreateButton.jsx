import { Plus } from "lucide-react";

const CreateButton = () => {
  return (
    <div className="flex rounded-full p-2 bg-zinc-800 hover:bg-zinc-700  ">
      <Plus className="w-6 h-6 pr-1" />
      <p>Create</p>
    </div>
  );
};

export default CreateButton;
