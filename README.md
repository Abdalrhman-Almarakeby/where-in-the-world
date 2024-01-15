# Where In the World

A responsive web app that allows users to view and search for information about countries around the world.

This project was created as a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Overview

- Browse a list of countries and search for specific countries
- Click on a country to view detailed information including:
  - Flag
  - Name
  - Population
  - Region
  - Capital
  - Top Level Domain
  - Currencies
  - Languages
  - Border Countries
- Filter countries by region
- Dark/Light mode toggle

## Key Features

- Search countries by name or capital city
- Filter countries by region
- View detailed information about each country
- Responsive design works on mobile, tablet, and desktop screens
- Switch between dark and light theme

## Accessibility

This project aims to be accessible to all users. Some key features:

- Semantic HTML provides meaning and structure
- Color contrast meets WCAG 2.1 AA standards
- Images have alternate text
- Forms include labels and instructions
- Focus is visible for keyboard navigation
- Headings use proper hierarchy
- ARIA roles used for additional meaning

## Built With

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## API

This project uses the [REST Countries API](https://restcountries.com/) to fetch country data.

The API is free to use and does not require authentication.

The following endpoints were used:

- All - `https://restcountries.com/v2/all`
- Cca3 Code - `https://restcountries.com/v3.1/alpha/{code}`

## Running Locally

1.  Clone the repository

```
git clone https://github.com/abdalrhman-almarakeby/where-in-the-world.git
```

1.  Navigate to the project directory

```
cd where-in-the-world
```

3.  Install dependencies

```
npm install
```

1.  Start local dev server

```
npm run dev
```

1.  Open [http://localhost:3000/where-in-the-world](http://localhost:3000/where-in-the-world) in your browser

## Live Demo

You can view a live demo hosted on GitHub Pages:

https://abdalrhman-almarakeby.github.io/where-in-the-world/

## Contact

Abdalrhman Almarakeby - almarakeby65@gmail.com
