document.getElementById('addItemForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Pega os valores dos inputs
    let itemName = document.getElementById('itemName').value;
    let itemLink = document.getElementById('itemLink').value;

    // Faz uma requisição para o backend para salvar o item
    fetch('/add-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: itemName, link: itemLink })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Atualiza a lista de itens na tela
            let ul = document.getElementById('itemList');
            let li = document.createElement('li');
            li.innerHTML = `<a href="${itemLink}">${itemName}</a>`;
            ul.appendChild(li);

            // Limpa os campos do formulário
            document.getElementById('itemName').value = '';
            document.getElementById('itemLink').value = '';
        } else {
            alert('Erro ao adicionar o item!');
        }
    });
});
