<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\InputController;
use App\Http\Controllers\API\OutputController;
use App\Http\Controllers\API\ConnectionController;
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

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::post('login', [UserController::class, 'login']);
Route::apiResource('user', UserController::class);
Route::apiResource('account', UserController::class);

Route::apiResource('input', InputController::class);
Route::apiResource('output', OutputController::class);

Route::get('arrival/{id}', [ConnectionController::class, 'arrival']);
Route::get('exit/{id}', [ConnectionController::class, 'exit']);









