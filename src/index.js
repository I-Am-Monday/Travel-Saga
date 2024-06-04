const express = require('express');

const app = express();

// Middleware để parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sử dụng root router
const rootRouter = require('./routers/index');
app.use('/api', rootRouter);

// Khởi động server
const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
