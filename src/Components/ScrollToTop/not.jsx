{/*
//Payments
<?php
header('Content-Type: application/json');

// Get the raw POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate the request
if (!isset($data['amount']) || !isset($data['currency'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid request. Amount or currency is missing.']);
    exit;
}

// Yoco secret key
$secretKey = 'sk_live_af08d43beB7Vvy1ca5c4a16bd3f4'; // Replace with your Yoco secret key  
$authorization = 'Bearer ' . $secretKey;

// Payment data
$amount = $data['amount'];
$currency = $data['currency'];

// Initialize cURL session to create a Checkout
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://payments.yoco.com/api/checkouts');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: ' . $authorization,
    'Content-Type: application/json',
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'amount' => $amount,
    'currency' => $currency,
]));

// Execute cURL request
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Handle Yoco response
if ($httpCode === 200) {
    $responseData = json_decode($response, true);

    // Extract the `id` and `redirectUrl` from the response
    $redirectUrl = $responseData['redirectUrl'];

    // Respond with the `redirectUrl`
    echo json_encode([
        'success' => true,
        'redirectUrl' => $redirectUrl
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Failed to create Checkout.',
        'error' => $response
    ]);
}
?>

//email
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Set SMTP server and port
    ini_set("SMTP", "smtp.bizstrat.co.za");
    ini_set("smtp_port", 25);

    // Parse incoming JSON data
    $input = json_decode(file_get_contents("php://input"), true);

    // Check required fields
    if (
        isset($input['companyName'], $input['email'], $input['legalAgreement']) &&
        !empty($input['companyName']) && !empty($input['email']) && !empty($input['legalAgreement'])
    ) {
        // Extract form data
        $companyName = $input['companyName'];
        $address = $input['address'] ?? '';
        $tel = $input['tel'] ?? '';
        $email = $input['email'];
        $vatNumber = $input['vatNumber'] ?? '';
        $attendanceOption = $input['attendanceOption'] ?? '';
        $paymentMethod = $input['paymentMethod'] ?? '';
        $delegates = isset($input['delegates']) ? json_encode($input['delegates'], JSON_PRETTY_PRINT) : '';
        $totalPrice = $input['totalPrice'] ?? '';

        // Compose email
        $to = "registrations@bizstrat.co.za";
        $subject = "PFAS Delegate Registration";
        $body = "Company Name: $companyName\nAddress: $address\nTel: $tel\nEmail: $email\nVAT Reg No: $vatNumber\nAttendance Option: $attendanceOption\nPayment Method: $paymentMethod\nDelegates:\n$delegates\nTotal Price: $totalPrice\nLegal Agreement: " . ($input['legalAgreement'] ? "Yes" : "No");

        // Additional headers
        $headers = "From: $companyName <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Send email
        if (mail($to, $subject, $body, $headers)) {
            http_response_code(200);
            echo json_encode(["message" => "Email sent successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Failed to send email."]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Missing required fields."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Invalid request method."]);
}
?>
//contact
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Set SMTP server and port
    ini_set("SMTP", "smtp.bizstrat.co.za");
    ini_set("smtp_port", 25);

    // Check if all required form fields are set
    if (isset($_POST['fullName'], $_POST['email'], $_POST['interest'], $_POST['message'])) {
        // Retrieve form data
        $fullName = $_POST['fullName'];
        $companyName = isset($_POST['companyName']) ? $_POST['companyName'] : '';
        $email = $_POST['email'];
        $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
        $interest = $_POST['interest']; // Used as the subject
        $message = $_POST['message'];

        // Compose email
        $to = 'admin@bizstrat.co.za';
        $subjectLine = $interest; // Set the email subject as the "interest"
        $body = "Full Name: $fullName\n\nCompany Name: $companyName\n\nEmail: $email\n\nBusiness Cell Number: $phone\n\nSubject: $interest\n\nMessage:\n$message\n\nSent from: $email"; // Include the sender's email address in the message

        // Set additional headers
        $headers = "From: $fullName <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Send email
        if (mail($to, $subjectLine, $body, $headers)) {
            http_response_code(200); // Success response
            echo "Message sent successfully.";
        } else {
            http_response_code(500); // Internal server error
            echo "Failed to send the message.";
        }
    } else {
        http_response_code(400); // Bad request
        echo "Required form fields are missing.";
    }
} else {
    http_response_code(405); // Method not allowed
    echo "Method not allowed.";
}
?>

//webhook
<?php
// Your shared secret from Yoco
$webhookSecret = 'sk_live_af08d43beB7Vvy1ca5c4a16bd3f4'; // Replace with your actual secret

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    ini_set("SMTP", "smtp.bizstrat.co.za");
    ini_set("smtp_port", 25);
    ini_set("sendmail_from", "admin@bizstrat.co.za");

    // Parse incoming JSON payload
    $data = file_get_contents('php://input');
    $parsedData = json_decode($data, true);

    // Check for required headers
    $signatureHeader = $_SERVER['HTTP_WEBHOOK_SIGNATURE'] ?? '';
    $id = $_SERVER['HTTP_WEBHOOK_ID'] ?? '';
    $timestamp = $_SERVER['HTTP_WEBHOOK_TIMESTAMP'] ?? '';

    // Verify timestamp to prevent replay attacks
    if (abs(time() - (int)$timestamp) > 180) { // 3 minutes
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Request timestamp is invalid or expired."]);
        exit;
    }

    // Construct signed content
    $signedContent = $id . '.' . $timestamp . '.' . $data;

    // Exclude the 'whsec_' prefix and calculate the expected signature
    $secretKey = base64_decode(substr($webhookSecret, strpos($webhookSecret, '_') + 1));
    $expectedSignature = base64_encode(hash_hmac('sha256', $signedContent, $secretKey, true));

    // Extract the signature from the header, removing the version prefix
    $signature = explode(',', explode(' ', $signatureHeader)[0])[1] ?? '';

    // Verify the signature
    if (!hash_equals($expectedSignature, $signature)) {
        http_response_code(403);
        echo json_encode(["status" => "error", "message" => "Invalid signature."]);
        exit;
    }

    // Process successful payment event
    if (isset($parsedData['type']) && $parsedData['type'] === 'payment.succeeded') {
        $payload = $parsedData['payload'];
        $transactionId = $payload['id'] ?? 'Unknown';
        $amount = $payload['amount'] / 100; // Convert cents to currency
        $currency = $payload['currency'] ?? 'Unknown';
        $status = $payload['status'] ?? 'Unknown';
        $checkoutId = $payload['metadata']['checkoutId'] ?? 'Unknown';
        $paymentDate = $payload['createdDate'] ?? 'Unknown';
        $cardDetails = $payload['paymentMethodDetails']['card'] ?? null;

        $cardInfo = $cardDetails
            ? "Card Scheme: {$cardDetails['scheme']}, Masked Card: {$cardDetails['maskedCard']}, Expiry: {$cardDetails['expiryMonth']}/{$cardDetails['expiryYear']}"
            : "No card details available";

        // Notify admin via email
        $adminEmail = 'admin@bizstrat.co.za';
        $subject = "Payment Successful - Checkout ID: $checkoutId";
        $body = "A payment was successfully processed.\n\n" .
                "Transaction ID: $transactionId\n" .
                "Checkout ID: $checkoutId\n" .
                "Amount: $amount $currency\n" .
                "Status: $status\n" .
                "Date: $paymentDate\n" .
                "$cardInfo\n";

        $headers = "From: admin@bizstrat.co.za\r\n";
        $headers .= "Reply-To: admin@bizstrat.co.za\r\n";

        // Send email to admin
        if (mail($adminEmail, $subject, $body, $headers)) {
            http_response_code(200);
            echo json_encode(["status" => "success", "message" => "Payment processed and email sent."]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "message" => "Payment processed but failed to send email."]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Unsupported or missing event type."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>

//register webhook
<?php
header("Content-Type: application/json");

// Your Yoco Secret Key
$secretKey = 'sk_live_af08d43beB7Vvy1ca5c4a16bd3f4'; // Replace with your actual secret key

// Ensure the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON input from the frontend
    $inputData = json_decode(file_get_contents('php://input'), true);

    // Validate input data
    if (!isset($inputData['name']) || !isset($inputData['url'])) {
        http_response_code(400);
        echo json_encode(["error" => "Missing required fields: name and url"]);
        exit;
    }

    $webhookData = [
        "name" => $inputData['name'], // Webhook name from the frontend
        "url" => $inputData['url']   // Webhook URL from the frontend
    ];

    // Initialize cURL
    $ch = curl_init("https://payments.yoco.com/api/webhooks");

    // Configure cURL options
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer $secretKy",
        "Content-Type: application/json"
    ]);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($webhookData));

    // Execute the request
    $response = curl_exec($ch);

    // Handle cURL errors
    if (curl_errno($ch)) {
        http_response_code(500);
        echo json_encode(["error" => curl_error($ch)]);
    } else {
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if ($httpCode === 200 || $httpCode === 201) {
            http_response_code(200);
            echo $response; // Send Yoco API response back to the frontend
        } else {
            http_response_code($httpCode);
            echo $response; // Send Yoco API error response back to the frontend
        }
    }

    // Close cURL
    curl_close($ch);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>

//list webhook
<?php
// Set your Yoco API key
$apiKey = 'sk_live_af08d43beB7Vvy1ca5c4a16bd3f4';

// URL for Yoco's webhook endpoint
$url = 'https://payments.yoco.com/api/webhooks';

// Initialize cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
]);

// Execute the request and handle errors
$response = curl_exec($ch);
if (curl_errno($ch)) {
    // Handle the error
    header('Content-Type: application/json', true, 500);
    echo json_encode(['message' => 'Failed to fetch webhooks', 'error' => curl_error($ch)]);
    exit();
}

// Check the response code
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode != 200) {
    header('Content-Type: application/json', true, $httpCode);
    echo json_encode(['message' => 'Error: ' . $httpCode, 'response' => $response]);
} else {
    // Decode the JSON response
    $data = json_decode($response, true);

    // Check if the response contains the 'subscriptions' key
    if (isset($data['subscriptions'])) {
        // Prepare a simplified array for the frontend
        $webhooks = [];
        foreach ($data['subscriptions'] as $subscription) {
            $webhooks[] = [
                'id' => $subscription['id'],
                'name' => $subscription['name'],
                'url' => $subscription['url'],
                'mode' => $subscription['mode']
            ];
        }

        // Send the simplified JSON response to the frontend
        header('Content-Type: application/json');
        echo json_encode($webhooks);
    } else {
        header('Content-Type: application/json', true, 404);
        echo json_encode(['message' => 'No subscriptions found']);
    }
}
?>


*/}