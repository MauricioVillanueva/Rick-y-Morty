import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export default function Nav(props){
    return (
        <div>
            <SearchBar className={styles.NavBar} 
            onSearch={props.onSearch}/>
            <Link to="/about" ><h3>About</h3></Link>
            <Link to="/home"><h3>Home</h3></Link>
        </div>
    )
}