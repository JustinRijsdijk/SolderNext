<?php

namespace App\Listeners\V1\Authentication\Login;

use App\Libraries\UpdateUtils;
use App\Models\User;
use Illuminate\Auth\Events\Login;

class CheckForSoftwareUpdateListener
{
    public function handle(Login $event): void
    {
        /** @var User $user */
        $user = $event->user;

        if ($user->permission->solder_full && UpdateUtils::getUpdateCheck()) {
            cache()->put('update', true, now()->addMinutes(60));
        }
    }
}
