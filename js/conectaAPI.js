// Função assícrona para captar a lista de vídeos 
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}

// Função assíncrona para adicionar novos vídeos à página 
async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        // Tipo de requisição.
        method: "POST",
        // Tipo de conteuto que será colocado 
        headers: {
            "Content-type": "application/json"
        },
        // Transformar em string os dados que estão sendo enviados
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo :( ")
    }
    // Tranformando em Json para ser possível visualizar
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

// Função para buscar vídeo da API 
async function buscarVideos(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

// Exportar uma constante conectaAPI que recebe um OBJ com funções 
export const conectaApi = {
    listaVideos,
    criaVideo,
    buscarVideos
}