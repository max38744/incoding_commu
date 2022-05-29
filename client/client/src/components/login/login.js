import React, { useState } from "react";
import styles from "../CSS/LogInPage.module.css";
import Layout from "../Layout/Layout";
import { withRouter, Link } from "react-router-dom";
import axios from 'axios';



function LogInPage() {
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
        
    // const onIdHandler = (e) => {
    //   setId(e.currentTarget.value);
    // };
  
    // const onPasswordHandler = (e) => {
    //   setPassword(e.currentTarget.value);
    // };
    
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
        <div>
           <h1 className={styles.title}>로그인</h1>
          
          <form>
            <div className={styles.idArea}>
              <label className={styles.label} htmlFor="id">아이디</label>
              <input className={styles.id} type="email" id="id" />
            </div>
            <div className={styles.passwordArea}>
              <label className={styles.label} htmlFor="password">비밀번호</label>
              <input
                className={styles.password}
                type="password"
                id="password"
                minLength="8"
                maxLength="16"
              />
            </div>
            <Link to="/"><input type="submit" id={styles.login_btn} value="LOGIN" onClick={onClickLogin}></input></Link>
            <Link to="/signup"><button id={styles.sign_up_btn}>Sign Up</button></Link>
            <div id={styles.textbox}>
              <Link to ="/forgot">
                <p>아이디 / 비밀번호 찾기</p>
              </Link>
            </div>
          </form>
          
        </div>
        
      </Layout>
    );
  }
  
  export default LogInPage;
  