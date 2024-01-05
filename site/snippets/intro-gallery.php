<div id="intro-gallery">
    <ul>
        <?php
        if ($page->hasFile()) :
            $slides = $site->find("home")->files()->sortBy('sort', 'asc');;
            foreach ($slides as $slide) :
        ?>

                <li>
                <picture>
                    <source
                        data-srcset="<?= $slide->srcset('avif') ?>"
                        type="image/avif"
                    >
                    <source
                        data-srcset="<?= $slide->srcset('webp') ?>"
                        type="image/webp"
                    >
                    <img
                        data-lazyload
                        alt="<?= $slide->alt() ?>"
                        src="<?= $slide->placeholderUri() ?>"
                        data-srcset="<?= $slide->srcset() ?>"
                        width="<?= $slide->resize(1800)->width() ?>"
                        height="<?= $slide->resize(1800)->height() ?>"
                    >
                </picture>
                </li>

            <?php endforeach ?>
        <?php endif ?>
    </ul>
    <div>IUHiuhiuderh</div>
</div>