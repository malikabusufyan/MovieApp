// export default MovieCard;
import React from "react";

class MovieCard extends React.Component {
  render() {
    const { movies, onIncStars, onClickFav, onClickAddtocart, onDecStars } =
      this.props;
    const { title, plot, poster, price, rating, stars, fav, isInCart } =
      this.props.movies;

    return (
      //Movie Card
      <div className="movie-card">
        {/**Left section of Movie Card */}
        <div className="left">
          <img alt="poster" src={poster} />
        </div>

        {/**Right section Movie Card */}
        <div className="right">
          {/**Title, plot, price of the movie */}
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">Rs. {price}</div>

          {/**Footer starts here with ratings, stars and buttons */}
          <div className="footer">
            <div className="rating">{rating}</div>

            {/**Star image with increase and decrease buttons and star count */}
            <div className="star-dis">
              <img
                className="str-btn"
                alt="Decrease"
                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                onClick={() => onDecStars(movies)}
              />
              <img
                className="stars"
                alt="stars"
                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
              />
              <img
                className="str-btn"
                alt="increase"
                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                // No binding required as addStars() is an arrow function
                onClick={() => onIncStars(movies)}
              />
              <span className="starCount">{stars}</span>
            </div>

            {/**conditional rendering on Favourite button */}
            <button
              className={fav ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => onClickFav(movies)}
            >
              {fav ? "Un-favourite" : "Favourite"}
            </button>

            {/**Conditional Rendering on Add to Cart Button */}
            <button
              className={isInCart ? "unfavourite-btn" : "cart-btn"}
              onClick={() => onClickAddtocart(movies)}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;

// import React from "react";

// class MovieCard extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "Avengers End Game",
//       plot: "A well groomed supernatural entertaining film",
//       price: 1000,
//       rating: 9,
//       stars: 0,
//       fav: false,
//       cart: false,
//     };
//   }

//   addStar = () => {
//     if (this.state.stars >= 5) {
//       return;
//     }
//     this.setState((prevState) => {
//       return {
//         stars: prevState.stars + 0.5,
//       };
//     });
//   };

//   removeStar = () => {
//     if (this.state.stars <= 0) {
//       return;
//     }
//     this.setState((prevState) => {
//       return {
//         stars: prevState.stars - 0.5,
//       };
//     });
//   };

//   handleFav = () => {
//     this.setState({
//       fav: !this.state.fav,
//     });
//   };

//   handleCart = () => {
//     this.setState({
//       cart: !this.state.cart,
//     });
//   };

//   render() {
//     const { title, plot, price, rating, stars, fav, cart } = this.state;
//     return (
//       <div className="main">
//         <div className="movie-card">
//           <div className="left">
//             <img
//               src="https://as2.ftcdn.net/v2/jpg/01/63/73/75/1000_F_163737511_E9EMaI9WyJakkpyblYvwnlVLRBSpC1EH.jpg"
//               alt="Poster"
//             ></img>
//           </div>
//           <div className="right">
//             <div className="title">{title}</div>
//             <div className="plot">{plot}</div>
//             <div className="price">RS{price}</div>
//             <div className="footer">
//               <div className="rating">IMDB:{rating}</div>
//               <div className="star-dis">
//                 <img
//                   className="str-btn"
//                   src="https://cdn-icons-png.flaticon.com/128/10308/10308996.png"
//                   alt="decrease"
//                   onClick={this.removeStar}
//                 />
//                 <img
//                   className="stars"
//                   src="https://cdn-icons-png.flaticon.com/128/10797/10797263.png"
//                   alt="Star"
//                 />
//                 <img
//                   className="str-btn"
//                   src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png"
//                   alt="increase"
//                   onClick={this.addStar}
//                 />
//                 <span className="starCount">{stars}</span>
//               </div>
//               {fav ? (
//                 <button className="unfavourite-btn" onClick={this.handleFav}>
//                   Un-favourite
//                 </button>
//               ) : (
//                 <button className="favourite-btn" onClick={this.handleFav}>
//                   Favourite
//                 </button>
//               )}
//               {cart ? (
//                 <button className="uncart-btn" onClick={this.handleCart}>
//                   Remove-Item
//                 </button>
//               ) : (
//                 <button className="cart-btn" onClick={this.handleCart}>
//                   Add-Item
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
