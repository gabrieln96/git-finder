import {BsSearch} from 'react-icons/bs'

const Search = () => {
  return (
    <div>
        <h2>Busque seu usuario:</h2>
        <p>Conheça seus repositórios</p>
            <div>
                <input type="text" placeholder="Digite o nome do usuario"/>
                <button>
                    <BsSearch/>
                </button>
            </div>
    </div>
  )
}

export default Search