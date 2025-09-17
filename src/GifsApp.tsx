import { mockGifs } from "./mock-data/gifs.mock"



export const GifsApp = () => {
    return (

        <>
            <div className="content-center">
                <h1>Buscador de Gifs</h1>
                <p>El Gifs pefecto</p>
            </div>

            <div className="search-container">
                <input type="text" placeholder="Buscar Gifs..." />
                <button>Buscar</button>
            </div>
            <div className="previuos-searches">
                <h2>Busqueda previas</h2>
                <ul className="previuos-searches-list">
                    <li>Goku</li>
                    <li>Vegeta</li>
                    <li>Piccolo</li>
                    <li>Freezer</li>
                </ul>
            </div>

            {/* Listado de Gifs */}
            <div className="gifs-container">
                {
                    /* Gif item */
                    mockGifs.map(gif => (
                        <div key={gif.id} className="gif-card">
                            <img src={gif.url} alt={gif.title} width={gif.width} height={gif.height} />
                            <h3>{gif.title}</h3>
                            <p>{gif.width}x{gif.height} (1.5mb)</p>
                        </div>
                    ))
                }
            </div>
        </>

    )
}
