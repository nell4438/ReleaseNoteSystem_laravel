<?php

namespace App\Models;

use App\DAO\DAOType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TypesModel extends Model
{
    public function TypeList()
    {
        $dao_type = new DAOType();
        return $dao_type::TypeList();
    }

    public function InsertType($req)
    {
        $dao_type = new DAOType();
        $existing = $dao_type::ExistingType(ucwords($req->typeOfRequest));
        $validations = $this->Validations($req, $existing);
        if ($validations == 'Success') {
            DB::transaction(function () use ($req, $dao_type) {
                $dao_type::InsertType($req);
            });
            return $dao_type::TypeList();
        } else {
            return $validations;
        }
    }

    public function DeleteRestoreType($req)
    {
        $dao_type = new DAOType();
        DB::transaction(function () use ($req, $dao_type) {
            $dao_type::DeleteRestoreType($req);
        });
        return $dao_type::TypeList();
    }


    public function UpdateType($req)
    {

        $existing = false;
        $dao_type = new DAOType();
        $existing = $dao_type::ExistingType(ucwords($req->typeOfRequest));

        $validations = $this->Validations($req, $existing);
        if ($validations == 'Success') {
            DB::transaction(function () use ($req, $dao_type) {
                return $dao_type::UpdateType($req);
            });
            return $dao_type::TypeList();
        } else {
            return $validations;
        }
    }


    public function Validations($req, $existing)
    {
        if ($existing) {
            return 'Existing Data!';
        } else if (trim($req->typeOfRequest) == '') {
            return 'Please input Requestor Name!';
        } else {
            return 'Success';
        }
    }
}
