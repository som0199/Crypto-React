import { AppBar, Badge, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../store/autherisation/authSlice";
import { ShoppingCartRounded } from "@mui/icons-material";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <AppBar color="warning" position="sticky">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            sx={{
              flexGrow: 1,
              my: 1,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".05rem",
              textDecoration: "none",
            }}
          >
            <Link to={"/"}>CryptoCaddy</Link>
          </Typography>

          {user ? (
            <>
              <Link to={"/cart"}>
                <Badge
                  sx={{ margin: "0px 15px" }}
                  badgeContent={cart.length}
                  color="error"
                >
                  <Button
                    variant="contained"
                    size="small"
                    color="info"
                    endIcon={<ShoppingCartRounded />}
                  >
                    Cart
                  </Button>
                </Badge>
              </Link>

              <Button
                variant="contained"
                color="error"
                onClick={() => handleLogout()}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to={"/register"}>
                <Button variant="text" sx={{ color: "white" }}>
                  Register
                </Button>
              </Link>
              <Link to={"/login"}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ marginInline: "8px" }}
                >
                  Login
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
