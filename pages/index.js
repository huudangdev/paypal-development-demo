import React from 'react'
import Swal from 'sweetalert2'


class PayPalButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEnabled: false
    }
  }
  componentDidMount () {
    this.setState({ isEnabled: true })
    paypal.Buttons({
      createOrder: function (data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '0.1'
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function (details) {
          // This function shows a transaction success message to your buyer.
          Swal.fire({
            title: 'Transaction success',
            text: 'Transaction completed by ' + details.payer.name.given_name,
            icon: 'success'
          })
          // Swal.fire(
          //   'Transaction success',
          //   'Transaction completed by ' + details.payer.name.given_name
          // )
        });
      }
    }).render('#paypal-button-container');
  }

  render () {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 16px)'
      }}>
        <div id='paypal-button-container' />
      </div>
    )
  }
}
export default PayPalButton