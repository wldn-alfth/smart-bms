<?php

namespace App\Exports;

use App\Models\Energy;
use App\Models\Driver;
use Maatwebsite\Excel\Concerns\WithHeadings;    
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\FromCollection;

class EnergyExport implements FromCollection,WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function headings() :array
    {
        return [ "date","total energy"];
    }
    public function collection()
    {
        return Energy::select(Energy::raw('DATE(created_at) as date'), energy::raw('SUM(active_power) as sale'))->
        groupBy(Energy::raw('DATE(created_at)'))->
        get();;
    }
}
