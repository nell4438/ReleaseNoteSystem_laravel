<?php

namespace App\Models;

use App\DAO\DAORequestor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class RequestorsModel extends Model
{
    public function RequestorList()
    {
        $dao_requestorName = new DAORequestor();
        return $dao_requestorName::RequestorList();
    }
    public function InsertRequestorName($req)
    {
        $dao_requestorName = new DAORequestor();
        $existing = $dao_requestorName::ExistingRequestorName(ucwords($req->RequestorName));
        $validations = $this->Validations($req, $existing);
        if ($validations == 'Success') {
            DB::transaction(function () use ($req, $dao_requestorName) {
                $dao_requestorName::InsertRequestorName($req);
            });
            return $dao_requestorName::RequestorList();
        } else {
            return $validations;
        }
    }
    public function DeleteRestoreRequestorName($req)
    {
        $dao_requestorName = new DAORequestor();
        DB::transaction(function () use ($req, $dao_requestorName) {
            $dao_requestorName::DeleteRestoreRequestorName($req);
        });
        return $dao_requestorName::RequestorList();
    }


    public function UpdateRequestorName($req)
    {

        $existing = false;
        $dao_requestorName = new DAORequestor();
        $existing = $dao_requestorName::ExistingRequestorName(ucwords($req->RequestorName));

        $validations = $this->Validations($req, $existing);
        if ($validations == 'Success') {
            DB::transaction(function () use ($req, $dao_requestorName) {
                return $dao_requestorName::UpdateRequestorName($req);
            });
            return $dao_requestorName::RequestorList();
        } else {
            return $validations;
        }
    }


    public function Validations($req, $existing)
    {
        if ($existing) {
            return 'Existing Data!';
        } else if (trim($req->RequestorName) == '') {
            return 'Please input Requestor Name!';
        } else {
            return 'Success';
        }
    }
}
