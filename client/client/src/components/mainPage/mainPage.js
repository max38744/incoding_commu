import React, { useState } from "react";
import styles from "../CSS/SignUpPage1.module.css";
import Layout_main from "../Layout/Layout_main";
import { withRouter, Link } from "react-router-dom";


function MainPage() {
    return (
        <Layout_main>
            <div>
                <h1 className={styles.title}>대한민국 인재상</h1>
            </div>
        </Layout_main>
    )
}
  
export default MainPage;