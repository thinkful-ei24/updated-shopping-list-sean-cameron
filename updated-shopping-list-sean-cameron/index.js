'use strict';

const STORE = [
  { name: "apples", checked: false },
  { name: "oranges", checked: false },
  { name: "milk", checked: true },
  { name: "bread", checked: false }
];

function generateHtml(item, index) {
  let checkedStyle = item.checked ? '.shopping - item__checked' : '';
  return `<li class="js-item-index-element"
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

function renderHtml(){
  const storeHtml = STORE.map((item, index) => generateHtml(item,index)).join('');
  $('.js-shopping-list').html(storeHtml);
}

function checkToggle(){
	$('.js-shopping-list').on('click', '.shopping-item-toggle', function(event){
		const index = $(this).parents('.js-item-index-element').attr('data-item-index');
		console.log(index);
	})
}


function itemAddHandler() {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const textField = $('.js-shopping-list-entry');
    let name = textField.val();
    textField.val("");
		STORE.push({name, checked:false});
		renderHtml();
    console.log(STORE);
  });
}

function main() {
	itemAddHandler();
	renderHtml();
	checkToggle();
}

$(main);