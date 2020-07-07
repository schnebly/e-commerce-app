import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pk = "pk_test_51H2LNHKtLH0YULAj03rKJ7W9KXzhtPsAzdG2C7nRU20dWORVpLRdCsMNHk4LIY3pTUHF04bb86gCaHTsYpiEVXrT009L9lw3h1";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripCheckout 
            label="Pay Now"
            name='CRWN Clothing LLC'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pk}
        />
    );
};

export default StripCheckoutButton;