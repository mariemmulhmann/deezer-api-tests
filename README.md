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

## 🤝 Contributing

Pull requests are welcome! If you'd like to contribute:

1. Fork the project  
2. Create a branch:

   ```bash
   git checkout -b feat/feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m 'feat(scope): description'
   ```

4. Push to your branch:

   ```bash
   git push origin feat/feature-name
   ```

5. Open a Pull Request

---

## 🚀 How to publish this project on GitHub

### 1. Create a new repository on GitHub

- Go to [https://github.com](https://github.com) and click on **"New"**
- Name your repository (e.g. `deezer-api-tests`)
- Leave it public (or private if you prefer)
- Do **not** initialize with a README, .gitignore or license
- Click **"Create repository"**

### 2. Initialize Git locally

```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/deezer-api-tests.git
```

Replace `YOUR_USERNAME` with your GitHub username.

### 3. Create a `.gitignore` file

```bash
echo "node_modules/
.env" > .gitignore
```

### 4. Add and commit the project

```bash
git add .
git commit -m "feat(setup): initial project structure with Jest and fetch"
```

### 5. Set up GitHub authentication

If Git doesn't ask for credentials and you see "Authentication failed", do this:

- Open **Credential Manager** (Windows)
- Go to **Windows Credentials**
- Remove any credentials with `git:` or `github.com`

Then:

- Git will ask for your **username** (GitHub username)
- Git will ask for your **password** → use a [Personal Access Token](https://github.com/settings/tokens)

> To generate a token:
> - Go to GitHub Settings → Developer Settings → Tokens → Generate new token (classic)
> - Give it a name, expiration, and select `repo` permission
> - Copy the token (you won’t see it again)

### 6. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

Your project is now online! 🎉

---

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.

---

With love,  
Made by [@mariemmulhmann](https://github.com/mariemmulhmann) 💜