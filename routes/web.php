<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Rute halaman utama
Route::get('/', 'HomeController@index')->name('home');

// Grup rute untuk kategori
Route::prefix('category')->name('category.')->group(function ()
{
    // Rute untuk halaman daftar kategori
    Route::get('/', 'CategoryController@index')->name('index');

    // Rute untuk halaman daftar buku dalam suatu kategori
    Route::get('/{slug}', 'CategoryController@list')->name('list');
});

// Rute untuk halaman detail buku
Route::get('/book/{slug}', 'BookController@index')->name('book');

// Rute-rute lainnya (misalnya, autentikasi pengguna, admin, dll.)
require 'user.php';
require 'admin.php';
