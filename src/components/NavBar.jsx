import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "black",
        top: 0,
        justifyContent: "Space-between",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" height={40} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
