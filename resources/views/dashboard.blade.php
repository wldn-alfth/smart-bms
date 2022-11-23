@extends('layout.topbar')
@section('content')
<div class="page-content">
    <!-- Page Header-->
    <div class="bg-dash-dark-1 py-4">
      <div class="container-fluid">
        <h2 class="h5 mb-0">Dashboard</h2>
      </div>
    </div>
  <div class="container-fluid">
    
            <section class="mt-3">
                <div class="container-fluid">
                    <div class="row d-flex align-items-stretch gy-4">
                        @foreach($energy_current_status as $energy_current_statuss)
                        @if($energy_current_statuss->status==1)
                        <div class="col-lg-6">
                            <div class="card mb-0">
                                <div class="card-body">
                                    <div class="d-flex align-items-end justify-content-between mb-2">
                                        <div class="me-2">
                                             <svg class="svg-icon svg-icon-sm svg-icon-heavy text-gray-600 mb-2">
                        <use xlink:href="#user-1"> </use>
                      </svg>
                                            <p class="text-sm text-uppercase text-gray-600 lh-1 mb-0">Energy Current</p>
                                        </div>
                                        @foreach ($energy_current as $energy_currents)
                                        <p class="text-xxl lh-1 mb-0 text-dash-color-1">{{$energy_currents->active_power}}</p>
                                        @endforeach
                                    </div>
                                    <div class="progress" style="height: 3px">
                                        <div class="progress-bar bg-dash-color-1" role="progressbar" style="width: 100%"
                                            aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach
                        @foreach($electricity_price as $electricity_prices)
                        @if($electricity_prices->status==1)
                        <div class="col-lg-6">
                            <div class="card mb-0">
                                <div class="card-body">
                                    <div class="d-flex align-items-end justify-content-between mb-2">
                                        <div class="me-2">
                                             <svg class="svg-icon svg-icon-sm svg-icon-heavy text-gray-600 mb-2">
                        <use xlink:href="#user-1"> </use>
                      </svg>
                                            <p class="text-sm text-uppercase text-gray-600 lh-1 mb-0">Electricity Price</p>
                                        </div>
                                        @foreach ($energy_cost_pokok as $energy_costs)
                                        <p class="text-xxl lh-1 mb-0 text-success">Rp. @php echo number_format($energy_costs); @endphp</p>
                                        
                                        @endforeach
                                    </div>
                                    <div class="progress" style="height: 3px">
                                        <div class="progress-bar" role="progressbar"
                                            style="width: 100%; background-color: #28a745;" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach

                        @foreach($fire_alarm_status as $fire_alarm_statuss)
                        @if($fire_alarm_statuss->status==1)
                        <div class="col-lg-6">
                            <div class="card mb-0">
                                <div class="card-body">
                                    @foreach ($fire as $item)
                                            
                                        @if($item->status==0)
                                    <div class="d-flex align-items-end justify-content-between mb-2">
                                        <div class="me-2">
                                            <svg class="svg-icon svg-icon-sm svg-icon-heavy text-gray-600 mb-2">
                                                    <use xlink:href="#paper-stack-1"> </use>
                                            </svg>            
                                            <p class="text-sm text-uppercase text-gray-600 lh-1 mb-0">Fire Alarm</p>
                                        </div>
                                        <p class="text-xxl lh-1 mb-0 text-success">OK</p>
                                        
                                    </div>
                                    <div class="progress" style="height: 3px">
                                        <div class="progress-bar" role="progressbar"
                                            style="width: 100%; background-color: #28a745;" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    @else
                                    <div class="d-flex align-items-end justify-content-between mb-2">
                                        <div class="me-2">
                                            <svg class="svg-icon svg-icon-sm svg-icon-heavy text-gray-600 mb-2">
                                                    <use xlink:href="#paper-stack-1"> </use>
                                            </svg>            
                                            <p class="text-sm text-uppercase text-gray-600 lh-1 mb-0">Fire Alarm</p>
                                        </div>
                                        <p class="text-xxl lh-1 mb-0 text-danger">⚠</p>
                                        
                                    </div>
                                    <div class="progress" style="height: 3px">
                                        <div class="progress-bar" role="progressbar"
                                            style="width: 100%; background-color: #a72828;" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    @endif
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach

                        @foreach($temp_status as $temp_statuss)
                        @if($temp_statuss->status==1)
                        <div class="col-lg-6">
                            <div class="card mb-0">
                                <div class="card-body">
                                    <div class="d-flex align-items-end justify-content-between mb-2">
                                        <div class="me-2">
                                             <svg class="svg-icon svg-icon-sm svg-icon-heavy text-gray-600 mb-2">
                        <use xlink:href="#stack-1"> </use>
                      </svg> 
                                            <p class="text-sm text-uppercase text-gray-600 lh-1 mb-0">Current Temperature</p>
                                        </div>
                                        @forelse ($temperature as $item)
                                            
                                       
                                        <p class="text-xxl lh-1 mb-0 text-dash-color-3">{{ $item->temperature }}</p>
                                        @empty 
                                        @endforelse

                                    </div>
                                    <div class="progress" style="height: 3px">
                                        <div class="progress-bar bg-dash-color-3" role="progressbar" style="width: 100%"
                                            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach

                        @foreach($humid_status as $humid_statuss)
                        @if($humid_statuss->status==1)
                        <div class="col-lg-6">
                            <div class="card mb-0">
                                <div class="card-body">
                                    <div class="d-flex align-items-end justify-content-between mb-2">
                                        <div class="me-2">
                                             <svg class="svg-icon svg-icon-sm svg-icon-heavy text-gray-600 mb-2">
                            <use xlink:href="#survey-1"> </use>
                            </svg> 
                                            <p class="text-sm text-uppercase text-gray-600 lh-1 mb-0">Current Humidity</p>
                                        </div>
                                        @foreach ($humidity as $item)
                                            
                                        
                                        <p class="text-xxl lh-1 mb-0 text-info">{{ $item->humidity }}</p>
                                        @endforeach
                                    </div>
                                    <div class="progress" style="height: 3px">
                                        <div class="progress-bar" role="progressbar"
                                            style="width: 100%; background-color: #2892a7;" aria-valuenow="80"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach
                        
                    </div>
                </div>
            </section>
            <section class="pt-0">
                <div class="container-fluid">
                    <div class="row d-flex align-items-stretch gy-4">
                        @foreach($energy_usage_status as $energy_usage_statuss)
                        @if($energy_usage_statuss->status==1)
                        <div class="col-lg-4">
                            <!-- Sales bar chart-->
                            <div class="card">
                                
                                <div class="card-body"> 
                                    <h3 class="h4 mb-3">Energy Usage</h3>
                                    <!-- <p class="text-sm fw-light">Lorem ipsum dolor sit</p> -->
                                    <div class="row align-items-center mb-0">
                                        @forelse ($energy_today as $energy_todays)
                                        @foreach ($energy_cost_delay as $energy_cost_delays) 
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-dash-color-1">
                                                @php
                                                    echo number_format((float)($energy_todays/(3600/$energy_cost_delays)),2,'.','');
                                                @endphp
                                            </p>
                                            <p>Today</p>
                                        </div>
                                        @endforeach
                                        @empty
                                        @endforelse
                                        @forelse ($energy_month as $energy_months) 
                                        @foreach ($energy_cost_delay as $energy_cost_delays) 
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-dash-color-1">
                                                @php
                                                    echo number_format((float)($energy_months/(3600/$energy_cost_delays)),2,'.','');
                                                @endphp
                                            </p>
                                            <p>This Month</p>
                                        </div>
                                        @endforeach
                                        @empty
                                        @endforelse
                                        
                                        
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach

                        @foreach($month_cost_status as $month_cost_statuss)
                        @if($month_cost_statuss->status==1)
                        <div class="col-lg-4">
                            <!-- Sales bar chart-->
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="h4 mb-3">This Month Cost</h3>
                                    <div class="row align-items-end">
                                        @foreach ($energy_cost as $energy_costs)
                                            @foreach($energy_month as $energy_months)
                                        <div class="col-lg-12">
                                            <p class="text-xl fw-light mb-0 text-info">
                                                @php
                                                echo number_format($energy_costs*$energy_months);
                                                @endphp
                                            </p>
                                            <p>IDR</p>
                                        </div>
                                            @endforeach
                                        @endforeach
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach

                        @foreach($previous_cost_status as $previous_cost_statuss)
                        @if($previous_cost_statuss->status==1)
                        <div class="col-lg-4">
                            <!-- Sales bar chart-->
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="h4 mb-3">Previous Month Cost</h3>
                                    <div class="row align-items-end">
                                        @forelse ($energy_submonth as $energy_submonths)
                                        <div class="col-lg-12">
                                            <p class="text-xl fw-light mb-0 text-warning">
                                                @php
                                                echo number_format($energy_costs*$energy_submonths);
                                                @endphp
                                            </p>
                                            <p>IDR</p>
                                        </div>
                                        @empty
                                        @endforelse
                                       
                                      
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        @endif
                        @endforeach

                        @foreach($camera_status as $camera_statuss)
                        @if($camera_statuss->status==1)
                        <div class="col-lg-4">
                            <!-- Sales bar chart-->
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="h4 mb-3" href="{{url('camera')}}">Camera</h3>
                                    <div class="row align-items-center">
                                            <a img href="{{url('camera')}}">
                                            <img src="img/stock/stock_cam.jpeg" alt="cam" width="100%" height="90px">
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach

                    </div>
                </div>
            </section>
            @foreach($device_status as $device_statuss)
            @if($device_statuss->status==1)
            <section class="pt-0 mt-0">
                <div class="container-fluid">
                    <div class="row d-flex align-items-stretch gy-4">
                        
                        
                        <div class="col-lg">
                            <!-- Sales bar chart-->
                            <div class="card">
                                <div class="card-body">
                                    <div class="row d-flex justify-content-center pt-3">
                                        <h3 class="h4 mb-3">Device Status</h3>
                                         <div class="row align-items-end">
                                            @foreach($energy_outlet_master as $energy_outlet_masters)
                                                    <div class="col-lg-6">
                                                        <p class="text-xl fw-light mb-0 text-info">Outlet Master</p><span>
                                                    </div> 
                                                    @if($energy_outlet_masters->status==1)
                                                    <div class="col-lg-6">
                                                        <p class="text-xl fw-light mb-0 text-end text-success">Online</p><span>
                                                    </div>
                                                    @else
                                                    <div class="col-lg-6">
                                                        <p class="text-xl fw-light mb-0 text-end text-dash-color-3">Offline</p><span>
                                                    </div>
                                                    @endif
                                            @endforeach
                                            @foreach($energy_panel as $energy_panels)
                                                    <div class="col-lg-6">
                                                        <p class="text-xl fw-light mb-0 text-info">{{$energy_panels->nama}}</p><span>
                                                    </div> 
                                                    @if($energy_panels->status==1)
                                                    <div class="col-lg-6">
                                                        <p class="text-xl fw-light mb-0 text-end text-success">Online</p><span>
                                                    </div>
                                                    @else
                                                    <div class="col-lg-6">
                                                        <p class="text-xl fw-light mb-0 text-end text-dash-color-3">Offline</p><span>
                                                    </div>
                                                    @endif
                                            @endforeach
                                            {{-- @foreach($energy_outlet as $energy_outlets)
                                                    <div class="col-lg-6">
                                                        <p class="text-xl fw-light mb-0 text-info">{{$energy_outlets->nama}}</p><span>
                                                    </div> 
                                                    @if($energy_outlets->status==1)
                                                    <div class="col-lg-6">
                                                        <p class="text-xl fw-light mb-0 text-end text-success">Online</p><span>
                                                    </div>
                                                    @else
                                                    <div class="col-lg-6">
                                                        <p class="text-xl fw-light mb-0 text-end text-dash-color-3">Offline</p><span>
                                                    </div>
                                                    @endif
                                            @endforeach --}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            @endif
            @endforeach
            <section class="mt-3 pt-0">
                <div class="container-fluid">
                    <div class="row d-flex align-items-stretch gy-4">
                        @foreach($voltage as $voltages)
                        @if($voltages->status==1)
                        <div class="col-lg-4">
                            <!-- Sales bar chart-->
                            <div class="card">
                                
                                <div class="card-body">
                                    <h3 class="h4 mb-3">Voltage</h3>
                                    <!-- <p class="text-sm fw-light">Lorem ipsum dolor sit</p> -->
                                    <div class="row align-items-center mb-0">
                                        @forelse ($energy as $energies)
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-dash-color-1">{{ $energies->tegangan }}</p>
                                            <p>Master</p>
                                        </div>
                                        @empty
                                        @endforelse
                                        @forelse ($energy2 as $energies2) 
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-dash-color-1">{{ $energies2->tegangan }}</p>
                                            @foreach ($energy_panel as $energy_panels) 
                                            <p>{{$energy_panels->nama}}</p>
                                            @endforeach
                                        </div>
                                        @empty
                                        @endforelse
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach

                        @foreach($current as $currents)
                        @if($currents->status==1)
                        <div class="col-lg-4">
                            <!-- Sales bar chart-->
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="h4 mb-3">Current</h3>
                                    <div class="row align-items-end">
                                        @forelse ($energy as $energies)
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-info">{{ $energies->arus }}</p>
                                            <p>Master</p>
                                        </div>
                                        @empty
                                        @endforelse
                                        @forelse ($energy2 as $energies2) 
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-info">{{ $energies2->arus }}</p>
                                            @foreach ($energy_panel as $energy_panels) 
                                            <p>{{$energy_panels->nama}}</p>
                                            @endforeach
                                        </div>
                                        @empty
                                        @endforelse
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach

                        @foreach($frequency as $frequencys)
                        @if($frequencys->status==1)
                        <div class="col-lg-4">
                            <!-- Sales bar chart-->
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="h4 mb-3">Frequency</h3>
                                    <div class="row align-items-end">
                                        @forelse ($energy as $energies)
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-warning">{{ $energies->frekuensi }}</p>
                                            <p>Master</p>
                                        </div>
                                        @empty
                                        @endforelse
                                        @forelse ($energy2 as $energies2) 
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-warning">{{ $energies2->frekuensi }}</p>
                                            @foreach ($energy_panel as $energy_panels) 
                                            <p>{{$energy_panels->nama}}</p>
                                            @endforeach
                                        </div>
                                        @empty
                                        @endforelse
                                      
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        @endif
                        @endforeach

                        @foreach($active_power as $active_powers)
                        @if($active_powers->status==1)
                        <div class="col-lg-4">
                            <!-- Sales bar chart-->
                            <div class="card">
                                
                                <div class="card-body">
                                    <h3 class="h4 mb-3">Active Power</h3>
                                    <!-- <p class="text-sm fw-light">Lorem ipsum dolor sit</p> -->
                                    <div class="row align-items-center mb-0">
                                        @forelse ($energy as $energies)
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-dash-color-2">{{ $energies->active_power }}</p>
                                            <p>Master</p>
                                        </div>
                                        @empty
                                        @endforelse
                                        @forelse ($energy2 as $energies2) 
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-dash-color-2">{{ $energies2->active_power }}</p>
                                            @foreach ($energy_panel as $energy_panels) 
                                            <p>{{$energy_panels->nama}}</p>
                                            @endforeach
                                        </div>
                                        @empty
                                        @endforelse
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach

                        @foreach($reactive_power as $reactive_powers)
                        @if($reactive_powers->status==1)
                        <div class="col-lg-4">
                            <!-- Sales bar chart-->
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="h4 mb-3">Reactive Power</h3>
                                    <div class="row align-items-end">
                                        @forelse ($energy as $energies)
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-info">{{ $energies->reactive_power }}</p>
                                            <p>Master</p>
                                        </div>
                                        @empty
                                        @endforelse
                                        @forelse ($energy2 as $energies2) 
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-info">{{ $energies2->reactive_power }}</p>
                                            @foreach ($energy_panel as $energy_panels) 
                                            <p>{{$energy_panels->nama}}</p>
                                            @endforeach
                                        </div>
                                        @empty
                                        @endforelse
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach

                        @foreach($apparent_power as $apparent_powers)
                        @if($apparent_powers->status==1)
                        <div class="col-lg-4">
                            <!-- Sales bar chart-->
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="h4 mb-3">Apparent Power</h3>
                                    <div class="row align-items-end">
                                        @forelse ($energy as $energies)
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-warning">{{ $energies->apparent_power }}</p>
                                            <p>Master</p>
                                        </div>
                                        @empty
                                        @endforelse
                                        @forelse ($energy2 as $energies2) 
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-warning">{{ $energies2->apparent_power }}</p>
                                            @foreach ($energy_panel as $energy_panels) 
                                            <p>{{$energy_panels->nama}}</p>
                                            @endforeach
                                        </div>
                                        @empty
                                        @endforelse
                                      
                                    </div>
                                </div>
                            </div>
                        </div>  
                        @endif
                        @endforeach
                   
                    </div>
                </div>
                    
                
            </section>
            <section class="pt-3">
            
                <div class="container-fluid">
                    <div class="row d-flex align-items-stretch gy-4">
                        
                        @foreach($dimmer_status as $dimmer_statuss)
                        @if($dimmer_statuss->status==1)   
                        <div class="col-lg">
                            <!-- Sales bar chart-->
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="h4 mb-3 text">Light Dimmer Status</h3>
                                    @foreach ($dimmer as $nilai)
                                    <div class="d-flex align-items-end justify-content-between pt-2 pb-2">
                                        
                                        <div class="me-2">
                                            <h3 class="text-sm d-block text-dash-color-2 text-uppercase">{{$nilai->nama}}</h3>
                                        </div>
                                        
                                        @if($nilai->status==1)
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-end text-success">On</p><span>
                                        </div>
                                        @else
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-end text-dash-color-3">Off</p><span>
                                        </div>
                                        @endif
                                    </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach
                        @foreach($light_status as $light_statuss)
                        @if($light_statuss->status==1)  
                        <div class="col-lg">
                            <!-- Sales bar chart-->
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="h4 mb-3 text">Light Status</h3>
                                    @foreach($controls as $key=>$control)
                                    <div class="d-flex align-items-end justify-content-between pt-2 pb-2">
                                        <div class="me-2">
                                            <h3 class="text-sm d-block text-dash-color-2 text-uppercase">{{$control->nama}}</h3>
                                        </div>
                                        @if($control->status==1)
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-end text-success">On</p><span>
                                        </div>
                                        @else
                                        <div class="col-lg-6">
                                            <p class="text-xl fw-light mb-0 text-end text-dash-color-3">Off</p><span>
                                        </div>
                                        @endif
                                    </div>
                                    @endforeach
                                   
                                </div>
                            </div>
                        </div>
                        @endif
                        @endforeach
                    </div>
                </div>
            </section>

            <!-- Hidden section for chart canvas -->
            <section hidden>
                <div class="container-fluid">
                    <canvas id="salesBarChart2"></canvas>
                    <canvas id="pieChartHome1"></canvas>
                    <canvas id="pieChartHome2"></canvas>
                    <canvas id="pieChartHome3"></canvas>
                    <canvas id="barChartExample1"></canvas>
                    <canvas id="barChartExample2"></canvas>
                    <canvas id="lineChart"></canvas>
                    <canvas id="lineChart1"></canvas>
                </div>
            </section>
        </div>
    </div>
    
    <script>
        // ------------------------------------------------------- //
        //   Inject SVG Sprite - 
        //   see more here 
        //   https://css-tricks.com/ajaxing-svg-sprite/
        // ------------------------------------------------------ //
        function injectSvgSprite(path) {

            var ajax = new XMLHttpRequest();
            ajax.open("GET", path, true);
            ajax.send();
            ajax.onload = function (e) {
                var div = document.createElement("div");
                div.className = 'd-none';
                div.innerHTML = ajax.responseText;
                document.body.insertBefore(div, document.body.childNodes[0]);
            }
        }
        // this is set to BootstrapTemple website as you cannot 
        // inject local SVG sprite (using only 'icons/orion-svg-sprite.svg' path)
        // while using file:// protocol
        // pls don't forget to change to your domain :)
        injectSvgSprite('https://bootstraptemple.com/files/icons/orion-svg-sprite.svg');

    </script>
    <!-- FontAwesome CSS - loading as last, so it doesn't block rendering-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</body>
@stop
</html>
