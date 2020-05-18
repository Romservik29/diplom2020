import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';




export default function Search() {
    return (      
                <TextField
                    autoFocus={true}
                    placeholder="Запрос…"
                    label="Поиск"
                    fullWidth
                    style={{borderWidth: '2px'},{marginBottom: '2.5em'}}
                    color="secondary"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon style={{color: '#fff'}} />
                          </InputAdornment>
                        ),
                      }}
                />
    )
}
