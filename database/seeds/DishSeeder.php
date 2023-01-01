<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use App\Restaurant;
use App\User;
use App\Dish;

class DishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {


//DISH1
            $dish1 = new Dish();

            $dish1->name='Carbonara';

            $slug = Str::slug($dish1->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish1->slug = $slug;

            $dish1->description='Piatto buono e tipico italiano';
            $dish1->price=8.50;
            $dish1->ingredients='Uova , guanciale , pecorino';
            $dish1->visible=$faker->boolean();

            $dish1->restaurant_id=1;
            $dish1->save();

//DISH1
            $dish1 = new Dish();

            $dish1->name='Spaghetti alla carbonara';

            $slug = Str::slug($dish1->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish1->slug = $slug;

            $dish1->description='Piatto rinomato e tipico italiano';
            $dish1->price=8.50;
            $dish1->ingredients='Uova , guanciale , pecorino';
            $dish1->visible=$faker->boolean();

            $dish1->restaurant_id=1;
            $dish1->save();

//DISH2
            $dish2 = new Dish();

            $dish2->name='Trofie al pesto';

            $slug = Str::slug($dish2->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish2->slug = $slug;

            $dish2->description='Piatto tipico genovese';
            $dish2->price=8;
            $dish2->ingredients='Pesto , noci , scorze di limone';
            $dish2->visible=$faker->boolean();

            $dish2->restaurant_id=1;
            $dish2->save();

//DISH3
            $dish3 = new Dish();

            $dish3->name='Rigatoni al sugo di ragù';

            $slug = Str::slug($dish3->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish3->slug = $slug;

            $dish3->description='Il nostro piatto forte';
            $dish3->price=7;
            $dish3->ingredients='Sugo di ragù , basilico , parmigiano';
            $dish3->visible=$faker->boolean();

            $dish3->restaurant_id=1;
            $dish3->save();

//DISH4
            $dish4 = new Dish();

            $dish4->name='Tonnarelli cacio e pepe';

            $slug = Str::slug($dish4->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish4->slug = $slug;

            $dish4->description='L esempio vivente di pasta lunga ';
            $dish4->price=8.50;
            $dish4->ingredients='Cacio , pepe , pecorino';
            $dish4->visible=$faker->boolean();

            $dish4->restaurant_id=1;
            $dish4->save();

//DISH5
            $dish5 = new Dish();

            $dish5->name='Fusilli al sugo di basilico';

            $slug = Str::slug($dish5->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish5->slug = $slug;

            $dish5->description='Piatto buono e tipico italiano';
            $dish5->price=8;
            $dish5->ingredients='Sugo , basilico ';
            $dish5->visible=$faker->boolean();

            $dish5->restaurant_id=1;
            $dish5->save();

//DISH6
            $dish6 = new Dish();

            $dish6->name='Tagliata di manzo';

            $slug = Str::slug($dish6->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish6->slug = $slug;

            $dish6->description='Solo carni certificate';
            $dish6->price=20;
            $dish6->ingredients='Carne , sale grosso ';
            $dish6->visible=$faker->boolean();

            $dish6->restaurant_id=1;
            $dish6->save();

//DISH7
            $dish7 = new Dish();

            $dish7->name='Tagliata al lardo di colonnata';

            $slug = Str::slug($dish7->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish7->slug = $slug;

            $dish7->description='Piatto buono e tipico italiano';
            $dish7->price=20;
            $dish7->ingredients='Carne , lardo di colonnato , sale grosso';
            $dish7->visible=$faker->boolean();

            $dish7->restaurant_id=1;
            $dish7->save();

//DISH8
            $dish8 = new Dish();

            $dish8->name='Tranci di pesce spada';

            $slug = Str::slug($dish8->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish8->slug = $slug;

            $dish8->description='Pescato direttamente dai mari migliori';
            $dish8->price=23;
            $dish8->ingredients='Pesce spada , prezzemolo , limone';
            $dish8->visible=$faker->boolean();

            $dish8->restaurant_id=1;
            $dish8->save();

//DISH9
            $dish9 = new Dish();

            $dish9->name='Verdure grigliate miste';

            $slug = Str::slug($dish9->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish9->slug = $slug;

            $dish9->description='Piatto buono e tipico italiano';
            $dish9->price=4;
            $dish9->ingredients='Melanzane , zucchine , peperoni';
            $dish9->visible=$faker->boolean();

            $dish9->restaurant_id=1;
            $dish9->save();

//DISH10
            $dish10 = new Dish();

            $dish10->name='Bucce di patate fritte';

            $slug = Str::slug($dish10->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish10->slug = $slug;

            $dish10->description='Croccanti al punto giusto';
            $dish10->price=4;
            $dish10->ingredients='Patate , olio , sale';
            $dish10->visible=$faker->boolean();

            $dish10->restaurant_id=1;
            $dish10->save();

    }
}
