[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<samp>
<p align="center">
  <a href="https://github.com/SilasRodrigues19/BibleServer">
    <img src="./public/assets/logo.svg" alt="Logo" width="100" height="80">
  </a>

  <h3 align="center" id="bio">Bible Server</h3>

  <p align="center">
    Biblical Books
    <br />
    <a href="#">Demo</a>
    <a href="https://github.com/SilasRodrigues19/BibleServer/issues">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#references"></a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

| /books endpoint                                |
|------------------------------------------------|
| [![Preview][project-screenshot]][project-link] |
| Versions:                                      |
| NVI - Nova Versão Internacional                |
| ACF - Almeida Corrigida e Fiel                 |
| AA - Almeida Revisada Imprensa Bíblica         |

<hr>

Bible Server is a project that aims to provide data in json format for biblical books. The project is open source and can be used by anyone who wants to use the data in their projects. 
This data will be consumed in another application that will be developed, to provide access to this data online for reading.

### Built With

Technologies used in the project.

### Libraries

- [tsup](https://tsup.egoist.dev/)
  Bundle your TypeScript library with no config, powered by esbuild.

### Frameworks

- [Fastify](https://fastify.dev/)
  Brief description explaining what the framework does

### Technologies

- [TypeScript](https://www.typescriptlang.org/)
  A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

- [Prisma](https://www.prisma.io/)
  Next-generation Node.js and TypeScript ORM.

<!-- GETTING STARTED -->

## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/SilasRodrigues19/BibleServer.git
   ```

2. Install dependencies (you can use npm, pnpm, yarn or anything else)

   ```sh
   pnpm i
   ```
   
3. Rename .env.example to .env

    ```sh
    cp .env.example .env
    ```
   
4. Prisma Steps

   ```sh
   pnpm prisma generate
   pnpm prisma migrate dev
   ```

5. In the project directory, you can run with the following

   ```sh
   pnpm run dev
   ```

6. If the URL does not open automatically, access this link in your browser.

   ```sh
     http://localhost:3333/
   ```

7. To access on your smartphone, use the same network and replace `localhost` with the machine address. `e.g. http://10.0.0.38:3333`

   ```
     IPv4 Address: 10.0.0.38
     Port: 3333
     Access URL: http://10.0.0.38:3333
   ```
   
<!-- REFERENCES -->

## References

- [thiagobodruk/biblia](https://github.com/thiagobodruk/biblia)
  I used the json data provided by Thiago's repo and later serialized this data to populate my database and use the information later.
   
<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Silas Rodrigues - [@jinuye1](https://twitter.com/jinuye1) - silasrodrigues.fatec@gmail.com

Project Link: [https://github.com/SilasRodrigues19/BibleServer](https://github.com/SilasRodrigues19/BibleServer) <br>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/SilasRodrigues19/BibleServer.svg?style=for-the-badge
[contributors-url]: https://github.com/SilasRodrigues19/BibleServer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SilasRodrigues19/BibleServer.svg?style=for-the-badge
[forks-url]: https://github.com/SilasRodrigues19/BibleServer/network/members
[stars-shield]: https://img.shields.io/github/stars/SilasRodrigues19/BibleServer.svg?style=for-the-badge
[stars-url]: https://github.com/SilasRodrigues19/BibleServer/stargazers
[issues-shield]: https://img.shields.io/github/issues/SilasRodrigues19/BibleServer.svg?style=for-the-badge
[issues-url]: https://github.com/SilasRodrigues19/BibleServer/issues
[license-shield]: https://img.shields.io/github/license/SilasRodrigues19/BibleServer.svg?style=for-the-badge
[license-url]: https://github.com/SilasRodrigues19/BibleServer/blob/master/LICENSE
[license-url]: https://github.com/SilasRodrigues19/BibleServer/blob/master/LICENSE.txt
[project-screenshot]: ./public/screenshots/preview.png
[project-link]: https://example.vercel.app

<br><hr>
[🔼 Back to top](#bible-server)
