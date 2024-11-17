# Gaming Library for n00bs

## Description

A frontend project built with modern web technologies that allows users to explore and search for games. The project uses the RAWG Video Games Database API to retrieve game data.

### Technologies

- Vite - Fast development environment and build tool
- React - UI library
- React Router - Client-based routing
- Tailwind CSS - Utility-first CSS framework
- React Query - Data management and caching
- ESLint - Code quality and standardization
- Prettier - Code formatting

## Features

- Display a list of games with basic information
- Detailed view for each game
- Search function to find specific games
- Filtering based on genre
- Filtering based on release year
- Responsive design that works on all devices
- Loading skeletons for a better user experience

## User Stories

As a user, I want to be able to:

- See a list of popular games on the homepage
- Click on a game to see more detailed information
- Search for specific games using the search function
- Filter games by genre to find games that interest me
- Choose a specific year to see games from that period
- See relevant information such as ratings and platforms for each game
- Navigate easily between different views in the application
- Have a responsive experience regardless of device

## Installation

1. Clone the project:

   - git clone [repository-url]

2. Navigate to the project folder:

   - cd client

3. Install dependencies:

   - npm install

4. Create a .env file in the root directory with the following variables:
   - VITE_BASE_URL=https://api.rawg.io/api
   - VITE_API_KEY=your_api_key

## Development

Start the development server:
-npm run dev

### Other commands

- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run format` - Format code with Prettier
- `npm run lint` - Run ESLint for code quality control

## Project Structure

src/

- api/ # API integration and data retrieval
- assets/ # Static files (images, styles)
- components/ # Reusable components
- main.jsx # Application entry point

## Contribute

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Kim Bergstrom - [GitHub](https://github.com/KimBergstroem)
