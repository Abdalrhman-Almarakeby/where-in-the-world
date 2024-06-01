# Where In the World

A responsive web app that allows users to view and search for information about countries around the world.

This project was created as a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Overview

- Browse a list of countries and search for a specific country by name or capital city.
- Filter countries by region.
- Click on a country to view detailed information, including:
  - Flag
  - Name
  - Population
  - Region
  - Capital
  - Top-Level Domain
  - Currency
  - Language
  - Border Countries
- Dark/Light mode toggle.

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## API

This project uses the [REST Countries API](https://restcountries.com/) to fetch country data.

The API is free to use and does not require authentication.

The following endpoints were used:

- All - `https://restcountries.com/v2/all`
- CCCA3 Code - `https://restcountries.com/v3.1/alpha/{code}`

## Country Flags

The [REST Countries API](https://restcountries.com/) provides country flags in PNG and SVG format from the [flagpedia.net API](https://flagpedia.net/download/api), but I did not use it because the flags have different aspect ratios, which caused inconsistent card sizes and large content shifts on the home page.

So I used [country-flag-icons](https://www.npmjs.com/package/country-flag-icons), a package that provides country flags in a 3:2 aspect ratio.

## Live Demo

You can view a live demo hosted on Vercel:

https://where-in-the-world-ecru.vercel.app/

## Running Locally

1.  Clone the repository:

```
git clone https://github.com/abdalrhman-almarakeby/where-in-the-world.git
```

2.  Navigate to the project directory:

```
cd where-in-the-world
```

3.  Install dependencies:

```
npm install
```

4.  Start the local development server:

```
npm run dev
```

5.  Open [http://localhost:3000](http://localhost:3000/) in your browser.

## Contact

Abdalrhman Almarakeby - almarakeby65@gmail.com
