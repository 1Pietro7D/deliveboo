<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Order;
use App\Restaurant;
use App\Dish;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

        // $user = Auth::user();
        // $restaurant = Restaurant::where('user_id', $user->id)->first();
        // $dishes = Dish::where('restaurant_id', $restaurant->id)->get();
        // //temporany
        // $query  = DB::table('users')
        // ->join('restaurants', 'users.id', '=', 'restaurants.user_id')
        // ->join('dishes', 'restaurants.id', '=', 'dishes.restaurant_id')
        // ->join('dish_order', 'dishes.id', '=', 'dish_order.dish_id')
        // ->join('orders', 'orders.id', '=', 'dish_order.order_id')
        // ->select('orders.*')
        // ->where('user_id', $user->id)
        // ->groupBy('orders.id')
        // ->get();
        // return view('admin.orders.index', compact('query'));
        $user = Auth::user();
        $restaurant = Restaurant::where('user_id', $user->id)->with('dishes')->first();
        $orders = Order::where('restaurant_id', $restaurant->id)->with('dishes')->orderByDesc('id')->get();

        $groupedOrders = $orders->map(function($order) {
            $dishes = $order->dishes->groupBy('id')->map(function($dishGroup) {
                return [
                    'id' => $dishGroup->first()->id,
                    'name' => $dishGroup->first()->name,
                    'quantity' => $dishGroup->count()
                ];
            });

            return [
                'id' => $order->id,
                'address_client' => $order->address_client,
                'total_price' => $order->total_price,
                'created_at' => $order->created_at,
                'email_client' => $order->email_client,
                'dishes' => $dishes
            ];
        });



        return view('admin.orders.index', compact('groupedOrders'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
