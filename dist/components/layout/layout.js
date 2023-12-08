"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const react_1 = __importDefault(require("react"));
require("src/style.css");
const Layout = (props) => {
    return react_1.default.createElement("div", { className: 'max-h-screen min-h-screen overflow-y-auto relative flex bg-red-500' },
        react_1.default.createElement("div", { className: 'min-h-max sticky top-0' }, "Header"),
        react_1.default.createElement("div", { className: 'flex-1' }, props.children),
        react_1.default.createElement("div", { className: 'min-h-max' }, "Footer"));
};
exports.Layout = Layout;
