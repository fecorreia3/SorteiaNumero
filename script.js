const numerosSorteados = new Set();

    function gerarTabela() {
      const tbody = document.querySelector("#tabela-bingo tbody");
      tbody.innerHTML = "";

      for (let i = 0; i < 15; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
          const td = document.createElement("td");
          const num = i + 1 + (j * 15);
          td.textContent = num;
          td.id = `num-${num}`;
          row.appendChild(td);
        }
        tbody.appendChild(row);
      }
    }

    function sortearNumero() {
      if (numerosSorteados.size >= 75) {
        alert("Todos os números já foram sorteados!");
        return;
      }

      let numero;
      do {
        numero = Math.floor(Math.random() * 75) + 1;
      } while (numerosSorteados.has(numero));

      numerosSorteados.add(numero);
      document.getElementById("resultado").textContent = `Número sorteado: ${numero}`;
      const celula = document.getElementById(`num-${numero}`);
      if (celula) {
        celula.classList.add("highlight");
      }
    }

    // Inicializa tabela ao carregar a página
    gerarTabela();
