<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Typology;
use App\Restaurant;
use App\User;

class TypologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //$typologies = ['pizzeria','italiana','cinese','giapponese', 'thailandese', 'messicano', 'fast food'];
        $typologies = ['gelateria','greco','vegetariano','libanese','americano'];
        foreach($typologies as $model){
            $typology = new typology();
            $typology->name = $model;
            $typology->slug = Str::slug($typology->name);
            $typology->save();
        }
    }
}
