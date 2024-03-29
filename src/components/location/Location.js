import React, { Component } from "react";
import "./Location.scss";
import "./../../styles/share.scss";
class Location extends Component {
  render() {
    return (
      <div className="location_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5619.489519859537!2d24.938937932492035!3d60.16852214057506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb8bece3c9e19511a!2sKamppi+Center!5e0!3m2!1sen!2sfi!4v1562880649943!5m2!1sen!2sfi"
          width="100%"
          height="500px"
          frameBorder="0"
          allowFullScreen
          title="googlemap"
        />
        <div className="location_tag">
          <div>Location</div>
        </div>
      </div>
    );
  }
}
export default Location;
