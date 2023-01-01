<?php

namespace App;
use App\Dish;
use App\Restaurant;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    public function dishes()  {
        return $this->belongsToMany('App\Dish');
    }
    public function restaurant()  {
        return $this->belongsTo('App\Restaurant');
    }

    protected $fillable = [ 'total_price','address_client', 'email_client', 'date_order','restaurant_id'];
    //data_order verrà generato in automatico con un time() che restituirà l'ora corrente
}
