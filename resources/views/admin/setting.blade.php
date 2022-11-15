@extends('layout.topbar')
@section('content')
@if (Auth::user()->level == 'Admin' || Auth::user()->level == 'Developer')
<div class="page-content">
    <!-- Page Header-->
    <div class="bg-dash-dark-1 py-4">
      <div class="container-fluid">
        <h2 class="h5 mb-0">Setting</h2>
      </div>
    </div>
  <div class="container-fluid">
    <section class="pt-3 mt-3">
        <div class="container-fluid">
            <div class="row d-flex align-items-stretch gy-4">
                <div class="col-lg">
                    <!-- Sales bar chart-->
                    <div class="card">
                        <div class="card-body">
                            <div class="row d-flex justify-content-center pt-3">
                                <h3 class="h4 mb-3 ">Electricity Price per Unit</h3>
                                @foreach ($harga as $item)
                                <div class="row align-items-end">
                                    <div class="col-lg-12">
                                        <p class="text-xl fw-light mb-0 text-dash-color-3">Rp. 
                                            @php echo number_format($item->pokok );@endphp </p><span>
                                            <a href="setting-ubah-harga-energy-admin/{{$item->id}}">
                                                <button class="btn btn-primary" >
                                                    Edit
                                                </button>
                                            </a>
                                    </div>
                                </div>
                                 @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-0 mt-0">
        <div class="container-fluid">
            <div class="row d-flex align-items-stretch gy-4">
                <div class="col-lg">
                    <!-- Sales bar chart-->
                    <div class="card">
                        <div class="card-body">
                            <div class="row d-flex justify-content-center pt-3">
                                <h3 class="h4 mb-3 ">Update Blueprint of Pinpoint</h3>
                               
                                <div class="row align-items-end">
                                    <div class="col-lg-12">
                                        <form action="{{ route('pinpointmapupdate') }}" method="POST" enctype="multipart/form-data">
                                            {{ csrf_field() }}
                                                <div class="mb-3">
                                                    <label for="formFile" class="form-label">Choose Blueprint</label>
                                                    <input class="form-control" type="file" id="map" name="map">
                                                </div>
                                            <input type="submit" value="Upload" class="btn btn-primary">
                                        </form>
                                        
                                    </div>
                                </div>
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-0 mt-0">
        <div class="container-fluid">
            <div class="row d-flex align-items-stretch gy-4">
                <div class="col-lg">
                    <!-- Sales bar chart-->
                    <div class="card">
                        <div class="card-body">
                            <div class="row d-flex justify-content-center pt-3">
                                <h3 class="h4 mb-3 ">Total Data Energy</h3>
                                @foreach ($energy as $energys)
                                <div class="row align-items-end">
                                    <div class="col-lg-12">
                                        <p class="text-xl fw-light mb-0 text-dash-color-3">@php echo number_format($energys->id );@endphp Data</p><span>
                                        <a class="btn btn-success " href="setting_energyexportxlxs">Download Data (xlxs)</a>
                                        <a class="btn btn-info " href="setting_energyexportcsv">Download Data (csv)</a>
                                        <a class="btn btn-danger " href="truncateDataEnergy" onclick="return confirm('Data yang sudah dihapuskan tidak bisa dikembalikan lagi. Pastikan anda sudah mendownload data. Apakah anda yakin akan menghapus data?');">Hapus Data</a>
                                    </div>
                                </div>
                                 @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-0 mt-0">
        <div class="container-fluid">
            <div class="row d-flex align-items-stretch gy-4">
                <div class="col-lg">
                    <!-- Sales bar chart-->
                    <div class="card">
                        <div class="card-body">
                            <div class="row d-flex justify-content-center pt-3">
                                <h3 class="h4 mb-3 ">Total Data Temperature and Humidity</h3>
                                @foreach ($dht as $energys)
                                <div class="row align-items-end">
                                    <div class="col-lg-12">
                                        <p class="text-xl fw-light mb-0 text-dash-color-3">@php echo number_format($energys->id );@endphp Data</p><span>
                                        <a class="btn btn-success " href="setting_dhtexportxlxs">Download Data (xlxs)</a>
                                        <a class="btn btn-info " href="setting_dhtexportcsv">Download Data (csv)</a>
                                        <a class="btn btn-danger " href="truncateDataDht" onclick="return confirm('Data yang sudah dihapuskan tidak bisa dikembalikan lagi. Pastikan anda sudah mendownload data. Apakah anda yakin akan menghapus data?');">Hapus Data</a>
                                    </div>
                                </div>
                                 @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

@else
<div class="page-content">
    <!-- Page Header-->
    <div class="bg-dash-dark-1 py-4">
      <div class="container-fluid">
        <h2 class="h5 mb-0">Akses Ditolak</h2>
      </div>
    </div>
  <div class="container-fluid">
        <section class="pt-3 mt-3">
                    <div class="container-fluid">
                        <div class="row d-flex align-items-stretch">
                            <div class="col-lg">
                                <!-- Sales bar chart-->
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex align-items-end justify-content-between pt-2 pb-2">
                                            <h3 class="h4 mb-3 text-white">Akses Menuju Laman Ditolak</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
        
    </div>
</div>
@endif
@stop
</html>
