<?php snippet('header') ?>
<header id="page__header">
    <a href="<?= $site->url() ?>">Close</a>
</header>

<main id="page__content">
    <section id="about__biography">
        <h1>About</h1>
        <p><?= $page->biography() ?></p>
    </section>
    <section id="about__contact">
        <h1>Contact</h1>
        <ul>
            <li><?= $page->reachability() ?></li>
            <li>G: <?= $site->telephoneg() ?></li>
            <li>F: <?= $site->telephonef() ?></li>
            <li><?= $site->emailaddress() ?></li>
            <li>
                <a href="<?= $site->socialinstagramurl() ?>" target="_blank">
                    Find us on instagram
                </a>
            </li>
        </ul>
    </section>
    <section id="about__exhibitions">
        <h1>Exhibitions</h1>

        <?php


        function parseDate($startingDate, $endingDate)
        {
            if ($startingDate->toDate("Y") !== $endingDate->toDate("Y")) {
                // If the years are not the same
                echo $startingDate->toDate('d M Y');
            } else {
                // If the years are the same
                if ($startingDate->toDate('m') !== $endingDate->toDate('m')) {
                    // If the months are not the same
                    echo $startingDate->toDate('d M');
                } else {
                    // If the months are the same
                    echo $startingDate->toDate('d');
                }
            }

            echo (" to " . $endingDate->toDate('d M Y'));
        }


        $exhibitions = $page->exhibitions()->toStructure();
        foreach ($exhibitions as $exhibition) :
            $startingDate = $exhibition->startingdate();
            $endingDate   = $exhibition->endingdate();
        ?>

            <ul>
                <li><?= parseDate($startingDate, $endingDate) ?></li>
                <li><?= $exhibition->name() ?></li>
                <li><?= $exhibition->place() ?></li>
                <li><?= $exhibition->adress() ?></li>
            </ul>

        <?php endforeach ?>
    </section>
</main>
<?php snippet('footer') ?>