const STORE = [
    { name: "apples", checked: false },
    { name: "oranges", checked: false },
    { name: "milk", checked: true },
    { name: "bread", checked: false }
];

function generateHtml(item, index) {
    let checkedStyle = item.checked ? '.shopping - item__checked' : '';
    return `<li> class="js-item-index-element"
        data-item-index="${index}">
        <span class="shopping-item ${checkedStyle}">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
}

function itemAddHandler() {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        const textField = $('.js-shopping-list-entry');
        let name = textField.val();
        textField.val("");
        console.log(name);
        STORE.push({name, checked:false});
        console.log(STORE);
    });
}

function main() {
    itemAddHandler();
}

$(main);