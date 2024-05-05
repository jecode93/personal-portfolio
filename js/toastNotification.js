import { toast } from "react-toastify";

export const successMessage = (message) => {
  return toast.success(message);
};

export const failedMessage = (message) => {
  return toast.error(message);
};
