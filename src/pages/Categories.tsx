import styled from "@emotion/styled";
import { Delete, Edit } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useCategories } from "../contexts/CategoriesContext";

export const Categories = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [newCategory, setNewCategory] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState<string>("");
  const { categories, addCategory, deleteCategory, editCategory } =
    useCategories();

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      addCategory(newCategory);
      setNewCategory("");
    }
  };

  const handleSaveEdit = (id: string) => {
    editCategory(id, editingValue);
    setEditingId(null);
    setEditingValue("");
  };

  return (
    <Container>
      <h2>Manage Categories</h2>
      <CategoryList>
        {categories.map((category) => (
          <CategoryItem key={category.id}>
            {editingId === category.id ? (
              <TextField
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
                size="small"
              />
            ) : (
              <span>{category.name}</span>
            )}
            <Actions>
              {editingId === category.id ? (
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleSaveEdit(category.id)}
                >
                  Save
                </Button>
              ) : (
                <IconButton
                  size="small"
                  onClick={() => {
                    setEditingId(category.id);
                    setEditingValue(category.name);
                  }}
                >
                  <Edit />
                </IconButton>
              )}
              <IconButton
                size="small"
                onClick={() => deleteCategory(category.id)}
              >
                <Delete />
              </IconButton>
            </Actions>
          </CategoryItem>
        ))}
      </CategoryList>
      <AddCategoryContainer>
        <TextField
          label="Add new category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          size="small"
        />
        <Button variant="contained" onClick={handleAddCategory}>
          Add
        </Button>
      </AddCategoryContainer>
    </Container>
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
const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background: #f4f4f4;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const AddCategoryContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
