<?php

use Illuminate\Database\Seeder;
use App\Order;
use Faker\Generator as Faker;
class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i = 0; $i < 20; $i++){
            $order = New Order();
            $order->total_price = $faker->randomFloat(2, 1, 999);
            $order->date_order = $faker->date();
            $order->address_client = $faker->streetAddress();  //email creata con regex
            $order->email_client = preg_replace('/@example\..*/', '@domain.com', $faker->unique()->safeEmail);
            $order->save();
        }
    }

    }

