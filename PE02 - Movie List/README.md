# INPUT
The input of the program is a list of movie data stored in the `movies` array. Each movie object in the array contains information such as the movie title, genre, and year of release. The program also receives user input through the genre selection dropdown menu and through cursor selection of any of the movies displayed. 

# PROCESS
The program uses React and useState hook to manage the state of the selected genre. It initializes the selected genre as 'All Genres'. It creates a `uniqueGenres` array by extracting all unique genres from the movies array.

The program filters the movies based on the selected genre. If 'All Genres' is selected, all movies are displayed; otherwise, only movies matching the selected genre are shown. The `filteredMovies` array holds the filtered movie list.

The program also defines a `handleMovieClick` function, which is triggered when a movie card is clicked. It  displays an alert with the clicked movie's title.

Lastly, the `movies.css` file uses the `hover` selector to change the background color of a movie item when the user's cursor is placed over the item. 

# OUTPUT
The output of the program is the rendered movie list displayed on the webpage. The movie list is dynamically generated based on the selected genre. Each movie is represented as a movie card, showing the title, genre, and release year. The movie cards are rendered within an unordered list.

When a movie card is clicked, an alert message is shown with the title of the clicked movie.
When a cursor is placed over a movie card, the background color of the card slightly darkens. 

The program allows users to select a genre and see the corresponding movies. It provides an interactive interface where users can explore and view movie details based on their genre preferences.