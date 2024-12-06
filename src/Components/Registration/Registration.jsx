import React, { useState, useEffect} from 'react';
import './Registration.css';
import emailjs from 'emailjs-com';
import axios from 'axios'
import io from 'socket.io-client';

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
    totalPrice:'',
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
  /*const sendEmail = (formData) => {
    emailjs.send('yservice_45ornv8', 'template_ib0x3df', formData, 'yos4RhFccIHXaSTUlQg')
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
  }; */
  const sendEmail = (formData) => {
    const emailParams = {
      companyName: formData.companyName,
      address: formData.address,
      email: formData.email,
      tel: formData.tel,
      vatNumber: formData.vatNumber,
      delegates: JSON.stringify(formData.delegates),
      attendanceOption: formData.attendanceOption,
      paymentMethod: formData.paymentMethod,
      legalAgreement: formData.legalAgreement ? "Yes" : "No",
      totalPrice: formData.totalPrice ,
    }; 
  
    
   emailjs
      .send('service_45ornv8', 'template_ib0x3df', emailParams, 's4RhFccIHXaSTUlQg')
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Your registration has been submitted successfully!');
      })
      .catch((error) => {
        console.error('Error sending email', error);
        alert('An error occurred while sending your registration. Please try again.');
      });
  }; 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fill in all required fields before submitting.');
      return;
    }

    // Simulate sending the form via email (use a backend API or email service like SendGrid or Nodemailer)
   // alert('Form submitted successfully!');
    setFormData({ ...formData, isFormSubmitted: true });
    sendEmail(formData);
  };

  const handleYocoPay = () => {
    const yoco = new window.YocoSDK({
      publicKey: 'pk_test_806e7970GN78mBK21594', // Replace with your Yoco public key
    });
  
    yoco.showPopup({
      amountInCents: Math.round(formData.totalPrice * 100 + formData.totalPrice * 100 * 0.15), // Add 15% VAT
      currency: 'ZAR',
      callback: async (result) => {
        if (result.error) {
          alert('Payment failed: ' + result.error.message);
        } else {
          alert('Payment successful! Token: ' + result.id);
  
          // Send the token to your backend for further processing
          try {
            const response = await axios.post('http://localhost:5000/api/payment/create', {
              token: result.id,
              amount: Math.round(formData.totalPrice * 100 + formData.totalPrice * 100 * 0.15),
              currency: 'ZAR',
              description: 'Conference Registration',
            });
  
            if (response.data.success) {
              alert('Payment processed successfully on the server!');
            } else {
              alert('Payment processing failed on the server.');
            }
          } catch (error) {
            console.error('Error sending payment data to the backend:',error);
            alert('An error occurred while processing your payment. Please try again.');
          }
        }
      },
    });
  };
  
  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>DELEGATE REGISTRATION FORM</h2>

      <h4>Attendance Option</h4>
      <label>
        <input
          type="radio"
          name="attendanceOption"
          value="Venue (R7990.00)"
          onChange={(e) => handleInputChange(e, null, 'attendanceOption')}
          checked={formData.attendanceOption === 'Venue (R7990.00)'}
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
      <br/>
      <h4>Online Option - MS TEAMS & ZOOM</h4>
      <label>
        <input
          type="radio"
          name="attendanceOption"
          value="Online (R5490.00)"
          onChange={(e) => handleInputChange(e, null, 'attendanceOption')}
          checked={formData.attendanceOption === 'Online (R5490.00)'}
        />
       <strong>Online Option </strong>- MST & ZOOM (R5490.00 excl. VAT per delegate)
      </label>
       <br/>
       <h3>Registration</h3>
       <br/>
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
         {/* <label>Card Number:</label>
          <input type="text" className="form-input" required />
          <label>Expiry Date:</label>
          <input type="month" className="form-input" required />
          <label>CVV:</label>
          <input type="text" className="form-input" required /> */}
          <label>Total Price: <span style={{color:"red"}}>Note 15% VAT WILL BE AUTOMATICALLY ADDED.<br/> DON'T ADD IT HERE.</span></label>
          
          <input
            type="number"
            className="form-input"
            value={formData.totalPrice}
            onChange={(e) => handleInputChange(e, null, 'totalPrice')}
            required
          />
          <div id="yoco-button-container"></div>
          <button type="button" className="pay-button" onClick={handleYocoPay}>
          Pay with Yoco
          </button>
        </div>
      )} 
      <h5 style={{color:"red"}}>IMPORTANT*</h5>
      <label>
        <input type="checkbox" checked={formData.legalAgreement} onChange={(e) => handleInputChange(e, null, 'legalAgreement')} />
        This is a legally binding document
      </label>

      <button type="submit" className="submit-button" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;




