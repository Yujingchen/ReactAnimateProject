import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import "./Header.scss";
import SideDrawer from "./sideDrawer/SideDrawer";
class Header extends Component {
  state = {
    drawerOpen: false,
    headerTrans: true
  };
  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    //good to remove eventlistener with componentWillUpMount when go to different route
  }
  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerTrans: false
      });
    } else {
      this.setState({
        headerTrans: true
      });
    }
    console.log("scorlling");
  };

  render() {
    const transparent = this.state.headerTrans ? "headerTrans" : "headerColor";
    return (
      <AppBar position="fixed" className={["app-bar", transparent].join(" ")}>
        {/* style={{
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0px"
        }} */}
        <Toolbar>
          <div className="header_logo ">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            edge="end"
            color="inherit"
            arial-label="Menu"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => {
              this.toggleDrawer(value);
            }}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
