<!DOCTYPE html>
<html>
@extends('layout.topbar')
@section('content')
@if (Auth::user()->level == 'Admin' || Auth::user()->level == 'Developer')
  
<div class="page-content">
    <!-- Page Header-->
    <div class="bg-dash-dark-1 py-4">
      <div class="container-fluid">
        <h2 class="h5 mb-0">List of Devices</h2>
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
                        <h3>Energy Sensors</h3>
                        @if (Auth::user()->level == 'Developer')
                        <div class="d-flex justify-content-end">
                            <a class="btn btn-success" href="daftar-Panel-create">Tambah</a>
                        </div>
                        @endif
                          <div class="d-flex align-items-end justify-content-between pt-2 pb-2">
                              
                              </div>
                      
                          @if ($message = Session::get('succes'))
                          <div class="alert alert-success">
                              <p>{{ $message }}</p>
                          </div>
                          @endif
                      
                          <table class="table table-bordered">
                            <tr>
                                <th class="text-center" width="80px">No</th>
                                <th class="text-center">Nama</th>
                                <th class="text-center" width="200px">Action</th>
                            </tr>
                            @foreach ($energy_panel_master as $energy_panel_masters)
                            <tr>
                                <td class="text-center">{{ ++$i }}</td>
                                <td>Panel Master</td>
                                <td class="text-center">
                                        <a class="btn btn-info btn-sm" href="showPanelMasterList/{{$energy_panel_masters->id}}">API</a>
                                        @if (Auth::user()->level == 'Developer')
                                        <a class="btn btn-primary btn-sm" href="#">Edit</a>
                                        <a href="#"  class="btn btn-danger btn-sm">Delete</a>
                                        @endif
                                </td>
                            </tr>
                            @endforeach
                            @foreach ($energy_outlet_master as $energy_outlet_masters)
                            <tr>
                                <td class="text-center">{{ ++$i }}</td>
                                <td>Outlet Master</td>
                                <td class="text-center">
                                        <a class="btn btn-info btn-sm" href="showOutletMasterList/{{$energy_outlet_masters->id}}">API</a>
                                        @if (Auth::user()->level == 'Developer')
                                        <a class="btn btn-primary btn-sm" href="#">Edit</a>
                                        <a href="#" class="btn btn-danger btn-sm">Delete</a>
                                        @endif
                                </td>
                            </tr>
                            @endforeach
                            @foreach ($energy_panel as $energy_panels)
                            <tr>
                                <td class="text-center">{{ ++$i }}</td>
                                <td>{{ $energy_panels->nama }}</td>
                                <td class="text-center">
                                        <a class="btn btn-info btn-sm" href="showPanelList/{{$energy_panels->id}}">API</a>
                                        @if (Auth::user()->level == 'Developer')
                                        <a class="btn btn-primary btn-sm" href="daftar-Panel-edit/{{$energy_panels->id}}">Edit</a>
                                        <a href="deletePanelList/{{$energy_panels->id}}" onclick="return confirm('Apakah Anda Yakin Menghapus Data?');" class="btn btn-danger btn-sm">Delete</a>
                                        @endif
                                </td>
                            </tr>
                            @endforeach
                        </table>
                      
                          

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      
  </section>

      <section class="pt-0 mt-0">
            <div class="container-fluid">
                <div class="row d-flex align-items-stretch">
                    <div class="col-lg">
                        <!-- Sales bar chart-->
                        <div class="card">
                            <div class="card-body">
                              <h3>List of Outlets</h3>
                              @if (Auth::user()->level == 'Developer')
                              <div class="d-flex justify-content-end">
                                  <a class="btn btn-success" href="daftar-Outlet-create">Tambah</a>
                              </div>
                              @endif
                                <div class="d-flex align-items-end justify-content-between pt-2 pb-2">
                                    
                                    </div>
                            
                                @if ($message = Session::get('succes'))
                                <div class="alert alert-success">
                                    <p>{{ $message }}</p>
                                </div>
                                @endif
                            
                                <table class="table table-bordered">
                                    <tr>
                                        <th class="text-center" width="80px">No</th>
                                        <th class="text-center">Nama</th>
                                        <th class="text-center" width="200px">Action</th>
                                    </tr>
                                    @foreach ($energy_outlet as $energy_outlets)
                                    <tr>
                                        <td class="text-center">{{ ++$j }}</td>
                                        <td>{{ $energy_outlets->nama }}</td>
                                        <td class="text-center">
                                                <a class="btn btn-info btn-sm" href="showOutletList/{{$energy_outlets->id}}">API</a>
                                                @if (Auth::user()->level == 'Developer')
                                                <a class="btn btn-primary btn-sm" href="daftar-Outlet-edit/{{$energy_outlets->id}}">Edit</a>
                                                <a href="deleteOutletList/{{$energy_outlets->id}}" onclick="return confirm('Apakah Anda Yakin Menghapus Data?');" class="btn btn-danger btn-sm">Delete</a>
                                                @endif
                                        </td>
                                    </tr>
                                    @endforeach
                                </table>
                            
                               

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
                            <h3>List of Lights</h3>
                            @if (Auth::user()->level == 'Developer')
                            <div class="d-flex justify-content-end">
                                <a class="btn btn-success" href="daftar-light-create">Tambah</a>
                            </div>
                            @endif
                              <div class="d-flex align-items-end justify-content-between pt-2 pb-2">
                                  
                                  </div>
                          
                              @if ($message = Session::get('succes'))
                              <div class="alert alert-success">
                                  <p>{{ $message }}</p>
                              </div>
                              @endif
                          
                              <table class="table table-bordered">
                                <tr>
                                    <th class="text-center" width="80px">No</th>
                                    <th class="text-center">Nama</th>
                                    <th class="text-center" width="200px">Action</th>
                                </tr>
                                @foreach ($light as $lights)
                                <tr>
                                    <td class="text-center">{{ ++$k }}</td>
                                    <td>{{ $lights->nama }}</td>
                                    <td class="text-center">
                                            <a class="btn btn-info btn-sm" href="showLightList/{{$lights->id}}">API</a>
                                            @if (Auth::user()->level == 'Developer')
                                            <a class="btn btn-primary btn-sm" href="daftar-light-edit/{{$lights->id}}">Edit</a>
                                            <a href="deleteLightList/{{$lights->id}}" onclick="return confirm('Apakah Anda Yakin Menghapus Data?');" class="btn btn-danger btn-sm">Delete</a>
                                            @endif
                                    </td>
                                </tr>
                                @endforeach
                            </table>
                          
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
                          <h3>List of Light Dimmers</h3>
                          @if (Auth::user()->level == 'Developer')
                          <div class="d-flex justify-content-end">
                              <a class="btn btn-success" href="daftar-lightDimmer-create">Tambah</a>
                          </div>
                          @endif
                            <div class="d-flex align-items-end justify-content-between pt-2 pb-2">
                                
                                </div>
                        
                            @if ($message = Session::get('succes'))
                            <div class="alert alert-success">
                                <p>{{ $message }}</p>
                            </div>
                            @endif
                        
                            <table class="table table-bordered">
                              <tr>
                                  <th class="text-center" width="80px">No</th>
                                  <th class="text-center">Nama</th>
                                  <th class="text-center" width="200px">Action</th>
                              </tr>
                              @foreach ($lightdimmer as $lightdimmers)
                              <tr>
                                  <td class="text-center">{{ ++$l }}</td>
                                  <td>{{ $lightdimmers->nama }}</td>
                                  <td class="text-center">
                                          <a class="btn btn-info btn-sm" href="showLightDimmerList/{{$lightdimmers->id}}">API</a>
                                          @if (Auth::user()->level == 'Developer')
                                          <a class="btn btn-primary btn-sm" href="daftar-lightDimmer-edit/{{$lightdimmers->id}}">Edit</a>
                                          <a href="deleteLightDimmerList/{{$lightdimmers->id}}" onclick="return confirm('Apakah Anda Yakin Menghapus Data?');" class="btn btn-danger btn-sm">Delete</a>
                                          @endif
                                  </td>
                              </tr>
                              @endforeach
                          </table>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </section>
      <section class="pt-0 mt-0">
        <div class="container-fluid">
            <div class="row d-flex align-items-stretch">
                <div class="col-lg">
                    <!-- Sales bar chart-->
                    <div class="card">
                        <div class="card-body">
                          <h3>List of Cameras</h3>
                          @if (Auth::user()->level == 'Developer')
                          <div class="d-flex justify-content-end">
                              <a class="btn btn-success" href="daftar-Camera-create">Tambah</a>
                          </div>
                          @endif
                            <div class="d-flex align-items-end justify-content-between pt-2 pb-2">
                                
                                </div>
                        
                            @if ($message = Session::get('succes'))
                            <div class="alert alert-success">
                                <p>{{ $message }}</p>
                            </div>
                            @endif
                        
                            <table class="table table-bordered">
                                <tr>
                                    <th class="text-center" width="80px">No</th>
                                    <th class="text-center">Nama</th>
                                    <th class="text-center">IP/Link</th>
                                    @if (Auth::user()->level == 'Developer')
                                    <th class="text-center" width="200px">Action</th>
                                    @endif
                                </tr>
                                <tr>
                                    <td class="text-center">{{ ++$n }}</td>
                                    <td>CCTV Utama</td>
                                    <td>http://203.6.149.118:89</td>
                                    @if (Auth::user()->level == 'Developer')
                                    <td class="text-center">
                                       
                                            <a class="btn btn-primary btn-sm" href="#">Edit</a>
                                            <a href="#" onclick="return confirm('Apakah Anda Yakin Menghapus Data?');" class="btn btn-danger btn-sm">Delete</a>
                                        
                                    </td>
                                    @endif 
                                </tr>
                                @foreach ($camera as $cameras)
                                <tr>
                                    <td class="text-center">{{ ++$n }}</td>
                                    <td>{{ $cameras->nama }}</td>
                                    <td>{{ $cameras->link }}</td>
                                    @if (Auth::user()->level == 'Developer')
                                    <td class="text-center">
                                       
                                            <a class="btn btn-primary btn-sm" href="daftar-Camera-edit/{{$cameras->id}}">Edit</a>
                                            <a href="deleteCameraList/{{$cameras->id}}" onclick="return confirm('Apakah Anda Yakin Menghapus Data?');" class="btn btn-danger btn-sm">Delete</a>
                                        
                                    </td>
                                    @endif 
                                </tr>
                                @endforeach
                            </table>
                        
                           

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <section class="pt-0 mt-0">
        <div class="container-fluid">
            <div class="row d-flex align-items-stretch">
                <div class="col-lg">
                    <!-- Sales bar chart-->
                    <div class="card">
                        <div class="card-body">
                          <h3>List of Fire Alarms</h3>
                          @if (Auth::user()->level == 'Developer')
                          <div class="d-flex justify-content-end">
                              <a class="btn btn-success" href="daftar-FireAlarm-create">Tambah</a>
                          </div>
                          @endif
                            <div class="d-flex align-items-end justify-content-between pt-2 pb-2">
                                
                                </div>
                        
                            @if ($message = Session::get('succes'))
                            <div class="alert alert-success">
                                <p>{{ $message }}</p>
                            </div>
                            @endif
                        
                            <table class="table table-bordered">
                                <tr>
                                    <th class="text-center" width="80px">No</th>
                                    <th class="text-center">Nama</th>
                                    <th class="text-center" width="200px">Action</th>
                                </tr>
                                @foreach ($firealarm as $firealarms)
                                <tr>
                                    <td class="text-center">{{ ++$m }}</td>
                                    <td>{{ $firealarms->nama }}</td>
                                    <td class="text-center">
                                            <a class="btn btn-info btn-sm" href="showFireAlarmList/{{$firealarms->id}}">API</a>
                                            @if (Auth::user()->level == 'Developer')
                                            <a class="btn btn-primary btn-sm" href="daftar-FireAlarm-edit/{{$firealarms->id}}">Edit</a>
                                            <a href="deleteFireAlarmList/{{$firealarms->id}}" onclick="return confirm('Apakah Anda Yakin Menghapus Data?');" class="btn btn-danger btn-sm">Delete</a>
                                            @endif
                                    </td>
                                </tr>
                                @endforeach
                            </table>
                        
                           

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <section class="pt-0 mt-0">
        <div class="container-fluid">
            <div class="row d-flex align-items-stretch">
                <div class="col-lg">
                    <!-- Sales bar chart-->
                    <div class="card">
                        <div class="card-body">
                          <h3>List of DHT Sensors</h3>
                          @if (Auth::user()->level == 'Developer')
                          <div class="d-flex justify-content-end">
                              <a class="btn btn-success" href="daftar-Dhtx-create">Tambah</a>
                          </div>
                          @endif
                            <div class="d-flex align-items-end justify-content-between pt-2 pb-2">
                                
                                </div>
                        
                            @if ($message = Session::get('succes'))
                            <div class="alert alert-success">
                                <p>{{ $message }}</p>
                            </div>
                            @endif
                        
                            <table class="table table-bordered">
                                <tr>
                                    <th class="text-center" width="80px">No</th>
                                    <th class="text-center" width="120px">ID DHT</th>
                                    <th class="text-center">Nama</th>
                                    <th class="text-center" width="140px">Tampilkan</th>
                                    <th class="text-center" width="200px">Action</th>
                                </tr>
                                <tr>
                                    <td class="text-center">{{ ++$o }}</td>
                                    <td class="text-center">DHT0</td>
                                    <td>Sensor Utama</td>
                                    <td class="text-center">
                                                                               
                                    </td>
                                    <td class="text-center">
                                            <a class="btn btn-info btn-sm" href="showdhtapi">API</a>
                                            @if (Auth::user()->level == 'Developer')
                                            <a class="btn btn-primary btn-sm" href="#">Edit</a>
                                            <a href="#" class="btn btn-danger btn-sm">Delete</a>
                                            @endif
                                    </td>
                                </tr>
                                @foreach ($dhtx as $dhtxs)
                                <tr>
                                    <td class="text-center">{{ ++$o }}</td>
                                    <td class="text-center">{{ $dhtxs->id_nama }}</td>
                                    <td>{{ $dhtxs->nama }}</td>
                                    <td class="text-center">
                                        @if($dhtxs->status==1)
                                        <label class="switch">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch2" checked>
                                            <a href="{{ url('daftar-Dhtx-status/'.$dhtxs->id) }}" class="slider round" ></a>
                                        </label>
                                        @else
                                        <label class="switch">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch2" disabled>
                                            <a href="{{ url('daftar-Dhtx-status/'.$dhtxs->id) }}" class="slider round" ></a>
                                        </label>
                                        @endif
                                    </td>
                                    <td class="text-center">
                                            <a class="btn btn-info btn-sm" href="showDhtxList/{{$dhtxs->id}}">API</a>
                                            @if (Auth::user()->level == 'Developer')
                                            <a class="btn btn-primary btn-sm" href="daftar-Dhtx-edit/{{$dhtxs->id}}">Edit</a>
                                            <a href="deleteDhtxList/{{$dhtxs->id}}" onclick="return confirm('Apakah Anda Yakin Menghapus Data?');" class="btn btn-danger btn-sm">Delete</a>
                                            @endif
                                    </td>
                                </tr>
                                @endforeach
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    



      
    </div>
</div>

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
