import React from 'react'
import './search-box.styles.css'

type SearchBoxProps = {
    placeholder: string,
    handleChange: (e: any) => void,
}

export const SearchBox = (props: SearchBoxProps) => {
    return(
        <input
            className="search"
            type='search'
            placeholder={props.placeholder}
            onChange={props.handleChange}
        />
    )
}