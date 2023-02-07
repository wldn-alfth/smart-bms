<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Models\DoorlockAccess;
use App\Models\DoorlockHistory;
use App\Models\DoorlockState;
use Carbon\Carbon;

class DoorlockStateController extends Controller
{
    public function index(){
        return view('security.doorlock');
    }
    public function doorlock_open(){
        $posts = DoorlockState::where('id_ruang',1)->Paginate(1);
        return view ('security.doorlockopen',compact('posts'));
    }

    public function proses_token_doorlock_iot(Request $request){
    
    $tokenData = DoorlockAccess::pluck('token')->toArray();
    $inputToken = $request->input('username');
    $periksa = DoorlockAccess::where('token',$inputToken)->where('is_aktif','1')->first();

    if (in_array($inputToken, $tokenData)) {
        if ($periksa){
        
        DoorlockState::where('id_ruang',1)->update(['status' => 1]);
        sleep(10);
        DoorlockState::where('id_ruang',1)->update(['status' => 0]);

        $ruang = DoorlockState::where('id_ruang',1)->first();
        $history = DoorlockAccess::where('token',$inputToken)->first();
        $data = new DoorlockHistory;
        $data->id_ruang = $ruang->id_ruang ;
        $data->ruang = $ruang->ruang;
        $data->nama = $history->nama;
        $data->status = $history->token;
               
        $data->save();

        return redirect()->back()->withErrors(['login_gagal' => 'Pintu Telah Terkunci Kembali']);
        }
    }

    return redirect()->back()->withErrors(['login_gagal' => 'Token Tidak Terdaftar']);
    }

    public function data_history(){

    }

    public function change_state_doorlock($id){
        $getStatus = DoorlockState::select('status')->where('id',$id)->first();
        if($getStatus->status==1){
            $status = 0;
        }else{
            $status = 1;
        }
        DoorlockState::where('id',$id)->update(['status'=>$status]);
        
        return back();
        }



}
