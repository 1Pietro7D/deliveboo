<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Restaurant;
use App\User;
use Illuminate\Support\Str;

class RestaurantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {

        for ($i = 0; $i < 10; $i++) {

            $restaurant = new Restaurant();

            $restaurant->name = $faker->unique()->company();

            $slug = Str::slug($restaurant->name);
            $slug_base = $slug;
            $existingslug = Restaurant::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Restaurant ::where('slug', $slug)->first();
                $counter++;
            }
            $restaurant->slug = $slug;

            $restaurant->address = $faker->address();
            $restaurant->piva = $faker->numerify('###########');
            $restaurant->lunch_time_slot_open = $faker->time();
            $restaurant->lunch_time_slot_close = $faker->time();
            $restaurant->dinner_time_slot_open = $faker->time();
            $restaurant->dinner_time_slot_close = $faker->time();


            $restaurant->save();
        }
    }
}
