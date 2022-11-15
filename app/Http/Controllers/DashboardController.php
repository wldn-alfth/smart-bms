<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use App\Models\DhtSensor;
use App\Models\FireAlarm;
use App\Models\Energy;
use App\Models\EnergyCost;
use DB;
class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(){
        $humidity = DhtSensor::latest()->paginate(1);
        $temperature = DhtSensor::latest()->paginate(1);
        $fire = FireAlarm::latest()->Paginate(1);
        $energy_today = Energy::where('id_kwh', '1')->select(Energy::raw("SUM(active_power) as energy_today "))->whereDate('created_at', Carbon::today())->pluck('energy_today');
        $energy_month = Energy::where('id_kwh', '1')->select(Energy::raw("SUM(active_power) as energy_month "))->whereMonth('created_at', Carbon::today())->pluck('energy_month');
        $energy_cost = EnergyCost::latest()->pluck('harga'); 
        $energy_cost_delay = EnergyCost::latest()->pluck('delay');
       

        return view('dashboard', compact('humidity','temperature','fire','energy_today','energy_month','energy_cost','energy_cost_delay'));
    }
}