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
                    <div class="row gy-4">
                        <div class="col-md-3 col-sm-6">
                            <div class="card mb-0">
                                <div class="card-body">
                                    <div class="d-flex align-items-end justify-content-between mb-2">
                                        <div class="me-2">
                                             <svg class="svg-icon svg-icon-sm svg-icon-heavy text-gray-600 mb-2">
                        <use xlink:href="#user-1"> </use>
                      </svg>
                                            <p class="text-sm text-uppercase text-gray-600 lh-1 mb-0">Energy Usage</p>
                                        </div>
                                        <p class="text-xxl lh-1 mb-0 text-dash-color-1">1.2</p>
                                    </div>
                                    <div class="progress" style="height: 3px">
                                        <div class="progress-bar bg-dash-color-1" role="progressbar" style="width: 30%"
                                            aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
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
                                        <div class="progress-bar bg-dash-color-3" role="progressbar" style="width: 70%"
                                            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
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
                                            
                                        
                                        <p class="text-xxl lh-1 mb-0 text-dash-color-2">{{ $item->humidity }}</p>
                                        @endforeach
                                    </div>
                                    <div class="progress" style="height: 3px">
                                        <div class="progress-bar bg-dash-color-2" role="progressbar" style="width: 55%"
                                            aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
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
                    </div>
                </div>
            </section>
            <section class="pt-0">
                <div class="container-fluid">
                    <div class="row d-flex align-items-stretch gy-4">
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
