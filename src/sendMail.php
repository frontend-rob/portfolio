<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"):
        header("Access-Control-Allow-Origin: *");
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;
        $privacy = $params->privacy;

        $recipient = 'YOUR_EMAIL_ADDRESS_HERE';  
        $subject = "Contact From <$email>";
        $message = "From: " . $name . "<br>" .
                   "Message: " . $message . "<br><br>" .
                   "Privacy Policy Accepted: " . ($privacy ? "Yes" : "No");

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@YOUR_EMAIL";

        mail($recipient, $subject, $message, implode("\r\n", $headers));
        break;
    default:
        header("Allow: POST", true, 405);
        exit;
}
