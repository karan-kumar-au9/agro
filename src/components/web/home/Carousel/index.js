import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{ marginTop: "9rem" }}
        >
          <Slider {...settings}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1597932570098-5a11a0bbdd81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80"
                alt="supermarket"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1606041974734-0341c2d2d988?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80"
                alt="supermarket"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1583831416149-3ffdaeedd620?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=850&q=80"
                alt="supermarket"
              />
            </div>
          </Slider>
        </Grid>
      </Grid>
    );
  }
}
