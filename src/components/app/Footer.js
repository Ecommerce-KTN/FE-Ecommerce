import { ThemeProvider } from '@emotion/react'
import { createTheme, TextField } from '@mui/material'
import { Button } from '@mui/material'
import React, { useState } from 'react'

function Footer () {
    const [ email, setEmail ] = useState( '' )
    return (
        <ThemeProvider theme={ theme }>
            <div className='flex-1 mt-10 mb-10 w-full h-full'>
                <div className='flex gap-4 w-full h-full'>
                    <div className='border-solid border-2 border-light-gray-500 w-5/12 rounded-lg font-sans p-5'>
                        <h3 className='font-bold'>Free gift with your 1st order </h3> Join our newsletter to claim it
                        <div className='flex gap-2'>
                            <TextField placeholder='Enter your email'
                                onChange={ ( e ) => setEmail( e.target.value ) }
                            />
                            <Button variant='contained' color='buttonSubcriber' style={ {
                                borderRadius: '10px', fontWeight: 'bold', fontFamily: 'inherit',
                                textTransform: 'none'
                            } }

                            >Subscribe</Button>
                        </div>
                    </div>
                    <div className='border-solid border-2 border-light-gray-500 w-7/12 rounded-lg font-sans p-5'>
                        new
                    </div>

                </div>
            </div>
        </ThemeProvider>
    )
}

const theme = createTheme( {
    palette: {
        buttonSubcriber: {
            main: 'hsl(338deg 91% 68% / 1)',
            light: '#eb83b2',
            dark: 'hsl(338deg 91% 68% / 1)',
            text: '#ffffff',
            contrastText: '#ffffff',
        },
    },
} );

export default Footer