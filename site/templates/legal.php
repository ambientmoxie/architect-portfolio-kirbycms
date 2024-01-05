<?php snippet('header') ?>
<header id="page__header">
    <a href="<?= $site->url() ?>">Close</a>
</header>

<main id="page__content">
    <h1>Legal notice</h1>
    <p><?= kti($page->notice()) ?></p>
</main>

<?php snippet('footer') ?>