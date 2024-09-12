
import React from 'react';
import { Link } from 'react-router-dom';

export default function TOC() {
    return (
        <ul>
            <li><Link to="/Labs">Labs</Link></li>
            <li><Link to="/Labs/Lab1">Lab 1</Link></li>
            <li><Link to="/Labs/Lab2">Lab 2</Link></li>
            <li><Link to="/Labs/Lab3">Lab 3</Link></li>
            <li><Link to="/Kanbas">Kanbas</Link></li>

            {/* Add the GitHub link here */}
            <li>
                <a
                    id="wd-github"
                    href="https://github.com/celine33134/kanbas-react-web-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Repository on GitHub
                </a>
            </li>
        </ul>
    );
}
