<?php

return function ($page, $kirby, $site) {
  
    // Get the return values from the SEO controller
    $seo = $kirby->controller('seo', compact('page', 'site', 'kirby'));

    $session = $kirby->session();
    $isNewSession = $session->get('isNewSession') === null;
    if ($isNewSession) {
        $session->set('isNewSession', false);
    }

    return array_merge($seo, [
        'isNewSession' => $isNewSession
    ]);
};
