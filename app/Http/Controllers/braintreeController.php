<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;

use App\Order;

use Illuminate\Http\Request;
use Braintree_Transaction;
use Illuminate\Support\Facades\DB;
use App\Restaurant;

class BraintreeController extends Controller
{
    public function createTransaction(Request $request) {
        // Create new Gateway
        //  dd("dddddds");
        // $gateway = new \Braintree\Gateway([
        //     'environment' => "sandbox",
        //     'merchantId' => "nr7dbky87tmcnygt",
        //     'publicKey' => "bwwzqch264jn9y2s",
        //     'privateKey' => "e8e4b347eadbd6dd25628f6da1413cec"
        // ]);

        // // Find current user who is making the transaction
        // // Create the transaction
        // // $result = $gateway->transaction()->sale([
        // //     'amount' => $request->amount,
        // //     'paymentMethodNonce' => $request->payload['nonce'],
        // //     'options' => [
        // //         'submitForSettlement' => true
        // //     ]
        // // ]);
        // dd($result);

        // if ($result->success) {
        //     dd($result);

        //     return 'Transaction Successful' . $result->transaction->id;


        // }
        // else {

        //     return 'Transaction Failed';

        // }
    }
}

