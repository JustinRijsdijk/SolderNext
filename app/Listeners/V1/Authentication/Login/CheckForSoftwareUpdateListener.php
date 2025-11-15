<?php

namespace App\Listeners\V1\Authentication\Login;

use App\Libraries\UpdateUtils;
use Illuminate\Auth\Events\Login;

class CheckForSoftwareUpdateListener
{
    public function handle(Login $event): void
    {
        $user = $event->user;

        if ($user->permission->solder_full && UpdateUtils::getUpdateCheck()) {
            cache()->put('update', true, now()->addMinutes(60));
        }
    }
}
