import React from 'react';
import Stripecheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKry =
    'pk_test_51GrNJoHM8lM0tAoaMxldOtCnAX5WruTDN9mTpxX6vzWvWZTqimLbiQH8iwZCtqtWUJHoLEF2uSm89WdZbRFTPZnc002pU2vGMy';
  const onToken = (token) => {
    console.log(token);
    alert('payment sussesful');
  };

  return (
    <Stripecheckout
      label='Pay Now'
      name='CRWN clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKry}
    />
  );
};

export default StripeCheckoutButton;
