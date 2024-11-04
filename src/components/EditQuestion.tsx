import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { CustomDialogTitle } from "./CustomDialogTitle";

export const EditQuestion = () => {
  const [open, setOpen] = useState(false);
  const handleDialog =
    (newOpen: boolean | ((prevState: boolean) => boolean)) => () => {
      setOpen(newOpen);
    };
  return (
    <div>
      <Dialog open={open} onClose={handleDialog(false)}>
        <CustomDialogTitle
          onClose={handleDialog(false)}
          title="Edit Question"
          subTitle="sub"
        />
      </Dialog>
    </div>
  );
};
