<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Braintree_Transaction;
use Illuminate\Support\Facades\DB;
use App\Restaurant;

class BraintreeController extends Controller
{
    public function createTransaction(Request $request) {
        // Create new Gateway
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
            // Transaction successful
            // INSERIRE IN TABELLA L'ORDINE RICEVUTO
            $restaurant = Restaurant::query()->where('slug', $request->slug)->first();



            $order = $restaurant->orders()->create([
                'total_price' => $request->amount,
                'address_client' => $request->address,
                'email_client' => $request->email,
                'date_order' => date('Y-m-d H:i:s')
            ]);

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

            $cart = $request->cart;

            foreach($cart as $dish) {
                $order->dishes()->attach($dish->id);
            }

            return 'Transaction Successful' . $result->transaction->id;


        }
        else {
            return 'Transaction Failed';

        }
    }
}

