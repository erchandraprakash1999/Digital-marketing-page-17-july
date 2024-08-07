import React, { useState } from "react";
import logo from "../Components/Assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Services",
      icon: <RiServiceLine />,
    },
    {
      text: "Blog",
      icon: <FaBlog />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "FAQ",
      icon:<FaQuestion /> ,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-links-container">
      <button  style={{ textDecoration: 'none', color: 'white', background: 'none', border: 'none', padding: 0, cursor: 'pointer',marginRight:'20px',marginLeft:'300px', fontSize:'20px',fontWeight:'bold' }}>
        Home
      </button>

      <button  style={{ textDecoration: 'none', color: 'white', background: 'none', border: 'none', padding: 0, cursor: 'pointer' ,marginLeft:'30px', marginRight:'30px',fontSize:'20px',fontWeight:'bold' }}>
        Services
      </button>
  
      <button style={{ textDecoration: 'none', color: 'white', background: 'none', border: 'none', padding: 0, cursor: 'pointer',marginLeft:'30px',marginRight:'30px',fontSize:'20px',fontWeight:'bold' }}>
        Blog
      </button>
  
      <button  style={{ textDecoration: 'none', color: 'white', background: 'none', border: 'none', padding: 0, cursor: 'pointer',marginLeft:'30px',marginRight:'30px',fontSize:'20px',fontWeight:'bold' }}>
        About
      </button>
  
  
       <button  style={{ textDecoration: 'none', color: 'white', background: 'none', border: 'none', padding: 0, cursor: 'pointer',marginLeft:'30px',marginRight:'30px',fontSize:'20px',fontWeight:'bold' }}>
          FAQ
        </button>
        <button >
        <FaMagnifyingGlass  className="primary-button" />
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;