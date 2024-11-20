import React, { useState } from 'react';
import './Registration.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    email: '',
    tel: '',
    vatNumber: '',
    delegates: [{ name: '', position: '', email: '' }],
    attendanceOption: '',
    paymentMethod: '',
    legalAgreement: false,
    totalPrice: '',
    isFormSubmitted: false,
  });

  const handleInputChange = (e, index, field) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    if (field.startsWith('delegate')) {
      const updatedDelegates = [...formData.delegates];
      updatedDelegates[index][field.split('.')[1]] = value;
      setFormData({ ...formData, delegates: updatedDelegates });
    } else if (field === 'attendanceOption') {
      setFormData({ ...formData, attendanceOption: e.target.value });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const addDelegate = () => {
    setFormData({
      ...formData,
      delegates: [...formData.delegates, { name: '', position: '', email: '' }],
    });
  };

  const deleteDelegate = (index) => {
    const updatedDelegates = [...formData.delegates];
    updatedDelegates.splice(index, 1);
    setFormData({ ...formData, delegates: updatedDelegates });
  };

  const validateForm = () => {
    const { companyName, address, email, tel, vatNumber, delegates, attendanceOption, paymentMethod, legalAgreement } = formData;
    if (!companyName || !address || !email || !tel || !vatNumber || !attendanceOption || !paymentMethod || !legalAgreement) {
      return false;
    }
    for (const delegate of delegates) {
      if (!delegate.name || !delegate.position || !delegate.email) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fill in all required fields before submitting.');
      return;
    }

    // Simulate sending the form via email (use a backend API or email service like SendGrid or Nodemailer)
    alert('Form submitted successfully!');
    setFormData({ ...formData, isFormSubmitted: true });
  };

  const handlePay = () => {
    if (!formData.totalPrice) {
      alert('Please enter the total price before proceeding.');
      return;
    }

    // Use PayPal SDK to process the payment
    window.paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: formData.totalPrice,
              },
            },
          ],
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          alert(`Payment successful! Transaction completed by ${details.payer.name.given_name}.`);
          // Generate and send invoice to both emails
        });
      },
    }).render('#paypal-button-container');
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>DELEGATE REGISTRATION FORM</h2>

      <label>Company Name:</label>
      <input type="text" className="form-input" value={formData.companyName} onChange={(e) => handleInputChange(e, null, 'companyName')} />

      <label>Address:</label>
      <input type="text" className="form-input" value={formData.address} onChange={(e) => handleInputChange(e, null, 'address')} />

      <label>Tel:</label>
      <input type="text" className="form-input" value={formData.tel} onChange={(e) => handleInputChange(e, null, 'tel')} />

      <label>E-Mail:</label>
      <input type="email" className="form-input" value={formData.email} onChange={(e) => handleInputChange(e, null, 'email')} />

      <label>VAT Reg. No:</label>
      <input type="text" className="form-input" value={formData.vatNumber} onChange={(e) => handleInputChange(e, null, 'vatNumber')} />

      <h3>Delegates</h3>
      {formData.delegates.map((delegate, index) => (
        <div key={index} className="delegate-section">
          <label>Name:</label>
          <input type="text" className="form-input" value={delegate.name} onChange={(e) => handleInputChange(e, index, 'delegate.name')} />

          <label>Position:</label>
          <input type="text" className="form-input" value={delegate.position} onChange={(e) => handleInputChange(e, index, 'delegate.position')} />

          <label>Email:</label>
          <input type="email" className="form-input" value={delegate.email} onChange={(e) => handleInputChange(e, index, 'delegate.email')} />
          <button type="button" className="delete-button" onClick={() => deleteDelegate(index)}>
            Delete Delegate
          </button>
        </div>
      ))}

      <button type="button" className="add-delegate-button" onClick={addDelegate}>
        Add Delegate
      </button>

      <h4>Attendance Option</h4>
      <label>
        <input
          type="radio"
          name="attendanceOption"
          value="Face-to-Face (R7990.00)"
          onChange={(e) => handleInputChange(e, null, 'attendanceOption')}
          checked={formData.attendanceOption === 'Face-to-Face (R7990.00)'}
        />
        Venue (R7990.00 excl. VAT per delegate)
      </label>
      <label>
        <input
          type="radio"
          name="attendanceOption"
          value="Register & pay by 25/10/24 & Pay R6990.00 excl. Vat per Delegate"
          onChange={(e) => handleInputChange(e, null, 'attendanceOption')}
          checked={formData.attendanceOption === 'Register & pay by 25/10/24 & Pay R6990.00 excl. Vat per Delegate'}
        />
        Register & pay by 13/12/24 & Pay R6990.00 excl. Vat per Delegate 
      </label>
      <label>
        <input
          type="radio"
          name="attendanceOption"
          value="Table of 5 delegates: R34950.00 Excl. VAT"
          onChange={(e) => handleInputChange(e, null, 'attendanceOption')}
          checked={formData.attendanceOption === 'Table of 5 delegates: R34950.00 Excl. VAT'}
        />
        Table of 5 delegates: R34950.00 Excl. VAT
      </label>
      <label>
        <input
          type="radio"
          name="attendanceOption"
          value="Table of 10 delegates: R59900 Excl. VAT"
          onChange={(e) => handleInputChange(e, null, 'attendanceOption')}
          checked={formData.attendanceOption === 'Table of 10 delegates: R59900 Excl. VAT'}
        />
        Table of 10 delegates: R59900 Excl. VAT
      </label>
      <label>
        <input
          type="radio"
          name="attendanceOption"
          value="Online (R5490.00)"
          onChange={(e) => handleInputChange(e, null, 'attendanceOption')}
          checked={formData.attendanceOption === 'Online (R5490.00)'}
        />
       ,<strong>Online Option </strong>- MST & ZOOM (R5490.00 excl. VAT per delegate)
      </label>

      <h4>Payment Method</h4>
      <label>
        <input
          type="radio"
          value="Bank Transfer"
          checked={formData.paymentMethod === 'Bank Transfer'}
          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
        />
        Bank Transfer
      </label>
      {formData.paymentMethod === 'Bank Transfer' && (
        <div className="bank-details">
          <p>Bank: First National Bank</p>
          <p>Branch Name: Randburg Commercial Suite</p>
          <p>Account No: 62322454422</p>
          <p>Branch Code: 250655</p>
          <p>Swift Code: FIRNZAJJ</p>
        </div>
      )}
      <label>
        <input
          type="radio"
          value="Credit/Debit Card"
          checked={formData.paymentMethod === 'Credit/Debit Card'}
          onChange={(e) => handleInputChange(e, null, 'paymentMethod')}
        />
        Credit/Debit Card - Submit Form First
      </label>

      {formData.paymentMethod === 'Credit/Debit Card' && formData.isFormSubmitted && (
        <div className="card-details">
          <label>Card Number:</label>
          <input type="text" className="form-input" required />
          <label>Expiry Date:</label>
          <input type="month" className="form-input" required />
          <label>CVV:</label>
          <input type="text" className="form-input" required />
          <label>Total Price:</label>
          <input
            type="number"
            className="form-input"
            value={formData.totalPrice}
            onChange={(e) => handleInputChange(e, null, 'totalPrice')}
            required
          />
          <div id="paypal-button-container"></div>
          <button type="button" className="pay-button" onClick={handlePay}>
            Pay
          </button>
        </div>
      )}

      <label>
        <input type="checkbox" checked={formData.legalAgreement} onChange={(e) => handleInputChange(e, null, 'legalAgreement')} />
        This is a legally binding document
      </label>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;


