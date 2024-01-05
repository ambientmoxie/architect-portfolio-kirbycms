<!-- <?php
        $session = $kirby->session();
        // Check if it's the first visit in this session
        if ($session->get('isNewSession') === null) {
            $session->set('isNewSession', false); // Mark as not a new session anymore
            $isNewSession = $session->get('isNewSession');
        }
        ?> -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?= snippet('seo/meta') ?>
    <link rel="icon" type="image/svg+xml" href="../../assets/images/favicon.svg">
    <link rel="icon" type="image/png" href="../..//assets/images/favicon.png">
    <?= css('assets/bundle/css/bundle.css') ?>

</head>

<body id="<?= $page->intendedTemplate() ?>">