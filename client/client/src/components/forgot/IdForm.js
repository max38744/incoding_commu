import React from "react";

import TextField from '@mui/material/TextField';

import styled from "styled-components";
const Namezone = styled.div`
    font-size : 1.2rem;
`;

const Phonezone = styled.div`
    font-size : 1.2rem;
    margin-top : 10px;
`;

const FindId = styled.div`
    display: flex;
    justify-content: left;
`;

export default function IdForm() {

    return (
        <FindId>
            <form>
                <Namezone>
                    이름 : 


                <input id="Name" label="Name" variant="Name" />
                </Namezone>
                <Phonezone>
                    휴대폰 번호:
                <input id="Phone" label="Phone" variant="Phone" />
                </Phonezone>
            </form>
        </FindId>
    )
}
