import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";
const Header = () => {
  const classes = useStyles();
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(19,9,121,0.9540148823201156) 77%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography className={classes.font} variant="h4">
        B1
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs"
                label=" Blogs"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/myBlogs"
                label=" Mes Blogs"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs/add"
                label="Ajouter un Blog"
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
              Connexion
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
               S'inscrire
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
          déconnexion
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
