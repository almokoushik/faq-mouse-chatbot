import React from 'react';
import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';
import {CloseIcon} from '@material-ui/icons/Close';
import { TramOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// all available props
const theme = {
    background: '#E7F5FE',
    fontFamily: 'Open Sans',
    headerBgColor: '#A1A1FD',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#49494B',
    botFontColor: '#fff',
    userBubbleColor: '#B0B1B3',
    userFontColor: '#4a4a4a',
};
const data =
    [
    {
        id: 'intro',
        message: 'Please Select Your Catagory',
        trigger: 'catagory',
    },
    {
        id: 'catagory',
        options: [
            { value: 'a', label: 'A', trigger: 'A_sub' },
            { value: 'b', label: 'B', trigger: 'B_sub' },
            { value: 'c', label: 'C', trigger: 'C_sub' },
            { value: 'd', label: 'D', trigger: 'D_sub' }
        ]
    },
    
        {
            id: 'A_sub',
            options: [
                { value: 'a1', label: 'A1', trigger: 'A_sub_A1' },
                { value: 'a2', label: 'A2', trigger: 'A_sub_A2' },
                { value: 'a3', label: 'A3', trigger: 'A_sub_A3' },
                { value: 'a4', label: 'A4', trigger: 'A_sub_A4' },
                { value: 'a5', label: 'Back', trigger: 'catagory' }
            ]
        },

        {
            id: 'A_sub_A1',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'A_sub_A2',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'A_sub_A3',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'A_sub_A4',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },

        {
            id: 'B_sub',
            options: [
                { value: 'b1', label: 'B1', trigger: 'B_sub_B1' },
                { value: 'b2', label: 'B2', trigger: 'B_sub_B2' },
                { value: 'b3', label: 'B3', trigger: 'B_sub_B3' },
                { value: 'b4', label: 'B4', trigger: 'B_sub_B4' },
                { value: 'b5', label: 'Back', trigger: 'catagory' }
            ]
        },
        {
            id: 'B_sub_B1',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional'
        },
        {
            id: 'B_sub_B2',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'B_sub_B3',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'B_sub_B4',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'C_sub',
            options: [
                { value: 'c1', label: 'C1', trigger: 'C_sub_C1' },
                { value: 'c2', label: 'C2', trigger: 'C_sub_C2' },
                { value: 'c3', label: 'C3', trigger: 'C_sub_C3' },
                { value: 'c4', label: 'C4', trigger: 'C_sub_C4' },
                { value: 'c5', label: 'Back', trigger: 'catagory' }
            ]
        },
        {
            id: 'C_sub_C1',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'C_sub_C2',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'C_sub_C3',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'C_sub_C4',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'D_sub',
            options: [
                { value: 'd1', label: 'D', trigger: 'D_sub_D1' },
                { value: 'd1', label: 'D', trigger: 'D_sub_D2' },
                { value: 'd3', label: 'D', trigger: 'D_sub_D3' },
                { value: 'd4', label: 'D', trigger: 'D_sub_D4' },
                { value: 'd5', label: 'Back', trigger: 'catagory' }
            ]
        },
        {
            id: 'D_sub_D1',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'D_sub_D2',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'D_sub_D3',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        {
            id: 'D_sub_D4',
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            trigger: 'need_professional',
        },
        
        {
            id: 'need_professional',
            message: 'None of Them? Do You Check Our Services?',
            trigger: 'response',
        },

        {
            id: 'response',
            options: [
                { value: 'yes', label: 'Yes', trigger: 'yes_response' },
                { value: 'no', label: 'No', trigger: 'no_response' }
            ]
        },
    
    {
        id: 'yes_response',
        message: 'Great! Lets Check Our Services and Experts...',
        end: true,
    },
    {
        id: 'no_response',
        message: 'Sorry to hear that. Please Check Again',
        end: true,
    },
        ]

const Bot = () => {
    const history = useHistory()
    const [steps,setSteps]=useState()
    const [clear,setClear]=useState(true)
    useEffect(()=>{
        setSteps(data)

    },[clear===false])
    const [ opened,setOpend ] = useState(false);

    const toggleFloating = () => {
        setOpend(!opened );
    }
    const handleEnd = (value )=>{
        if(value.values.pop()==="yes"){
            // history.push("/paidservices")
            setOpend(false);
            setClear(!clear)
            setSteps()
           
        }
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
               {
                    steps&& <ChatBot steps={steps}
                        handleEnd={handleEnd}
                        floating={true}
                        opened={opened}
                        toggleFloating={toggleFloating}></ChatBot>
               
               }
            </ThemeProvider>
        </div>
    );
};

export default Bot;