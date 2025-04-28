# 🎧 Deezer API Tests

Automated API testing project using [Jest](https://jestjs.io/) and `fetch` with the [Deezer Public API](https://developers.deezer.com/). The goal of this project is to practice API testing automation and demonstrate knowledge in JavaScript, REST API integration, and best development practices.

---

## 📌 Objectives

- Consume endpoints from the Deezer Public API  
- Write automated tests with Jest  
- Organize the project structure for easy maintenance  
- Follow good versioning and commit practices

---

## 🚀 Technologies used

- [Node.js](https://nodejs.org/)  
- [Jest](https://jestjs.io/)  
- [node-fetch](https://www.npmjs.com/package/node-fetch)

---

## 🧪 How to run the tests

1. Clone this repository:

   ```bash
   git clone https://github.com/mariemmulhmann/deezer-api-tests.git
   cd deezer-api-tests
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the tests:

   ```bash
   npm test
   ```

---

## ✨ Example endpoints used

- `GET /search/artist?q=beyonce`
- `GET /artist/:id`
- `GET /artist/:id/top`

More information at the [official Deezer API documentation](https://rapidapi.com/deezerdevs/api/deezer-1).

---

## 💬 Commit message pattern

This project follows the commit message pattern proposed by [Renato Adorno](https://dev.to/renatoadorno/padroes-de-commits-commit-patterns-41co):

```bash
<type>(<scope>): <message>
```

Example:

```bash
feat(search): add artist search feature
```

---

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.

---

With love,  
Made by [@mariemmulhmann](https://github.com/mariemmulhmann) 💜
