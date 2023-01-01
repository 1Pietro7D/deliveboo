<?php

use App\Order;
use App\Restaurant;
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


Route::resource('restaurant', 'api\FrontendController'); // abilito il controller api
Route::get('menu/{slug}', 'api\DishController@show');
Route::post('process-payment', function (Request $request) {

    $gateway = new \Braintree\Gateway([
        'environment' => "sandbox",
        'merchantId' => "nr7dbky87tmcnygt",
        'publicKey' => "bwwzqch264jn9y2s",
        'privateKey' => "e8e4b347eadbd6dd25628f6da1413cec"
    ]);

    // Find current user who is making the transaction
    // Create the transaction
    $result = $gateway->transaction()->sale([

        'amount' => $request->amount,
        'paymentMethodNonce' => $request->payload['nonce'],
        'options' => [
            'submitForSettlement' => true
        ]
    ]);

    if ($result->success) {


        // $restaurant = Restaurant::query()->where('slug', $request->restaurant)->first();
        $restaurant = Restaurant::find($request->cart[0]['restaurant_id']);

        $order = Order::create([
            'total_price' => $request->amount,
            'address_client' => $request->address,
            'email_client' => $request->email,
            'date_order' => date('Y-m-d H:i:s'),
            'restaurant_id'=> $restaurant->id
        ]);

        foreach($request->cart as $dish) {
            if($dish['count'] > 1 ) {
                for($i = 0; $i<$dish['count']; $i++) {
                    $order->dishes()->attach($dish['id']);
                }
            }
            else {
                $order->dishes()->attach($dish['id']);
            }
        }

        return 'Transaction Successful' . $result->transaction->id;


    }
    else {


        return 'Transaction Failed';

    }
});

//Route::get('/restaurants/{id}','api\FrontendController@show');
Route::get('test', function(){return response('ciao');});
