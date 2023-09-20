"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const imageRouter_1 = __importDefault(require("./routers/imageRouter"));
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static("public/upload_img"));
app.use(express_1.default.static("public/upload_img_no_bg"));
app.use(express_1.default.static("public/upload_img_bg_color"));
app.use("/", imageRouter_1.default);
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500);
    res.json({ message: error.message || "An unknown error occurred!" });
});
app.listen(process.env.PORT || 5000, () => {
    console.log(`App running on port ${process.env.PORT}...`);
});
//# sourceMappingURL=index.js.map