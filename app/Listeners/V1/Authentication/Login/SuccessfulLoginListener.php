<?php

namespace App\Listeners\V1\Authentication\Login;

use Illuminate\Auth\Events\Login;

class SuccessfulLoginListener
{
    public function handle(Login $event): void
    {
        $user = $event->user;
        $user->update(['last_ip' => request()->ip()]);
    }
}
