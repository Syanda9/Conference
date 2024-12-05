import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <h2>Terms and Conditions: Please read carefully.</h2>
      <p>The following Ts & Cs apply:</p>
      <ul>
        <li>
          All payments to be made directly to Servigraph 30 cc t/a BizStrat, Payment is required in full, 5 days from date of invoice.
        </li>
        <li>
          No seats will be reserved, unless otherwise agreed to by Servigraph 30 cc t/a BizStrat.
        </li>
        <li>
          Servigraph 30 cc t/a BizStrat reserves the right to change speakers, program content, date and venue, due to circumstances beyond the control of Servigraph 30 cc t/a BizStrat.
        </li>
        <li>
          The signed registration form is a legally binding document.
        </li>
        <li>
          The conference/workshop fee includes conference/workshop material, lunches, and refreshments.
        </li>
        <li>
          Servigraph 30 cc t/a BizStrat is not liable for travel and accommodation expenses unless otherwise stated in writing.
        </li>
      </ul>

      <h3>Cancellations</h3>
      <ul>
        <li>All cancellations will be subject to approval by Servigraph 30 cc t/a BizStrat management.</li>
        <li>
          All cancellations made 14 working days prior to the date of the mentioned event will be subject to a 50% cancellation fee.
        </li>
        <li>
          Cancellations made within 7 days or less of the date of the mentioned event will be subject to a 100% cancellation fee.
        </li>
        <li>
          There will be no refunds or credit vouchers unless agreed to by BizStrat Management in writing.
        </li>
      </ul>

      <h3>Substitutions</h3>
      <ul>
        <li>Delegates, or any substitutions, must notify Servigraph 30 cc t/a BizStrat in writing.</li>
        <li>
          There is no charge for substitutions. Servigraph 30 cc t/a BizStrat will not be held liable for incorrect delegate details on certificates due to late substitutions being made on the day of the conference/workshop.
        </li>
      </ul>

      <p>
        Views expressed by speakers and facilitators are not necessarily those of Servigraph 30 cc t/a BizStrat.
      </p>
    </div>
  );
};

export default Terms;
