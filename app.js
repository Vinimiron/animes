function pesquisar() {
    // Função responsável por realizar a pesquisa e exibir os resultados na página.
  
    let section = document.getElementById("resultados-pesquisa"); 
    // Obtém a seção HTML onde os resultados serão exibidos, utilizando seu ID.
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um nome de anime ou algo relacionado (Ex: ninja)</p>"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    // Inicializa uma string vazia para armazenar os resultados da pesquisa. 
    // Essa string será preenchida dentro do loop e, posteriormente, inserida na seção.
    
    let titulo = "";
    let descricao = "";
    
    for (let dado of dados) {
      // Itera sobre cada elemento (dado) do array "dados".
      // A cada iteração, um novo resultado é adicionado à string "resultados".
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()

      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ){

        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      // Cria um novo elemento HTML <div> para cada resultado da pesquisa.
      // Preenche o conteúdo do <div> com o título, descrição e link do dado atual.
      // A string é concatenada à variável "resultados".
      }
    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"     
    }
  
    section.innerHTML = resultados;
    // Atribui o conteúdo da string "resultados" ao HTML da seção,
    // substituindo o conteúdo anterior.
  }