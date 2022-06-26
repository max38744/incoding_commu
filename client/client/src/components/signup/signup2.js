/*import React, { useState } from "react";
import styles from "../CSS/SignUpPage2.module.css";
import Layout from "../Layout/Layout";
import { withRouter, Link } from "react-router-dom";


function SignUpPage2() {
    const [Name, setName] = useState("");
    const [PhoneNum, setPhoneNum] = useState("");
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
  
    const onNameHandler = (e) => {
      setName(e.currentTarget.value);
    };
  
    const onPhoneNumHandler = (e) => {
      setPhoneNum(e.currentTarget.value);
    };
  
    const onIdHandler = (e) => {
      setId(e.currentTarget.value);
    };
  
    const onPasswordHandler = (e) => {
      setPassword(e.currentTarget.value);
    };
  
    const onConfirmPasswordHandler = (e) => {
      setConfirmPassword(e.currentTarget.value);
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      if (Password !== ConfirmPassword) {
        return alert("비밀번호를 한번 더 확인해주세요!");
      }
    };
  
    return (
      <Layout>
        <div>
          <h1 className={styles.title}>회원가입</h1>
          <form>
            <div className={styles.nameArea}>
              <label className={styles.label} htmlFor="name">이름</label>
              <input className={styles.name} type="text" id="name" />
            </div>
            <div className={styles.idArea}>
              <label className={styles.label} htmlFor="id">아이디(이메일)</label>
              <input className={styles.id} type="email" id="id" />
            </div>
            <div className={styles.phoneArea}>
              <label className={styles.label} htmlFor="phone">전화번호</label>
              <input className={styles.phone} type="tel" id="phone" />
              <input type="button" className={styles.phoneBtn} value="전화번호 인증" />
            </div>
            <div className={styles.passwordArea}>
              <label className={styles.label} htmlFor="password">비밀번호</label>
              <input
                className={styles.password}
                type="password"
                id="password"
                minlength="8"
                maxlength="16"
              />
              <p>8 ~ 16자 이내, 영문과 숫자 조합</p>
            </div>
            <div className={styles.checkPasswordArea}>
              <label className={styles.label} htmlFor="check_password">비밀번호 확인</label>
              <input
                className={styles.checkPassword}
                type="password"
                id="check_password"
                minlength="8"
                maxlength="16"
              />
              <p>비밀번호 일치</p>
            </div>
            <Link to="/signup2"><input type="submit" id={styles.sign_up_btn} value="계속하기"></input></Link>
          </form>
          <div id={styles.textbox}>
            <p>
              계정이 이미 있다면 <Link to="/login">로그인</Link>{" "}
              하러 가기
            </p>
          </div>
        </div>
      </Layout>
    );
  }
  
  export default SignUpPage;
  */