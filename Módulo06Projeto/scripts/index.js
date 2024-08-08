import chave from './chave.js';

document.getElementById('formulario').addEventListener('submit', async (event)=>{

    event.preventDefault();

    const filme = document.querySelector('#filme').value;

    const ano = document.querySelector('#ano').value || '';

    const resposta = await fetch(`http://www.omdbapi.com/?apikey=${chave}&t=${filme}&y=${ano}`);

    const dados = await resposta.json();

    const {Title, Year, Plot, Genre, Poster, Runtime, Released, imdbRating, Actors} = dados;

    const sessao = document.querySelector('#painel');

    sessao.innerHTML = `<table border='1' width='600'>
            <tbody>
                <tr>
                    <th>Título:</th>
                    <td>${Title}</td>
                    <td rowspan="8">
                        <img src='${Poster}' alt='pôster do filme' />
                    </td>
                </tr>
                <tr>
                    <th>Ano:</th>
                    <td>${Year}</td>
                </tr>
                <tr>
                    <th>Gênero:</th>
                    <td>${Genre}</td>
                </tr>
                <tr>
                    <th>Enredo:</th>
                    <td>${Plot}</td>
                </tr>
                <tr>
                    <th>Duração:</th>
                    <td>${Runtime}</td>
                </tr>
                <tr>
                    <th>Elenco:</th>
                    <td>${Actors}</td>
                </tr>
                <tr>
                    <th>Lançamento:</th>
                    <td>${Released}</td>
                </tr>
                <tr>
                    <th>Nota:</th>
                    <td>${imdbRating}</td>
                </tr>
            </tbody>
        </table>`
});