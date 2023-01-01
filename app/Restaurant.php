<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Order;

class Restaurant extends Model
{
    public function user(){
        return $this->belongsTo('App\User');
    }

    protected $fillable = [
        'name', 'slug', 'img', 'address', 'piva', 'lunch_time_slot_open', 'lunch_time_slot_close', 'dinner_time_slot_open', 'dinner_time_slot_close', 'user_id'
    ];

    public function dishes(){
        return $this->hasMany('App\Dish');
    }

    public function typologies()  {
        return $this->belongsToMany('App\Typology');
    }
    public function orders(){
        return $this->hasMany('App\Order');
    }
}
