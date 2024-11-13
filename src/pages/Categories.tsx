import styled from "@emotion/styled";
import { SaveRounded } from "@mui/icons-material";
import { Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import { useState } from "react";
import { CustomDialogTitle } from "../components/CustomDialogTitle";
import { DialogBtn } from "../styles/common.styled";

export const Categories = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const handleEditDimiss = () => {
    setOpenEditDialog(false);
  };

  return (
    <div>
      {/* <TopBar toggleTheme={toggleTheme} mode={mode} title="" /> */}
      <CategoriesContainer>
        <Dialog
          open={openEditDialog}
          onClose={handleEditDimiss}
          PaperProps={{
            style: {
              borderRadius: "24px",
              padding: "12px",
              minWidth: "350px",
            },
          }}
        >
          title
          <CustomDialogTitle
            title="Edit Category"
            subTitle={`Edit the details of the category.`}
            onClose={handleEditDimiss}
          />
          <DialogContent>
            <EditNameInput
              label="Enter category name"
              placeholder="Enter category name"
            />
            {/* <ColorPicker
                color={editColor}
                width="350px"
                fontColor={
                  theme.darkmode
                    ? ColorPalette.fontLight
                    : ColorPalette.fontDark
                }
                onColorChange={(clr) => {
                  setEditColor(clr);
                }}
              />
            </div> */}
          </DialogContent>
          <DialogActions>
            <DialogBtn onClick={handleEditDimiss}>Cancel</DialogBtn>
            <DialogBtn>
              <SaveRounded /> &nbsp; Save
            </DialogBtn>
          </DialogActions>
        </Dialog>
      </CategoriesContainer>
    </div>
  );
};

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const EditNameInput = styled(TextField)`
  margin-top: 8px;
  .MuiOutlinedInput-root {
    border-radius: 16px;
    width: 350px;
  }
`;
