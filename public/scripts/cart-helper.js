"use strict";
define([
	'jquery'
	], function ($) {

	function addToBasket(basket, productId) {
		basket[productId] = 1;
		var productName = $('label#' + productId).text();
		$('#basket .list-group')
				.append($('<li class="list-group-item" value="' + productId + '">' + productName + '</li>'));
		return basket;
	}

	function removeFromBasket (basket, productId) {
		if (basket[productId]) {
			$('#basket .list-group-item[value="' + productId + '"]')
				.remove();
			delete basket[productId];
		}
		return basket;
	}

	function isBasketEmpty(basket) {
		return (Object.keys(basket).length === 0);
	}

	function toggleCheckout(flag) {
		$('#checkout')
			.toggleClass('disabled', !flag)
			.prop('disabled', !flag);
	}

	function submitForm () {
		$('#productForm').attr('action', '/confirm').submit();
	}

	$(function () {
		var itemsInBasket = {};
		$('input[type="checkbox"]').click(function () {
			if (this.checked) {
				itemsInBasket = addToBasket(itemsInBasket, this.value);
			} else {
				itemsInBasket = removeFromBasket(itemsInBasket, this.value);
			}

			if (!isBasketEmpty(itemsInBasket)) {
				toggleCheckout(true);
			} else {
				toggleCheckout(false);
			}
		});

		$('#checkout').click(submitForm);
	});

	// for unit tests
	return {
		addToBasket: addToBasket,
		removeFromBasket: removeFromBasket,
		isBasketEmpty: isBasketEmpty
	};
});
