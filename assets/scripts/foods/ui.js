"use strict";

// Require:
const showFoodsTemplate = require("../templates/food-collection.handlebars");

const indexFoodsSuccess = (data, hideMessage) => {
  const showFoodsHtml = showFoodsTemplate({ foods: data.foods });

  if (!hideMessage) {
    // if no existing foods:
    if (data.foods.length === 0) {
      $("#message").text("no products in your database yet!");
    } else {
      $("#message").text("successfully viewing product entries!");
    }
  }

  $("#content").empty();
  $("#content").append(showFoodsHtml);
  $("#content").show();
};

const indexFoodsFailure = () => {
  $("#message").text("couldnt show all products. please try again.");
};

const createFoodSuccess = (data) => {
  const showFoodsHtml = showFoodsTemplate({ foods: data.foods });

  $("#message").text("new product entry added to list!");
  $("#content").append(showFoodsHtml);

  $("form").trigger("reset");
};

const createFoodFailure = () => {
  $("#message").text("couldnt add new product entry. try again!");
};

const destroyFoodSuccess = () => {
  $("#message").text("food entry deleted!");
};

const destroyFoodFailure = () => {
  $("#message").text("deletion unsuccessful. please try again!");
};

const updateFoodSuccess = (foodId) => {
  $("#message").text("food entry updated!");

  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();

  $(`#updateFood-${foodId}`).modal("hide");
  $(".modal-backdrop").removeClass("show");
  return new Promise((resolve) =>
    setTimeout(() => {
      $(".modal-backdrop").remove();
      resolve();
    }, 150)
  );
};

const updateFoodFailure = () => {
  $("#message").text("entry update unsuccessful! please try again.");
};

module.exports = {
  createFoodSuccess,
  createFoodFailure,
  indexFoodsSuccess,
  indexFoodsFailure,
  destroyFoodSuccess,
  destroyFoodFailure,
  updateFoodSuccess,
  updateFoodFailure,
};
