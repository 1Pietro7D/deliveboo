<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\Auth;
use App\Dish;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Restaurant;
use Illuminate\Support\Facades\Storage;

class DishController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $restaurant = Restaurant::where('user_id', $user->id)->first();
        $dishes = Dish::where('restaurant_id', $restaurant->id)->get();
        return view('admin.dishes.index', compact('dishes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.dishes.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $form_data = $request->all();

        $dish = new Dish();

        if(array_key_exists('image', $form_data)){
            //img_restaurant è la cartella dove carichiamo l'immagine, nel form_data mettiamo il nome dell'attributo name messo sul'input
            $img = Storage::put('img_dish', $form_data['image']);
            //salviamo l'elemento importato dal form_data convertito in stringa come valore della proprietà img
            $form_data['img'] = $img;

            }
        $dish->fill($form_data);

        $slug = $this->getSlug($dish->name);
        $dish->slug = $slug;
        $user = Auth::user();
        $restaurant = Restaurant::where('user_id', $user->id)->first();
        $dish->restaurant_id = $restaurant->id;



         $dish->save();

        return redirect()->route('admin.dishes.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Dish  $dish
     * @return \Illuminate\Http\Response
     */
    public function show(Dish $dish)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Dish  $dish
     * @return \Illuminate\Http\Response
     */
    public function edit(Dish $dish)
    {
        //
        return view('admin.dishes.edit', compact('dish'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Dish  $dish
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Dish $dish)
    {
        //
        $form_data = $request->all();
        if ($dish->name != $form_data['name']) {
            $slug = $this->getSlug($form_data['name']);
            $form_data['slug'] = $slug;
        }


         if(array_key_exists('image', $form_data)){
            if ($dish->img) {
                Storage::delete($dish->img);
            }
        //img_restaurant è la cartella dove carichiamo l'immagine, nel form_data mettiamo il nome dell'attributo name messo sul'input
	    $img = Storage::put('img_dish', $form_data['image']);
        //dd($img)
        //salviamo l'elemento importato dal form_data convertito in stringa come valore della proprietà img
	    $form_data['img'] = $img;

        }

        $dish->update($form_data);
        return redirect()->route('admin.dishes.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Dish  $dish
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dish $dish)
    {

        if ($dish->img) {  //prima controllo se ha img
            Storage::delete($dish->img);
        }
        $dish->orders()->sync([]); //relazione tra piatti e ordini vuota, nessuna relazione
        $dish->delete();

        return redirect()->route('admin.restaurants.index');
    }


    private function getSlug($name)
    {
        $slug = Str::slug($name);
        $slug_base = $slug;
        // già pensato per più ristoranti
        $existingdish = Dish::where('slug', $slug)->first();
        $counter = 1;
        while ($existingdish) {
            $slug = $slug_base . '_' . $counter;
            $counter++;
            $existingdish = Dish::where('slug', $slug)->first();
        }
        return $slug;
    }
}
