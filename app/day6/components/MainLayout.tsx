import React from "react";

import styles from "./MainLayout.module.css";

type MainLayoutProps = {
    children: React.ReactNode;
    sidebar?: React.ReactNode;
};


export function MainLayout({ children, sidebar} : MainLayoutProps ) {
    return (
        <div className={styles["main-layout"]}>
            <header className={styles["header"]}>
                <h1>My Application</h1>
            </header>
            <div className={styles["content-wrapper"]}>
                {sidebar && <aside className={styles["sidebar"]}>{sidebar}</aside>}
            </div>
            <footer className={styles["footer"]}>
                <p>(C) 2024 My Application</p>
            </footer>
        </div>
    );
}
