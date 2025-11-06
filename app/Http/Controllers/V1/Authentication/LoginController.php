<?php

declare(strict_types=1);

namespace App\Http\Controllers\V1\Authentication;

use App\Http\Requests\V1\Authentication\LoginRequest;
use Inertia\Inertia;

class LoginController
{
    public function index()
    {
        return Inertia::render('Auth/Login');
    }

    public function store(LoginRequest $request)
    {
        $data = $request->validated();

        dd($data);
    }
}
