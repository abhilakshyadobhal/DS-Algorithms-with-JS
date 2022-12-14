const getInputField = document.getElementById('input');
const getAddCta = document.getElementById('addItemCta');

function Todo() {
    this.items = [];
    this.text = '';
    if (!this.text) {
        getAddCta.disabled = true;
    }
}

Todo.prototype.add = function () {
    let id = Math.random();
    if (this.text.length) {
        this.items.push({ title: todo.text, id });
    }
    const getItemsContainer = document.getElementById('items');
    const innerdiv = document.createElement('div');
    innerdiv.style.display = 'flex';
    innerdiv.style.gap = '10px';
    innerdiv.style.margin = '20px';
    const data = `
  <input id=input-${id} style="display:none" />
  <h2 id=h2-${id}>${this.text}</h2>
  <button id=btn-${id}>delete</button>
  <button id=edit-${id}>edit</button>
  <button style="display:none" id=save-${id}>save</button>
`;
    innerdiv.setAttribute('id', id);
    innerdiv.innerHTML += data;
    getItemsContainer.appendChild(innerdiv);
    document.getElementById(`btn-${id}`).addEventListener('click', () => {
        this.delete(id);
    });
    document.getElementById(`edit-${id}`).addEventListener('click', () => {
        this.edit(id);
    });
    this.text = '';
    getInputField.value = '';
    getAddCta.disabled = true;
};

Todo.prototype.delete = function (id) {
    if (id) {
        this.items = this.items.filter((curr) => curr.id !== id);
        document.getElementById(id).remove();
        console.log(this.items);
    }
};
Todo.prototype.edit = function (id) {
    const getNode = document.getElementById(`input-${id}`);
    const getNodeText = document.getElementById(`h2-${id}`);
    const getEditCta = document.getElementById(`edit-${id}`);
    const getSaveCta = document.getElementById(`save-${id}`);

    let newText = '';

    getNode.value = getNodeText.textContent;
    getNode.style.display = 'block';
    getNodeText.style.display = 'none';
    getEditCta.style.display = 'none';
    getSaveCta.style.display = 'block';
    getNode.addEventListener('input', (e) => {
        newText = e.target.value;
    });

    this.items.forEach((curr) => {
        if (curr.id === id) {
            curr.title = newText;
        }
    });
    getSaveCta.addEventListener('click', () => {
        getNodeText.textContent = newText;
        getNode.value = '';
        getNode.style.display = 'none';
        getNodeText.style.display = 'block';
        getEditCta.style.display = 'block';
        getSaveCta.style.display = 'none';
    });
};

const todo = new Todo();

getAddCta.addEventListener('click', () => {
    todo.add();
});

getInputField.addEventListener('input', (e) => {
    todo.text = e.target.value;
    if (todo.text.length > 0) {
        getAddCta.disabled = false;
    } else {
        getAddCta.disabled = true;
    }
});
