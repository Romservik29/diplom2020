import React from 'react'
import Grid from '@material-ui/core/Grid'
export default function Illustrations() {
    let i=0;
    const photos = [
    {
        src: 'https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1',
        width: 3,
        height: 3,
        key: i++
    },    
    {
        src: 'https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1',
        width: 3,
        height: 3,
        key: i++
    },   
    {
        src: 'https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1',
        width: 3,
        height: 3,
        key: i++
    },    
    {
        src: 'https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1',
        width: 3,
        height: 3,
        key: i++

    },    
    {
        src: 'https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1',
        width: 3,
        height: 3,
        key: i++

    },    
    {
        src: 'https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1',
        width: 3,
        height: 3,
        key: i++

    },      
    {
        src: 'https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1',
        width: 3,
        height: 3,
        key: i++

    },    
    {
        src: 'https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1',
        width: 3,
        height: 3,
        key: i++

    },    
    {
        src: 'https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1',
        width: 3,
        height: 3,
        key: i++

    },    {
        src: 'https://sun9-20.userapi.com/c824201/v824201969/173425/UZNGRozhtic.jpg?ava=1',
        width: 3,
        height: 3,
        key: i++

    },
    ]
    return (
        <Grid container justify='space-evenly' spacing={2}>
            {photos.map(p=>
            <Grid item sm={4} sx={4}>
                <img width='100%' src={p.src} alt="l" key={p.key}/>
            </Grid>)}
        </Grid>
    )
}
