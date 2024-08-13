function gerarTabela() {
    var linhas = parseInt(prompt("Digite o número de linhas:"));

    if (isNaN(linhas) || linhas <= 0) {
        alert("Por favor, insira um número válido de linhas.");
        return;
    }

    var colunasPorLinha = [];
    for (var i = 0; i < linhas; i++) {
        var colunas = parseInt(prompt("Digite o número de colunas para a linha " + (i + 1) + ":"));
        colunasPorLinha.push(colunas);
    }

    var tabela = "<table border='0' class='emkt-table'>";
    for (var i = 0; i < linhas; i++) {
        tabela += "<tr>";
        for (var j = 0; j < colunasPorLinha[i]; j++) {
            tabela += "<td onclick='selecionarCelula(this)'></td>";
        }
        tabela += "</tr>";
    }
    tabela += "</table>";

    document.getElementById('tableWrapper').innerHTML = tabela;
    document.getElementById('tableContainer').style.display = 'block';
    document.getElementById('aplicarEstilosDiv').style.display = 'block';
}

function aplicarEstilos() {
    var largura = document.getElementById('width').value;
    var altura = document.getElementById('height').value;
    var corDeFundo = document.getElementById('background-color').value;
    var cellspacing = document.getElementById('cellspacing').value;
    var cellpadding = document.getElementById('cellpadding').value;
    var align = document.getElementById('align').value;

    var table = document.querySelector('#tableWrapper table');

    if (largura) {
        table.style.width = largura;
        table.setAttribute('width', largura);
    }
    if (altura) {
        table.style.height = altura;
        table.setAttribute('height', altura);
    }
    if (corDeFundo) {
        table.style.backgroundColor = corDeFundo;
    }
    if (cellspacing) {
        table.setAttribute('cellspacing', cellspacing);
    }
    if (cellpadding) {
        table.setAttribute('cellpadding', cellpadding);
    }
    if (align) {
        table.setAttribute('align', align);
    }
}

function adicionarColspan() {
    var cells = document.querySelectorAll('#tableWrapper table td.selected');
    var colspanValue = prompt("Qual o valor de colspan deseja adicionar?");
    var cellWidth = prompt("Qual a largura da célula deseja adicionar?");
    var alignValue = prompt("Qual o valor de alinhamento deseja adicionar?");
    var bgcolorValue = prompt("Qual o valor de cor deseja adicionar?");
    
    if (colspanValue && parseInt(colspanValue) > 0) {
        cells.forEach(function(cell) {
            cell.colSpan = colspanValue;
            cell.setAttribute('width', cellWidth);
            cell.align = alignValue;
            cell.bgColor = bgcolorValue;
        });
    } else {
        alert("Por favor, insira um valor de colspan válido (maior que 0).");
    }
}

function adicionarParagrafo() {
    var cells = document.querySelectorAll('#tableWrapper table td.selected');
    var textoParagrafo = prompt("Digite o texto para o parágrafo:");
    
    if (textoParagrafo) {
        cells.forEach(function(cell) {
            const paragraph = document.createElement('p');
            paragraph.textContent = textoParagrafo;
            paragraph.classList.add('selectable');
            paragraph.onclick = (event) => {
                event.stopPropagation();
                selecionarCelula(paragraph);
            };
            cell.appendChild(paragraph);
        });
    } else {
        alert("Por favor, insira um texto para o parágrafo.");
    }
}

function adicionarParagrafoComEstilo() {
    var cells = document.querySelectorAll('#tableWrapper table td.selected');
    var textoParagrafo = prompt("Digite o texto para o parágrafo:");
    
    if (textoParagrafo) {
        var width = prompt("Digite a largura do parágrafo (Ex: 100px):");
        var height = prompt("Digite a altura do parágrafo (Ex: 50px):");
        var corTexto = prompt("Digite a cor do texto (Ex: #000000):");
        var tamanhoFonte = prompt("Digite o tamanho da fonte (Ex: 16px):");
        var fontFamily = prompt("Digite a família da fonte (Ex: Arial, sans-serif):");
        var fontWeight = prompt("Digite o peso da fonte (Ex: bold):");
        var alignText = prompt("Digite o alinhamento do texto (Ex: center, left, right):");
        var paddingText = prompt("Digite o preenchimento interno (Ex: 10px):");

        cells.forEach(function(cell) {
            const paragraph = document.createElement('p');
            paragraph.textContent = textoParagrafo;
            paragraph.style.width = width;
            paragraph.style.height = height;
            paragraph.style.color = corTexto;
            paragraph.style.fontSize = tamanhoFonte;
            paragraph.style.fontFamily = fontFamily;
            paragraph.style.fontWeight = fontWeight;
            paragraph.style.textAlign = alignText;
            paragraph.style.padding = paddingText;
            paragraph.classList.add('selectable');
            paragraph.onclick = (event) => {
                event.stopPropagation(); 
                selecionarCelula(paragraph);
            };
            cell.appendChild(paragraph);
        });
    } else {
        alert("Por favor, insira um texto para o parágrafo.");
    }
}

function adicionarImagem() {
    var cells = document.querySelectorAll('#tableWrapper table td.selected');
    var src = prompt("Qual o caminho da imagem?");
    var width = prompt("Qual a largura da imagem? (ex: 100px, 50%)");
    var height = prompt("Qual a altura da imagem? (ex: 100px, 50%)");
    
    if (src) {
        cells.forEach(function(cell) {
            const image = document.createElement('img');
            image.src = src;
            
            if (width) image.style.width = width;
            if (height) image.style.height = height;
            
            image.classList.add('selectable');
            image.onclick = (event) => {
                event.stopPropagation();
                selecionarCelula(image);
            };
            
            cell.appendChild(image);
        });
    } else {
        alert("Por favor, insira um caminho para a imagem.");
    }
}

function criarTabela() {
    var cells = document.querySelectorAll('#tableWrapper table td.selected');
    var numLinhas = prompt("Número de linhas da nova tabela:");
    var numColunas = prompt("Número de colunas da nova tabela:");
    
    if (numLinhas && numColunas) {
        var novaTabela = "<table border='1' class='emkt-table'>";
        for (var i = 0; i < numLinhas; i++) {
            novaTabela += "<tr>";
            for (var j = 0; j < numColunas; j++) {
                novaTabela += "<td>Nova célula</td>";
            }
            novaTabela += "</tr>";
        }
        novaTabela += "</table>";

        cells.forEach(function(cell) {
            cell.innerHTML = novaTabela;
        });
    } else {
        alert("Por favor, insira o número de linhas e colunas.");
    }
}

function estilizarTabelaDentroCelula() {
    var cells = document.querySelectorAll('#tableWrapper table td.selected');
    var largura = prompt("Digite a largura da tabela (Ex: 100%):");
    var altura = prompt("Digite a altura da tabela (Ex: 100px):");
    var corFundo = prompt("Digite a cor de fundo da tabela (Ex: #ffffff):");
    var cellspacing = prompt("Digite o cellspacing da tabela:");
    var cellpadding = prompt("Digite o cellpadding da tabela:");
    
    if (largura || altura || corFundo || cellspacing || cellpadding) {
        cells.forEach(function(cell) {
            var tabela = cell.querySelector('table');
            if (tabela) {
                if (largura) tabela.style.width = largura;
                if (altura) tabela.style.height = altura;
                if (corFundo) tabela.style.backgroundColor = corFundo;
                if (cellspacing) tabela.setAttribute('cellspacing', cellspacing);
                if (cellpadding) tabela.setAttribute('cellpadding', cellpadding);
            }
        });
    } else {
        alert("Por favor, insira pelo menos um valor para estilizar a tabela.");
    }
}

function adicionarLinhaHorizontalComEstilo() {
    var cells = document.querySelectorAll('#tableWrapper table td.selected');
    
    if (cells.length > 0) {
        cells.forEach(function(cell) {
            const hr = document.createElement('hr');
            hr.className = 'bars';
            hr.style.border = '1px solid #DBDBDB';
            hr.style.maxWidth = '520px';
            hr.style.background = '#DBDBDB';
            cell.appendChild(hr);
        });
    } else {
        alert("Por favor, selecione uma célula para adicionar a linha horizontal.");
    }
}

function salvarComoCSV() {
    var tabela = document.querySelector('#tableWrapper table');
    if (!tabela) {
        alert("Nenhuma tabela encontrada.");
        return;
    }
    
    var csv = [];
    var linhas = tabela.querySelectorAll('tr');

    linhas.forEach(function(linha) {
        var colunas = linha.querySelectorAll('td, th');
        var dados = [];
        colunas.forEach(function(coluna) {
            dados.push('"' + coluna.textContent.replace(/"/g, '""') + '"');
        });
        csv.push(dados.join(','));
    });

    var csvContent = "data:text/csv;charset=utf-8," + csv.join("\n");
    var link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "tabela.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function selecionarCelula(elemento) {
    if (elemento.classList.contains('selected')) {
        elemento.classList.remove('selected');
    } else {
        var selecionados = document.querySelectorAll('.selected');
        selecionados.forEach(function(elem) {
            elem.classList.remove('selected');
        });
        elemento.classList.add('selected');
    }
}

function updateSelectedElement() {
    var selecionado = document.querySelector('.selected');
    
    if (selecionado) {
        if (selecionado.tagName.toLowerCase() === 'p') {
            var novoTexto = prompt("Digite o novo texto para o parágrafo:", selecionado.textContent);
            var novaCor = prompt("Digite a nova cor do texto (Ex: #000000):", selecionado.style.color);
            var novoAlinhamento = prompt("Digite o novo alinhamento do texto (Ex: center, left, right):", selecionado.style.textAlign);
            var novoTamanhoFonte = prompt("Digite o novo tamanho da fonte (Ex: 16px):", selecionado.style.fontSize);
            
            if (novoTexto) {
                selecionado.textContent = novoTexto;
            }
            if (novaCor) {
                selecionado.style.color = novaCor;
            }
            if (novoAlinhamento) {
                selecionado.style.textAlign = novoAlinhamento;
            }
            if (novoTamanhoFonte) {
                selecionado.style.fontSize = novoTamanhoFonte;
            }
        } else if (selecionado.tagName.toLowerCase() === 'img') {
            var novaSrc = prompt("Digite o novo caminho da imagem:", selecionado.src);
            var novaLargura = prompt("Digite a nova largura da imagem:", selecionado.style.width);
            var novaAltura = prompt("Digite a nova altura da imagem:", selecionado.style.height);
            
            if (novaSrc) {
                selecionado.src = novaSrc;
            }
            if (novaLargura) {
                selecionado.style.width = novaLargura;
            }
            if (novaAltura) {
                selecionado.style.height = novaAltura;
            }
        } else {
            alert("Elemento selecionado não pode ser atualizado com esta função.");
        }
    } else {
        alert("Nenhum elemento selecionado para atualizar.");
    }
}

function deleteSelectedElement() {
    var selecionado = document.querySelector('.selected');
    if (selecionado) {
        selecionado.parentNode.removeChild(selecionado);
    } else {
        alert("Nenhum elemento selecionado para excluir.");
    }
}

function ocultarFormulario() {
    document.getElementById('aplicarEstilosDiv').style.display = 'none';
}