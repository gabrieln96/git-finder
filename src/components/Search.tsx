type SearchProps ={
    loadUser: (userName: string) => Promise<void>
}

import { useState } from 'react'

import {BsSearch} from 'react-icons/bs'

import classes from './Search.module.css'

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");

  return (
    <div className={classes.search}>
        <h2>Busque seu usuario:</h2>
        <p>Conheça seus repositórios</p>
            <div className={classes.searchcon}>
                <input type="text" placeholder="Digite o nome do usuario" 
                onChange={(e) => setUserName(e.target.value)}/>
                <button onClick={() => loadUser(userName)}>
                    <BsSearch/>
                </button>
            </div>
    </div>
  )
}

export default Search