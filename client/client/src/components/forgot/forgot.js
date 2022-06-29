import React, { useState } from "react";
import styles from "../CSS/ForgotPage.module.css";
import Layout from "../Layout/Layout";
import { withRouter, Link } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from "@mui/system";
import IdForm from "./IdForm";

const ForgotContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items : center;
    width : 100%;
`;

const ForgotID = styled.div`
  font-size: 20px;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ForgotPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <ForgotContainer>
        <Box sx={{ width: '50%', border: 'solid 0.5px lightgray'}}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="아이디 찾기" {...a11yProps(0)} sx={{}}/>
              <Tab label="패스워드 찾기" {...a11yProps(1)} />
            </Tabs>
          </Box>
        
          <TabPanel value={value} index={0}>
            <ForgotID>
              <IdForm></IdForm>
            </ForgotID>
          </TabPanel>
          <TabPanel value={value} index={1}>
            패스워드 찾기
          </TabPanel>
        </Box>
      </ForgotContainer>
    </Layout>
  );
}


