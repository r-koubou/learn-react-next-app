import React from "react";

import "./day7.css";

export default function Layout({ children } : { children: React.ReactNode} ) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
