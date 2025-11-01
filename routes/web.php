<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('public/about');
})->name('about');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('brands', [\App\Http\Controllers\BrandController::class, 'index'])->name('brands.index');
    Route::get('brands/create', [\App\Http\Controllers\BrandController::class, 'create'])->name('brands.create');

    Route::get('users', [\App\Http\Controllers\UserController::class, 'index'])->name('users.index');
    Route::get('users/Create', [\App\Http\Controllers\UserController::class, 'Create'])->name('users.Create');

    Route::get('categories', [\App\Http\Controllers\CategoryController::class, 'index'])->name('categories.index');
    Route::get('categories/Create', [\App\Http\Controllers\CategoryController::class, 'Create'])->name('categories.Create');

    Route::get('products', [\App\Http\Controllers\ProductController::class, 'index'])->name('products.index');

    Route::get('orders', [\App\Http\Controllers\OrderController::class, 'index'])->name('orders.index');
});

require __DIR__.'/settings.php';
