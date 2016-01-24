define([
	'jquery'
	], function ($){

	"use strict";

	function addToBasket(basket, item) {
		basket[item] = 1;
		$('#basket .list-group')
				.append($('<li class="list-group-item" value="' + item + '">' + item + '</li>'));
		return basket;
	}

	function removeFromBasket (basket, item) {
		if (basket[item]) {
			$('#basket .list-group-item[value="' + item + '"]')
				.remove();
			delete basket[item];
		}
		return basket;
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
				itemsInBasket = addToBasket(itemsInBasket, this.value);
			} else {
				itemsInBasket = removeFromBasket(itemsInBasket, this.value);
			}

			if (isBasketEmpty(itemsInBasket)) {
				toggleCheckout(true);
			} else {
				toggleCheckout(false);
			}
		});

		$('#checkout').click(submitForm);
	});

	return {
		addToBasket: addToBasket,
		removeFromBasket: removeFromBasket,
		isBasketEmpty: isBasketEmpty
	};
});
