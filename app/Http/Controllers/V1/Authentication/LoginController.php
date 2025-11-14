<?php

declare(strict_types=1);

namespace App\Http\Controllers\V1\Authentication;

use App\Http\Requests\V1\Authentication\LoginRequest;
use Illuminate\Support\Arr;
use Inertia\Inertia;

class LoginController
{
    public function     index()
    {
        return Inertia::render('Auth/Login');
    }

    public function store(LoginRequest $request)
    {
        $data = $request->validated();

        $credentials = Arr::only($data, ['email', 'password']);
        $remember    = Arr::get($data, 'remember');

        if (auth()->attempt($credentials, $remember)) {
            $user = auth()->user();
            $user->last_ip = request()->ip();
            $user->save();

            request()->session()->regenerate();

            return redirect()->intended('dashboard');
        }

        return redirect()
            ->route('v1.authentication.login.index')
            ->withErrors(['Invalid email or password'], 'login_failed')
            ->onlyInput('email');
    }
}
