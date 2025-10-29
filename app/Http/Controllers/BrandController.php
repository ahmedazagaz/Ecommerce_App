<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index()
    {
        return Inertia::render('Brands/Index');
    }
}