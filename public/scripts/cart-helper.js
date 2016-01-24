"use strict";

function addToBasket(basket, item) {
	basket[item] = 1;
	$('#basket .list-group')
			.append($('<li class="list-group-item" value="' + item + '">' + item + '</li>'));
}

function removeFromBasket (basket, item) {
	if (basket[item]) {
		$('#basket .list-group-item[value="' + item + '"]')
			.remove();
		delete basket[item];
	}
}

function isBasketEmpty(basket) {
	return (Object.keys(basket).length > 0);
}

function toggleCheckout(flag) {
	$('#checkout')
		.toggleClass('disabled', !flag)
		.prop('disabled', !flag);
}

function submitForm () {
	$('#productForm').attr('action', '/confirm').submit();
}

$(function() {
	var itemsInBasket = {};
	$('input[type="checkbox"]').click(function() {
		if (this.checked) {
			addToBasket(itemsInBasket, this.value);
		} else {
			removeFromBasket(itemsInBasket, this.value);
		}

		if (isBasketEmpty(itemsInBasket)) {
			toggleCheckout(true);
		} else {
			toggleCheckout(false);
		}
	});

	$('#checkout').click(submitForm);
});
