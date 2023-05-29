import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Avengers End Game",
      plot: " A well groomed supernatural entertaining film",
      price: 1000,
      rating: 9,
      stars: 0,
    };
  }

  addStar = () => {
    if (this.state.stars >= 5) {
      return;
    }
    // Form1 This will not consider the previous state and render the desired value as given
    // this.setState({
    //   stars: this.state.stars + 0.5,
    // });

    // From2 This will take a callback function and render according to the previous state
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });
  };

  removeStar = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        stars: prevState.stars - 0.5,
      };
    });
  };

  render() {
    const { title, plot, price, rating, stars } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/63/73/75/1000_F_163737511_E9EMaI9WyJakkpyblYvwnlVLRBSpC1EH.jpg"
              alt="Poster"
            ></img>
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">RS{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/10308/10308996.png"
                  alt="decrease"
                  onClick={this.removeStar}
                />
                <img
                  className="stars"
                  src="https://cdn-icons-png.flaticon.com/128/10797/10797263.png"
                  alt="Star"
                />
                <img
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png"
                  alt="increase"
                  onClick={this.addStar}
                />

                <span className="starCount">{stars}</span>
              </div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
