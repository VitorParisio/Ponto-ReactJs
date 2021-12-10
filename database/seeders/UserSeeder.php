<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Talita',
            'lastname' => 'Correia',
            'email'=> 'talita@smat.com',
            'password' => bcrypt('123'),
            'login' => '13:00',
            'logout' => '15:00',
            'returned' =>'14:30',
            'away' => '13:30',
            'type_access' => '1',
            'office' => 'Gerente',
            'inlog' => 'talitinha'
        ]);
    }
}
