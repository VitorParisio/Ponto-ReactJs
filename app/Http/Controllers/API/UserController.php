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

        $user = User::orderBy('name')->paginate(6);

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
            'name'=> 'required|max:191',
            'lastname'=> 'required|max:191',
            'office'=> 'required|max:191',
            'email' => 'required|unique:users|email',
            'inlog' => 'required',
            'away' => 'required',
            'returned' => 'required',
            'login' => 'required',
            'logout' => 'required',
            'type_access' => 'required',
            'password' => 'required'
        ], ['lastname.required' => 'Campo não preenchido.',
            'lastname.max' => 'Excedeu o máximo de letras.',
            'name.max' => 'Excedeu o máximo de letras.',
            'office.max' => 'Excedeu o máximo de letras.',
            'email.unique' => 'E-mail já cadastrado.',
            'office.required' => 'Campo não preenchido.',
            'away.required' => 'Campo não preenchido.',
            'returned.required' => 'Campo não preenchido.',
            'login.required' => 'Campo não preenchido.',
            'logout.required' => 'Campo não preenchido.',
            'inlog.required' => 'Campo não preenchido.',
            'password.required' => 'Campo não preenchido.',
            'name.required' => 'Campo não preenchido.',
            'email.required' => 'Campo não preenchido.',
        ]);

        if ($dataValidate->fails()){
            return response()->json(['errors' => $dataValidate->errors()], 202);
        } else {

            $allData = $request->all();
            $allData['password'] = bcrypt($allData['password']);
            $allData['name'] = ucfirst($allData['name']);
            $allData['lastname'] = ucfirst($allData['lastname']);
            $allData['office'] = ucfirst($allData['office']);
            $allData['email'] = strtolower($allData['email']);


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
        $account_data = User::select('users.id','users.name')
            ->where('users.id', $user->id)
            ->get();
        return response()->json($account_data, 200);
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
            $resArr['lastname'] = $user->lastname;
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
