<?php
use App\Restaurant;
use App\Order;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

use App\Dish;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
| php artisan inspire
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {

    $restaurant = Restaurant::query()->where('slug', "mc-donald")->first();

    $order = Order::create([
        'total_price' => 10.00,
        'address_client' => "222",
        'email_client' => "222@gmail.com",
        'date_order' => date('Y-m-d H:i:s'),
        'restaurant_id'=> $restaurant->id
    ]);
    // 8= dish_id
    $order->dishes()->attach([8,8,8,9,9]);
    /**
     * CART è UN ARRAY
     * $cart = [
     * 'id' => 1,
     * 'name' => 'Pasta',
     * 'price' => 10,
     * 'quantity' => 2,
     * 'restaurant_id' => 1,
     *
     * ]
     */
    dd($order);
});
