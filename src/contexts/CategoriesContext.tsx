import React, { createContext, useContext, useState } from "react";

interface Category {
  id: string;
  name: string;
}

interface CategoriesContextType {
  categories: Category[];
  addCategory: (name: string) => void;
  deleteCategory: (id: string) => void;
  editCategory: (id: string, newName: string) => void;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(
  undefined
);

export const useCategories = () => {
  const context = useContext(CategoriesContext);

  if (!context) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
};

export const CategoriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "HTML" },
    { id: "2", name: "CSS" },
    { id: "3", name: "Javascript" },
    { id: "4", name: "TypeScript" },
    { id: "5", name: "React" },
    { id: "6", name: "General" },
    { id: "7", name: "Basic" },
    { id: "8", name: "Networking" },
  ]);

  const addCategory = (name: string) => {
    if (name === "") return;
    setCategories((prev) => [...prev, { id: `${prev.length + 1}`, name }]);
  };

  const deleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  };

  const editCategory = (id: string, name: string) => {
    setCategories((prev) =>
      prev.map((cat) => (cat.id === id ? { ...cat, name } : cat))
    );
  };

  return (
    <CategoriesContext.Provider
      value={{ categories, addCategory, deleteCategory, editCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
