import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../assets/services/constant";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            key={category.name}
            style={{
              backgroundColor: category.name === selectedCategory && "#FC1503",
              color: "white",
            }}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span
              style={{
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
