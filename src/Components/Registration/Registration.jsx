import React, { useState, useEffect} from 'react';
import './Registration.css';
import io from 'socket.io-client';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    code:'',
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
    const maxDelegates =
      formData.attendanceOption === 'Table of 5 delegates: R34950.00 Excl. VAT'
        ? 5
        : formData.attendanceOption === 'Table of 10 delegates: R59900 Excl. VAT'
        ? 10
        : Infinity;
  
    if (formData.delegates.length >= maxDelegates) {
      alert(`You can only add up to ${maxDelegates} delegates for this option.`);
      return;
    }
  
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
    const {code, companyName, address, email, tel, vatNumber, delegates, attendanceOption, paymentMethod, legalAgreement } = formData;
    if (!code || !companyName || !address || !email || !tel || !vatNumber || !attendanceOption || !paymentMethod || !legalAgreement) {
      return false;
    }
    for (const delegate of delegates) {
      if (!delegate.name || !delegate.position || !delegate.email) {
        return false;
      }
    }
    return true;
  };

  const sendEmail = (formData) => {
    fetch('https://pfas-africa.bizstrat.co.za/backend/sendEmail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to send email.');
      })
      .then((data) => {
        alert(data.message || 'Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
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
    alert('Submitting!');
    setFormData({ ...formData, isFormSubmitted: true });
    sendEmail(formData);
  };

  const handleYocoPay = async () => {
    // Send amount and currency to the backend to create the checkout and get the redirect URL
    try {
        const response = await fetch('https://pfas-africa.bizstrat.co.za/backend/payment.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: Math.round(formData.totalPrice * 100), // Amount in cents
                currency: 'ZAR',
            }),
        });

        const data = await response.json();

        if (data.success) {
            // Redirect the client to the generated Yoco checkout page
            window.location.href = data.redirectUrl;
        } else {
            alert('Failed to generate redirect URL: ' + data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while processing your request. Please try again.');
    }
};

  const calculateTotalPrice = () => {
    let basePrice = 0;
  
    switch (formData.attendanceOption) {
      case 'Venue (R7990.00)':
        basePrice = 7990 * formData.delegates.length; // Multiply by number of delegates
        break;
      case 'Register & pay by 13/12/24 & Pay R6990.00 excl. Vat per Delegate':
        basePrice = 6990 * formData.delegates.length; // Multiply by number of delegates
        break;
      case 'Table of 5 delegates: R34950.00 Excl. VAT':
        basePrice = 34950; // Fixed price for 5 delegates
        break;
      case 'Table of 10 delegates: R59900 Excl. VAT':
        basePrice = 59900; // Fixed price for 10 delegates
        break;
      case 'Online (R5490.00)':
        basePrice = 5490 * formData.delegates.length; // Multiply by number of delegates
        break;
      default:
        basePrice = 0;
    }
  
    // Add 15% VAT
    const totalWithVAT = basePrice * 1.15;
  
    // Update the state
    setFormData((prevData) => ({ ...prevData, totalPrice: totalWithVAT.toFixed(2) }));
  };
  
  
  // Trigger the calculation whenever the attendance option or number of delegates changes
  useEffect(() => {
    const maxDelegates =
      formData.attendanceOption === 'Table of 5 delegates: R34950.00 Excl. VAT'
        ? 5
        : formData.attendanceOption === 'Table of 10 delegates: R59900 Excl. VAT'
        ? 10
        : Infinity;
  
    if (formData.delegates.length > maxDelegates) {
      const trimmedDelegates = formData.delegates.slice(0, maxDelegates);
      setFormData((prevData) => ({ ...prevData, delegates: trimmedDelegates }));
    }
  
    calculateTotalPrice(); // Ensure the price is recalculated
  }, [formData.attendanceOption, formData.delegates.length]);
  
  
  
  
  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>PFAS DELEGATE REGISTRATION FORM</h2>

     <h4>Attendance Option</h4>
   {/*  <label>
        <input
          type="radio"
          name="attendanceOption"
          value="test (R5)"
          onChange={(e) => handleInputChange(e, null, 'attendanceOption')}
          checked={formData.attendanceOption === 'test (R5)'}
        />
        test (R5)
      </label> */}
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
          value="Register & pay by 13/12/24 & Pay R6990.00 excl. Vat per Delegate"
          onChange={(e) => handleInputChange(e, null, 'attendanceOption')}
          checked={formData.attendanceOption === 'Register & pay by 13/12/24 & Pay R6990.00 excl. Vat per Delegate'}
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
      <label><strong style={{color:"red"}}>CONFERENCE CODE:*</strong></label>
      <input type='text' className='form-input'value={formData.code} onChange={(e)=> handleInputChange(e, null, 'code')} style={{minWidthwidth:'30%', maxWidth:'50%'}}/>
       <br/>
       <h3>REGISTRATION</h3>
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
          <label>Total Price (incl. 15% VAT):</label>
          <input
            type="text"
            className="form-input"
            value={`R ${formData.totalPrice}`}
            readOnly
            style={{minWidth:'30%', maxWidth:'50%'}}
          />
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
        Credit/Debit Card / EFT / GPay - <span style={{color:"red"}}>Submit Form First</span> 
      </label>

      {formData.paymentMethod === 'Credit/Debit Card' &&  (
        <div className="card-details">
         {/* <label>Card Number:</label>
          <input type="text" className="form-input" required />
          <label>Expiry Date:</label>
          <input type="month" className="form-input" required />
          <label>CVV:</label>
          <input type="text" className="form-input" required /> */}
          <label>Total Price (incl. 15% VAT):</label>
          <input
            type="text"
            className="form-input"
            value={`R ${formData.totalPrice}`}
            readOnly
            style={{minWidth:'30%', maxWidth:'50%'}}
          />

          <div id="yoco-button-container"></div>
          <button type="button" className="pay-button" onClick={handleYocoPay}>
          Pay
          </button>
        </div>
      )} 
      <h5 style={{color:"red"}}>IMPORTANT*</h5>
      <label>
        <input type="checkbox" checked={formData.legalAgreement} onChange={(e) => handleInputChange(e, null, 'legalAgreement')} />
        This is a legally binding document. This is subject to terms and conditions.
      </label>

      <button type="submit" className="submit-button" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;






