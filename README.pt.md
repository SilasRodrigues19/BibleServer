[![Contributors][contributors-shield]][contributors-url][![Forks][forks-shield]][forks-url][![Stargazers][stars-shield]][stars-url][![Issues][issues-shield]][issues-url][![MIT License][license-shield]][license-url]

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

## Sobre o projeto

| /livros endpoint                               |
| ---------------------------------------------- |
| [![Preview][project-screenshot]][project-link] |
| Versões:                                       |
| NVI - Nova Versão Internacional                |
| ACF - Almeida Corrigida e Fiel                 |
| AA - Almeida Revisada Imprensa Bíblica         |

<hr>

Bible Server é um projeto que visa fornecer dados em formato json para livros bíblicos. O projeto é open source e pode ser utilizado por qualquer pessoa que queira utilizar os dados em seus projetos.
Esses dados serão consumidos em outra aplicação que será desenvolvida, para fornecer acesso a esses dados online para leitura.

### Construído com

Tecnologias utilizadas no projeto.

### Bibliotecas

-   [chupar](https://tsup.egoist.dev/)Agrupe sua biblioteca TypeScript sem configuração, com tecnologia esbuild.

### Estruturas

-   [Fastificar](https://fastify.dev/)Breve descrição explicando o que a estrutura faz

### Tecnologias

-   [Texto datilografado](https://www.typescriptlang.org/)Uma linguagem de programação fortemente tipada baseada em JavaScript, oferecendo melhores ferramentas em qualquer escala.

-   [Prisma](https://www.prisma.io/)Node.js e TypeScript ORM de última geração.

<!-- GETTING STARTED -->

## Instalação

1.  Clonar o repositório

    ```sh
    git clone https://github.com/SilasRodrigues19/BibleServer.git
    ```

2.  Instale dependências (você pode usar npm, pnpm, yarn ou qualquer outra coisa)

    ```sh
    pnpm i
    ```

3.  Rename .env.example to .env

    ```sh
    cp .env.example .env
    ```

4.  Passos Prisma

    ```sh
    pnpm prisma generate
    pnpm prisma migrate dev
    ```

5.  No diretório do projeto, você pode executar com o seguinte

    ```sh
    pnpm run dev
    ```

6.  Caso a URL não abra automaticamente, acesse este link em seu navegador.

    ```sh
      http://localhost:3333/
    ```

7.  Para acessar no seu smartphone, use a mesma rede e substitua`localhost`com o endereço da máquina.`e.g. http://10.0.0.38:3333`

          IPv4 Address: 10.0.0.38
          Port: 3333
          Access URL: http://10.0.0.38:3333

<!-- REFERENCES -->

## Referências

-   [thiago bodruk/biblia](https://github.com/thiagobodruk/biblia)Utilizei os dados json fornecidos pelo repo do Thiago e posteriormente serializei esses dados para preencher meu banco de dados e utilizar as informações posteriormente.

<!-- CONTRIBUTING -->

## Contribuindo

As contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será**muito apreciado**.

1.  Bifurque o projeto
2.  Crie sua ramificação de recursos (`git checkout -b feature/AmazingFeature`)
3.  Confirme suas alterações (`git commit -m 'Add some AmazingFeature'`)
4.  Empurre para a filial (`git push origin feature/AmazingFeature`)
5.  Abra uma solicitação pull

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Ver`LICENSE`Para maiores informações.

<!-- CONTACT -->

## Contato

Silas Rodrigues[@Jinue1](https://twitter.com/jinuye1)-[silasrodrigues.fatec@gmail.com](mailto:silasrodrigues.fatec@gmail.com)

Link do projeto:<https://github.com/SilasRodrigues19/BibleServer><br>

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

<br><hr>[🔼 Voltar ao topo](#bible-server)
