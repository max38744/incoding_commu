import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//import styles from "../CSS/SignUpPage2.module.css";
import Layout from "../Layout/Layout";

const SignUpPage2 = () => {
  return (
    <Layout>
      <Fragment>
        <div className={styles.main}>
          <h1 className={styles.title}>회원가입</h1>
          <img
            className={styles.profileImage}
            src={require("../imgs/Profile.png")}
            alt="프로필"
          />
          <div className={styles.inputContainer}>
            <div className={styles.inputTitle}>자기소개(선택)</div>
            <div className={styles.inputInput}>
              <input type="text" placeholder="." />
            </div>
            <div className={styles.precaution}>30자 이내</div>
          </div>
          <div className={styles.inputConainer}>
            <div className={styles.inputTitle}>생년 월일</div>
            <div className={styles.inputInput}>
              <input type="text" placeholder="yyyy/mm/dd" />
            </div>
          </div>
          <Link to="/signupsuccess">
            <button className={styles.signUpBtn}>계속하기</button>
          </Link>
        </div>
      </Fragment>
    </Layout>
  );
};

export default SignUpPage2;