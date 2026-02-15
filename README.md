<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Gauravch-dev/Project-Showcase-platform">
    <img src="https://cdn-icons-png.flaticon.com/512/3159/3159310.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Project Showcase Platform</h3>
<p align="center">
  <img src="https://img.shields.io/github/stars/Gauravch-dev/Project-Showcase-platform?style=for-the-badge" />
  <img src="https://img.shields.io/github/forks/Gauravch-dev/Project-Showcase-platform?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues/Gauravch-dev/Project-Showcase-platform?style=for-the-badge" />
  <img src="https://img.shields.io/github/license/Gauravch-dev/Project-Showcase-platform?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Framework-Next.js-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Language-TypeScript-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Auth-Clerk-purple?style=for-the-badge" />
</p>


  <p align="center">
    A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects.
    <br />
    <a href="https://github.com/Gauravch-dev/Project-Showcase-platform"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Gauravch-dev/Project-Showcase-platform">View Demo</a>
    ·
    <a href="https://github.com/Gauravch-dev/Project-Showcase-platform/issues">Report Bug</a>
    ·
    <a href="https://github.com/Gauravch-dev/Project-Showcase-platform/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

**Project Showcase Platform** is designed to give creators a voice. Whether you're building the next big SaaS, an innovative AI tool, or a creative project, this platform helps you get discovered. It features a community-driven approach where authentic launches meet genuine feedback.

Key Features:
*   **Showcase Your Work:** Submit your projects with details like tagline, description, logo, and website URL.
*   **Product Discovery:** Browse through featured, recently launched, and trending products.
*   **Community Engagement:** Upvote products you love to help them climb the ranks.
*   **Secure Authentication:** Seamless sign-up and login powered by Clerk.
*   **Robust Backend:** Built with Drizzle ORM and PostgreSQL for reliable data management.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This project is built using a modern stack to ensure scalability, performance, and developer experience.

*   [Next.js 15](https://nextjs.org/) - The React Framework for the Web
*   [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale
*   [Tailwind CSS](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML
*   [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM for SQL databases
*   [PostgreSQL](https://www.postgresql.org/) - The World's Most Advanced Open Source Relational Database
*   [Clerk](https://clerk.com/) - Authentication and User Management
*   [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components for building high-quality design systems
*   [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

You need the following installed:

*   Node.js 18+ 
*   npm/yarn/pnpm

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/Gauravch-dev/Project-Showcase-platform.git
    cd Project-Showcase-platform
    ```

2.  **Install dependencies**
    ```sh
    npm install
    ```

3.  **Environment Setup**
    Create a `.env.local` file in the root directory and add your environment variables:
    ```properties
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    DATABASE_URL=your_postgresql_database_url
    ```

4.  **Database Migration**
    Push the schema to your database using Drizzle Kit:
    ```sh
    npm run db:push
    # or
    npx drizzle-kit push
    ```

5.  **Run the Development Server**
    ```sh
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

*   **Submitting a Product:** Navigate to the submission page, fill in your product details (Name, Tagline, Description, Website), and submit for approval.
*   **Voting:** Browse the home page and click the upvote button on products you find interesting.
*   **Authentication:** Sign up using email or social providers to interact with the platform.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Project Setup & Architecture
- [x] User Authentication with Clerk
- [x] Database Schema Design (Products, Users)
- [x] Home Page (Hero, Featured, Recent)
- [ ] Product Detail Pages
- [ ] User Profile Dashboard
- [ ] Commenting System
- [ ] Search and Filtering
- [ ] Analytics for Creators

See the [open issues](https://github.com/Gauravch-dev/Project-Showcase-platform/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

**Gaurav Choithramani**

📧 email: gauravlan.ch@gmail.com  
🔗 LinkedIn: https://linkedin.com/in/gaurav-ch-847552283 

Project Link: [https://github.com/Gauravch-dev/Project-Showcase-platform](https://github.com/Gauravch-dev/Project-Showcase-platform)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

*   [Vercel](https://vercel.com)
*   [Neon Database](https://neon.tech) (Recommended for Postgres)
*   [Clerk](https://clerk.com)
*   [Shadcn/UI](https://ui.shadcn.com/)

<p align="right">(<a href="#top">back to top</a>)</p>
