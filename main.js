var yoco = new window.YocoSDK({
    publicKey: 'pk_test_ed3c54a6gOol69qa7f45',
  });
  var checkoutButton = document.querySelector('#checkout-button');
  checkoutButton.addEventListener('click', function () {
    yoco.showPopup({
      amountInCents: 20,
      currency: 'ZAR',
      name: 'Your Store or Product',
      description: 'Awesome description',
      callback: function (result) {
        // This function returns a token that your server can use to capture a payment
        if (result.error) {
          const errorMessage = result.error.message;
          alert("error occured: " + errorMessage);
        } else {
          alert("card successfully tokenised: " + result.id);
        }
        // In a real integration - you would now pass this chargeToken back to your
        // server along with the order/basket that the customer has purchased.
      }
    })
  });