'use client';
import { createTheme, MantineColorsTuple, NativeSelect, PasswordInput, TextInput } from '@mantine/core';
import classes from '@/app/css/Mantine.module.css';

const myColor: MantineColorsTuple = ['#ffffff', '#ffffff', '#868E96', '#868E96', '#3b91e5', '#3b91e5', '#0c162f', '#0c162f', '#202E43', '#202E43'];

const mantineTheme = createTheme({
    colors: {
        myColor,
    },
    fontFamily: 'Inter, sans-serif',
    fontSizes: {
        xs: '10px',
        sm: '12px',
        md: '12px',
        lg: '16px',
        xl: '18px',
    },
    components: {
        TextInput: TextInput.extend({
            classNames: {
                input: classes.input,
            },
        }),
        NativeSelect: NativeSelect.extend({
            classNames: {
                input: classes.input,
            },
        }),
        PasswordInput: PasswordInput.extend({
            classNames: {
                input: classes.input,
            },
        }),
    },
});

export default mantineTheme;
