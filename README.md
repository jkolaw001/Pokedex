# Pokedex Explorer

A modern web application to explore Pokémon using the [PokéAPI](https://pokeapi.co/). Browse, search, and view detailed information about your favorite Pokémon with a clean, responsive interface and support for light/dark mode.

![Pokedex Screenshot]
![image](https://github.com/user-attachments/assets/0ac74983-25df-4442-8b20-ee4062a7a217)
![image](https://github.com/user-attachments/assets/3141b4f8-0378-4770-ab28-b6a0ab1dcdd6)



---

## Features

- Browse a paginated list of Pokémon with images and names
- View detailed stats, types, and abilities for each Pokémon
- Responsive design for desktop and mobile
- Light and dark mode toggle
- Built with React, Vite, and React Router

---

## Demo

To see the app in action, clone the repo and run it locally (see instructions below).

---

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://gitlab.galvanize.com/jkolaw00/pokedex.git
   cd pokedex/day2-react/pokemon-explorer
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal).

---

## Usage

- **Home:** Welcome page with a link to the Pokédex.
- **Pokédex:** Browse Pokémon. Click "Load More" to see additional Pokémon.
- **Details:** Click any Pokémon card to view detailed information.
- **Theme Toggle:** Use the button in the header to switch between light and dark mode.

---

## Project Structure

- `pokemon-explorer/src/pages/` – Main pages: Home, Pokedex, PokemonDetail
- `pokemon-explorer/src/poke.jsx` – Theme context and provider
- `pokemon-explorer/src/App.jsx` – Main app routes
- `pokemon-explorer/src/App.css` – App styling

---

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [PokéAPI](https://pokeapi.co/)

---

## Contributing

Contributions are welcome! Please fork the repository and submit a merge request.

---

## License

This project is for educational purposes.

---

## Acknowledgments

- Pokémon data and images provided by [PokéAPI](https://pokeapi.co/)
- Inspired by the original Pokémon games and
