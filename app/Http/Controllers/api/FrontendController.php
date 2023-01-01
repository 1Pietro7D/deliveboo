<?php


namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Error;
use App\Restaurant;
use App\Typology;
use App\Order;

class FrontendController extends Controller{


    public function index () {
        # code for all restaurants
        try {
            $r = Restaurant::query()->get();
            for ($i=0; $i < count($r); $i++) {
                # code...
                $r[$i]->with(['dishes', 'typologies']);
            }
            $t = Typology::with(['restaurants'])->get();
            $data = [
                'results' => $r,
                'typologies' => $t,
                'success' => count($r) > 0
            ];
        }catch(Error $e){
            $data = [
                'results' => $e->message,
                'success' => false
            ];
        }
        // http://127.0.0.1:8000/api/restaurant
        // dd($data);
        return response($data);


    }


    public function show($slug) {
        # code for restaurant with typologies associate
        $restaurants = Restaurant::with(['typologies'])->get();
        $data = [];

        foreach($restaurants as $restaurant){
            foreach($restaurant->typologies as $typology){
                if ($typology->slug == $slug){
                    array_push($data, $restaurant);
                }
            }
        }
        // http://127.0.0.1:8000/api/restaurant/paperino //paperino sta per lo slug del ristorante
        // dd($restaurants);
        return response($data);
    }


    public function store(Request $request)
    {
        # code for order create
    }
}







?>
