import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/LandingPage.module.css";
import Layout from '../Layout/Layout';


function LandingPage() {
  return (
    <Fragment>
      <Layout />
        <div className={styles.main}>
          <div className="main-catchphrase">
            <img className={styles.mainCatchphrase} src={require("../imgs/CatchPhrase.png")} alt="catchPharse" />
          </div>
          <div className={styles.mainText}>
            Let's Change the world! <br/>
            인코딩과 함께라면 야.. 너도 할 수 있어.
          </div>

          <div className={styles.mainSignup}>
          <Link to="/login">
              <button className={styles.yellowBtn}>로그인하러 가기</button>
            </Link>
            <Link to="/signup">
              <button className={styles.yellowBtn}>회원가입하러 가기</button>
            </Link>
          </div>
        </div>

        <div className={styles.footerArea}>
          <div className={styles.footerContainer}>
            <img className={styles.footerImg} src={require("../imgs/portfolio.png")} alt="강의자료" />
            <div className={styles.footerContent}>
              <div className={styles.contentTitle}>강의 자료를 공유해요.</div>
              <div className={styles.contentContent}>
                인코딩 1기부터 현재 기수까지의 학습 내용과 강의 자료를 확인할 수 있어요.
              </div>
            </div>
          </div>
          <div className={styles.footerContainer}>
            <img className={styles.footerImg} src={require("../imgs/tree.png")} alt="질의응답" />
            <div className={styles.footerContent}>
              <div className={styles.contentTitle}>질의 응답 게시판에 물어보세요!</div>
              <div className={styles.contentContent}>
                이미 수강을 완료했거나 코스를 진행중인 학생들끼리 묻고 답할 수 있어요.
              </div>
            </div>
          </div>
          <div className={styles.footerContainer}>
            <img className={styles.footerImg} src={require("../imgs/mt.png")} alt="물음표" />
            <div className={styles.footerContent}>
              <div className={styles.contentTitle}>행복한 하루.</div>
              <div className={styles.contentContent}>
                뭘 넣을까요?
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default LandingPage;
