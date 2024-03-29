import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

function SideDrawer(props) {
  const ScrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => ScrollToElement("feature")}>
          Event Starts In
        </ListItem>
        {/* button for hover effect on list item */}
        <ListItem button onClick={() => ScrollToElement("venuinfo")}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => ScrollToElement("highlight")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => ScrollToElement("pricing")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => ScrollToElement("location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
