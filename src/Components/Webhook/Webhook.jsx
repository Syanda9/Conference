import React, { useState } from 'react';

const WebhookRegistration = () => {
    const [webhookName, setWebhookName] = useState('');
    const [webhookUrl, setWebhookUrl] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const webhookData = { name: webhookName, url: webhookUrl };

        try {
            const response = await fetch('https://pfas-africa.bizstrat.co.za/backend/register_webhook.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(webhookData),
            });

            const responseData = await response.json();

            if (response.ok) {
                setResponseMessage(`Webhook registered successfully: ${JSON.stringify(responseData)}`);
            } else {
                setResponseMessage(`Error: ${responseData.error || 'Unknown error occurred'}`);
            }
        } catch (error) {
            setResponseMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h2>Register Webhook</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1em' }}>
                    <label htmlFor="webhookName">Webhook Name:</label>
                    <input
                        type="text"
                        id="webhookName"
                        value={webhookName}
                        onChange={(e) => setWebhookName(e.target.value)}
                        required
                        style={{ width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '1em' }}>
                    <label htmlFor="webhookUrl">Webhook URL:</label>
                    <input
                        type="url"
                        id="webhookUrl"
                        value={webhookUrl}
                        onChange={(e) => setWebhookUrl(e.target.value)}
                        required
                        style={{ width: '100%' }}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            {responseMessage && (
                <p style={{ marginTop: '1em', color: responseMessage.startsWith('Error') ? 'red' : 'green' }}>
                    {responseMessage}
                </p>
            )}
        </div>
    );
};

export default WebhookRegistration;
