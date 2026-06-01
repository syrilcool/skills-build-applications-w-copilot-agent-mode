import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Home() {
    return (_jsxs("div", { className: "container py-5", children: [_jsx("h1", { className: "mb-4", children: "OctoFit Tracker" }), _jsx("p", { className: "lead", children: "A modern multi-tier fitness tracker frontend built with React 19, Vite, and Bootstrap." }), _jsx("p", { children: "Frontend is configured to run on port 5173." })] }));
}
function About() {
    return (_jsxs("div", { className: "container py-5", children: [_jsx("h2", { children: "About OctoFit" }), _jsx("p", { children: "This frontend is ready for a Node.js + Express backend and MongoDB data access via Mongoose." })] }));
}
export default function App() {
    return (_jsxs(BrowserRouter, { children: [_jsx("nav", { className: "navbar navbar-expand-lg navbar-light bg-light", children: _jsxs("div", { className: "container", children: [_jsx(Link, { className: "navbar-brand", to: "/", children: "OctoFit" }), _jsx("div", { children: _jsxs("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0", children: [_jsx("li", { className: "nav-item", children: _jsx(Link, { className: "nav-link", to: "/", children: "Home" }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { className: "nav-link", to: "/about", children: "About" }) })] }) })] }) }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) })] })] }));
}
