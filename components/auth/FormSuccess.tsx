import React from "react";
import { CiCircleCheck } from "react-icons/ci";
interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 text-emerald-500 p-3 rounded-md flex items-center gap-x-2 text-sm ">
      <CiCircleCheck className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
