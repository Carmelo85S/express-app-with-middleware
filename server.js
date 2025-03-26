import express from "express";

const app = express();
const router = express.Router();

const PORT = 3000;

app.use((req, res, next) => {
    const isAuthenticated = true; 

    if (!isAuthenticated) {
        console.log("Unauthorized");
        return res.status(403).send("You are not authenticated. Insert user and password.");
    }
    next();
});


app.use((req, res, next) => {
    console.log(`User authenticated at ${new Date().toLocaleString()}`);
    next();
});

app.get("/login", (req, res) => {
    res.send("Login successful");
});


router.use((req, res, next) => {
    console.log("Router middleware for /users");
    next();
});


router.get("/users", (req, res) => {
    res.send("Users logged in, redirect to user page");
});


app.use("/api", router);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
