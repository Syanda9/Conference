import React, { useState } from 'react';

function List() {
  const [webhooks, setWebhooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWebhooks = () => {
    setLoading(true);
    setError(null);

    fetch('https://pfas-africa.bizstrat.co.za/backend/listwebhook.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch webhooks');
        }
        return response.json();
      })
      .then(data => {
        setWebhooks(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <h1>Yoco Webhooks</h1>
      <button onClick={fetchWebhooks}>List</button>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {!loading && !error && webhooks.length > 0 && (
        <ul>
          {webhooks.map((webhook, index) => (
            <li key={index}>
              <strong>Webhook ID:</strong> {webhook.id} <br />
              <strong>Name:</strong> {webhook.name} <br />
              <strong>URL:</strong> {webhook.url} <br />
              <strong>Mode:</strong> {webhook.mode} <br />
            </li>
          ))}
        </ul>
      )}
      {!loading && !error && webhooks.length === 0 && <div>No webhooks found.</div>}
    </div>
  );
}

export default List;
