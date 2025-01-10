<?php

namespace App\Models;

use App\DAO\DAOKind;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class KindsModel extends Model
{
    public function KindList()
    {
        $dao_kind = new DAOKind();
        return $dao_kind::KindList();
    }
    public function FilterKindList($id)
    {
        $dao_kind = new DAOKind();
        return $dao_kind::FilterKindList($id);
    }
    public function InsertKind($req)
    {
        $dao_kind = new DAOKind();
        $existing = $dao_kind::ExistingKind($req->kindOfRequest, $req->typeOfRequest);
        $validations = $this->Validations($req, $existing);
        if ($validations == 'Success') {
            DB::transaction(function () use ($req, $dao_kind) {
                $dao_kind::InsertKind($req);
            });
            return $dao_kind::KindList();
        } else {
            return $validations;
        }
    }

    public function UpdateKind($req)
    {

        $existing = false;
        $dao_kind = new DAOKind();
        $existing = $dao_kind::ExistingKind($req->kindOfRequest, $req->typeOfRequest);
        $validations = $this->Validations($req, $existing);
        if ($validations == 'Success') {
            DB::transaction(function () use ($req, $dao_kind) {
                return $dao_kind::UpdateKind($req);
            });
            return $dao_kind::KindList();
        } else {
            return $validations;
        }
    }

    public function DeleteRestoreKind($req)
    {
        $dao_kind = new DAOKind();
        DB::transaction(function () use ($req, $dao_kind) {
            $dao_kind::DeleteRestoreKind($req);
        });
        return $dao_kind::KindList();
    }

    public function Validations($req, $existing)
    {
        if ($existing) {
            return 'Existing Data!';
        } else if (trim($req->typeOfRequest) == '') {
            return 'Please input Type!';
        } else if (trim($req->kindOfRequest) == '') {
            return 'Please input Kind!';
        } else {
            return 'Success';
        }
    }
}
