<?php snippet('header') ?>

<header id="banners-container">

    <div id="fresh-news">
        <p>
            <?= $site->find("about")->hotnews() ?>
        </p>
    </div>

    <div id="ticker-container">
        <?php

        // Parse and return ticker wording

        $aboutPage = $site->find('about');
        $tickerWording = $aboutPage->ticker();
        $upperCaseTicker = ucwords($tickerWording);
        $finalTicker = $upperCaseTicker . " - ";

        $i = 0;
        $items = 30;
        while ($i < $items) {
            echo ("<span>" . $finalTicker . "</span>");
            $i++;
        }
        ?>
    </div>
    <div id="header-catalog">
        <ul class="inline-layout">
            <li>Year</li>
            <li>Product</li>
            <li>Sizes</li>
            <li>Description</li>
            <li>Price (Eu)</li>
        </ul>
    </div>

</header>

<main id="catalog">

    <section id="catalog__items">
        <?php
        if ($page->hasChildren()) :
            $items = $page->children();



            foreach ($items as $item) :
                $images = $item->gallery()->toFiles();
        ?>
                <div class="catalog__item">
                    <ul class="acc-button inline-layout">
                        <li><?= $item->year() ?></li>
                        <li>
                            <ul>
                                <li><?= $item->title() ?></li>
                                <li><?= $item->type() ?></li>
                                <li><?= $item->environment() ?></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Height: <?= $item->itemHeight() ?> cm</li>
                                <li>Depth: <?= $item->itemDepth() ?> cm</li>
                                <li>Width: <?= $item->itemWidth() ?> cm</li>
                            </ul>
                        </li>
                        <li><?= $item->description() ?></li>
                        <li><?= $item->price() ?></li>
                    </ul>
                    <div class="catalog__hidden-content">
                        <div class="carousel">

                            <?php foreach ($images as $image) :

                                // TODO: Clean this lazy laoding mess

                            ?>
                                <div class="carousel-cell">
                                    <picture>
                                        <source data-srcset="<?= $image->srcset('avif') ?>" type="image/avif">
                                        <source data-srcset="<?= $image->srcset('webp') ?>" type="image/webp">
                                        <img data-lazyload alt="<?= $image->alt() ?>" data-sizes="auto" src="<?= $image->placeholderUri() ?>" data-srcset="<?= $image->srcset() ?>" width="<?= $image->resize(1800)->width() ?>" height="<?= $image->resize(1800)->height() ?>" loading="lazy" class="lazyload">
                                    </picture>
                                </div>
                            <?php
                            endforeach
                            ?>
                        </div>
                    </div>
                </div>
            <?php endforeach ?>
        <?php endif ?>
    </section>
</main>

<footer id="footer">
    <a href="<?= $site->find("about")->url() ?>"><?= $site->title() ?></a>
    <div>
        <span id="footer__copyright">
            2023 © All rights reserved.
        </span>
        <a href="<?= $site->find("legal")->url() ?>">Legal notice</a>
    </div>
</footer>

<?php snippet('footer') ?>