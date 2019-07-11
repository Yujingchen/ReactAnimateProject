import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

function SideDrawer(props) {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("feature")}>
          Event Starts In
        </ListItem>
        {/* button for hover effect on list item */}
        <ListItem button>Venue Info</ListItem>
        <ListItem button>Highlights</ListItem>
        <ListItem button>Pricing</ListItem>
        <ListItem button>Location</ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
