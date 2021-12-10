<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Input;
use App\Models\Output;

class ConnectionController extends Controller
{	
    public function arrival($id){
        $userId = User::find($id);

        $input = Input::join('users', 'users.id', '=', 'inputs.user_id')
            ->select('users.id','users.name', 'inputs.status', 'inputs.input','inputs.date')
            ->where('users.id', $userId->id)
            ->get();

        foreach($input as $value){
            $value['date'] = date('d/m/Y', strtotime($value['date']));
            
        }

         return response()->json($input,200);
    }

    public function exit($id){
        $userId = User::find($id);

        $output = Output::join('users', 'users.id', '=', 'outputs.user_id')
            ->select('users.id','users.name', 'outputs.status', 'outputs.output','outputs.date')
            ->where('users.id', $userId->id)
            ->get();

        foreach($output as $value){
            $value['date'] = date('d/m/Y', strtotime($value['date']));
            
        }
          return response()->json($output,200);
    }

}
