import { Toast } from "flowbite-react";
import React from "react";
import { FcHighPriority } from "react-icons/fc";

function ErrorMessage({ Message }) {
  return (
    <div>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <FcHighPriority className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">{Message}</div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
}

export default ErrorMessage;
