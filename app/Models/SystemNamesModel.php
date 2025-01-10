<?php

namespace App\Models;

use App\DAO\DAOSystemNames;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class SystemNamesModel extends Model
{
    public function SystemNameList()
    {
        $dao_systemName = new DAOSystemNames();
        return $dao_systemName::SystemNameList();
    }

    public function InsertSystemName($req)
    {
        $dao_systemName = new DAOSystemNames();
        $existing = $dao_systemName::ExistingSystem(ucwords($req->SystemName));
        $validations = $this->Validations($req, $existing);
        if ($validations == 'Success') {
            DB::transaction(function () use ($req, $dao_systemName) {
                $dao_systemName::InsertSystemName($req);
            });
            return $dao_systemName::SystemNameList();
        } else {
            return $validations;
        }
    }

    public function DeleteRestoreSystemName($req)
    {
        $dao_systemName = new DAOSystemNames();
        DB::transaction(function () use ($req, $dao_systemName) {
            $dao_systemName::DeleteRestoreSystemName($req);
        });
        return $dao_systemName::SystemNameList();
    }




    public function UpdateSystemName($req)
    {

        $existing = false;
        $dao_systemName = new DAOSystemNames();
        $existing = $dao_systemName::ExistingSystem(ucwords($req->SystemName));

        $validations = $this->Validations($req, $existing);
        if ($validations == 'Success') {
            DB::transaction(function () use ($req, $dao_systemName) {
                return $dao_systemName::UpdateSystemName($req);
            });
            return $dao_systemName::SystemNameList();
        } else {
            return $validations;
        }
    }






    public function Validations($req, $existing)
    {
        if ($existing) {
            return 'Existing Data!';
        } else if (trim($req->SystemName) == '') {
            return 'Please input System Name!';
        } else {
            return 'Success';
        }
    }
}
