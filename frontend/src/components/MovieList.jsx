import { useEffect, useState } from 'react';

const MovieList = () => {

    const [movies, setMovies] = useState([])
    
    useEffect(async () => {
        const url = "http://localhost:5000/movies";
        const res = await fetch(url);
        setMovies(await res.json());
    }, [])
    
    return(
            <table className="striped">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Episódios</th>
                    <th>Episódio atual</th>
                    <th>Visto por último</th>
                </tr>
                </thead>

                <tbody>
                {movies.map(movie => {
                    //let type = movie.tipo === 0 ? 'Série' : 'Filme';
                    //let formatDate = (movie.ultimo_acesso).split('T', 1)

                    return(
                        <tr key={movie.id}>
                            <td>{movie.nome}</td>
                            <td>{movie.tipo}</td>
                            <td>{movie.total_ep}</td>
                            <td>{movie.episodio_atual}</td>
                            <td>{movie.ultimo_acesso}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    )
}

export default MovieList;
