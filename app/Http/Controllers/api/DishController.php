<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Error;
use App\Dish;
use App\Typology;
use App\Restaurant;
use App\User;


class DishController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        try {

            $user = Restaurant::query()->where('slug', $slug)->first()->id;

            $dishes = Dish::query()->where('restaurant_id', $user)->get();

            $data = [
                'results' => $dishes,
                'success' => true
            ];
        }catch(Error $e){
            $data = [
                'results' => $e->message,
                'success' => false
            ];
        }

        return response()->json($data);
    }
}
