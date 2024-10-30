import toast from "react-hot-toast";
type ToastType = "success" | "error" | "info";

export const showToast = (
  message: string,
  type: ToastType,
  position:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right" = "top-center"
) => {
  switch (type) {
    case "success":
      toast.success(message, {
        position,
      });
      break;
    case "error":
      toast.error(message, {
        position,
      });
      break;
    case "info":
    default:
      toast(message, {
        position,
      });
      break;
  }
};
