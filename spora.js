// totalResults: response.data.total_results,
// shows: response.data.results,
// });
// } catch {
// this.setState({
// error: true,
// });
// }
// }
// }

// changeAdress = (query) => {
// this.props.history.push({
// pathname: this.props.location.pathname,
// search: `query=${query}`,
// });
// this.setState({
// query: query,
// });
// };

// render() {
// const { totalResults, query, error } = this.state;

// return (
// <div className="search">
// <Search changeAdress={this.changeAdress} />
// {totalResults > 1 || error ? (
// <ul>
//   {this.state.shows.map((movie) => (
//     <li key={movie.id}>
//       <Link to={{ pathname: `${this.props.match.url}/${movie.id}`, state: { from: this.props.location } }}>
//         {" "}
//         {movie.title || movie.name}
//       </Link>
//     </li>
//   ))}
// </ul>
// ) : (
// (query !== "" || error) && <h3>Nothing found for your request</h3>
// )}
// </div>
// );
// }
// }


// Добавить на навлінк клас актів клас наме

{/* <NavLink exact to={routes.HomePage} activeClassName="link-is-active">
        Home
      </NavLink>
      <NavLink exact to={routes.MoviesPage} activeClassName="link-is-active">
        Movies
      </NavLink> */}