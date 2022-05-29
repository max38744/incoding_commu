import React, { useState } from "react";
import styles from "../CSS/ForgotPage.module.css";
import Layout from "../Layout/Layout";
import { withRouter, Link } from "react-router-dom";
import axios from 'axios';



function ForgotPage() {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    
    const onClickLogin = () => {
        console.log('click login');
        //여기에 이제 로그인할때 뭔가 전달하는걸 해야할것같은데,,,
        axios.post('/user_inform/onLogin', null, {
          params: {
            'user_id' : Id,
            'user_pw' : Password
          }
        })
        .then(res => console.log(res))
        .catch()
      };
   
  
    return (
      <Layout>
          <h1 className={styles.title}>아이디 / 비밀번호 찾기</h1>
          <div className={styles.main}>  
            <div className={styles.idforgot}>
                아이디 찾기
              <form>
                <label className={styles.nameArea} htmlFor="name">이름</label>
                <input className={styles.name} type="text" id="name" />
                <label className={styles.phoneArea} htmlFor="phone">전화번호</label>
                <input className={styles.phone} type="text" id="phone" />
              
                <Link to="/idforgot"><input type="submit" id={styles.idforgot_btn} value="ID 찾기"></input></Link>
              </form>
            </div>
            <div className={styles.vline}></div>
            <div className={styles.pwforgot}>비밀번호찾기</div>
        </div>
      </Layout>
    );
  }
  
  export default ForgotPage;
  