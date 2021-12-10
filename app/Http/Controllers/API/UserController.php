<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $user = User::orderBy('name')->get();

        return response()->json($user, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $resquest
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $dataValidate = Validator::make($request->all(),[
          'name'=> 'required|max:191|min:3',
            'lastname'=> 'required|max:191|min:3',
            'office'=> 'required|max:191|min:3',
            'email' => 'required|unique:users|email',
            'inlog' => 'required',
            'away' => 'required|date',
            'returned' => 'required|date',
            'login' => 'required|date',
            'logout' => 'required|date',
            'type_access' => 'required',
            'password' => 'required'
        ], ['lastname.required' => 'O campo sobrenome é obrigatório.',
            'email.unique' => 'E-mail já cadastrado.',
            'office.required' => 'O campo cargo é obrigatório.',
            'away.required' => 'O campo intervalo é obrigatório.',
            'returned.required' => 'O campo intervalo é obrigatório.',
            'login.required' => 'O campo horarário é obrigatório.',
            'logout.required' => 'O campo horarário é obrigatório.',
            'inlog.required' => 'O campo login é obrigatório.',
            'password.required' => 'O campo senha é obrigatório.'
        ]);

        if ($dataValidate->fails()){
            return response()->json(['errors' => $dataValidate->errors()], 202);
        } else {

            $allData = $request->all();
            $allData['password'] = bcrypt($allData['password']);

            User::create($allData);

            return response()->json(['success' => 'Colaborador cadastrado com sucesso!'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        $user = User::find($id);

        return response()->json($user, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {   
        $user = User::find($id);
        $user->delete();
    }

    public function login(Request $request){
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){

            $user = Auth::user();

            $resArr = [];
            $resArr['token'] = $user->createToken('AuthToken')->accessToken;
            $resArr['name'] = $user->name;
            $resArr['email'] = $user->email;
            $resArr['id'] = $user->id;
            $resArr['login'] = $user->login;
            $resArr['logout'] = $user->logout;

            return response()->json($resArr, 200);
        }else{
            return response()->json(['error' => "Acesso negado!"], 203);
        }
    }
}
