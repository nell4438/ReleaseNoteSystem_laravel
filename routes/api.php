<?php

use App\Http\Controllers\KindController;
use App\Http\Controllers\M_transactionController;
use App\Http\Controllers\ProgrammerController;
use App\Http\Controllers\RequestorController;
use App\Http\Controllers\SystemNameController;
use App\Http\Controllers\TypeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('programmer', ProgrammerController::class);
Route::resource('systemName', SystemNameController::class);
Route::resource('requestor', RequestorController::class);
Route::resource('type', TypeController::class);
Route::resource('kind', KindController::class);
Route::resource('transaction', M_transactionController::class);
