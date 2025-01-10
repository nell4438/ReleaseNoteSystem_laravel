<?php

namespace App\Models;

use App\DAO\DAOM_transaction;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class M_transactionModel extends Model
{
    public function M_transactionList()
    {
        $dao_transaction = new DAOM_transaction();
        return $dao_transaction::M_transactionList();
    }

    public function InsertM_transaction($req)
    {
        $dao_transaction = new DAOM_transaction();
        $existing = $dao_transaction::ExistingM_transaction($req);
        $validations = $this->Validations($req, $existing);
        if ($validations == 'Success') {
            DB::transaction(function () use ($req, $dao_transaction) {
                $dao_transaction::InsertM_transaction($req);
            });
            return $dao_transaction::M_transactionList();
        } else {
            return $validations;
        }
    }

    public function DeleteRestoreTransaction($req)
    {
        $dao_transaction = new DAOM_transaction();
        DB::transaction(function () use ($req, $dao_transaction) {
            $dao_transaction::DeleteRestoreTransaction($req);
        });
        return $dao_transaction::M_transactionList();
    }

    public function UpdateTransaction($req)
    {
        $existing = false;
        $dao_transaction = new DAOM_transaction();
        $existing = $dao_transaction::ExistingM_transaction($req);

        $validations = $this->Validations($req, $existing);
        if ($validations == 'Success') {
            DB::transaction(function () use ($req, $dao_transaction) {
                $dao_transaction::UpdateTransaction($req);
            });
            return $dao_transaction::M_transactionList();
        } else {
            return $validations;
        }
    }

    public function Validations($req, $existing)
    {
        // return ($req->SystemNameID);
        if ($existing) {
            return 'Existing Data!';
        } else if (trim($req->programmerID) == '') {
            return 'Please Select Developer';
        } else if (trim($req->SystemNameID) == '') {
            return 'Please Select System Name';
        } else if (trim($req->typeID) == '') {
            return 'Please Select Type';
        } else if (trim($req->kindID) == '') {
            return 'Please Select Kind';
        } else if (trim($req->priority) == '') {
            return 'Please Select Priority';
        } else if (trim($req->requestorID) == '') {
            return 'Please Select Requestor';
        } else if (trim($req->status) == '') {
            return 'Please Select Status';
        } else if (trim($req->details) == '') {
            return 'Please Input Details';
        } else if (trim($req->receivedDate) == '') {
            return 'Please Select Reeived Date';
        } else if (trim($req->dueDate) == '') {
            return 'Please Select Due Date';
        } else if (trim($req->status) == "Finished" && $req->finishedDate == null) {
            return 'Please Select Finished Date';
        } else if (trim($req->status) == "Not Yet Started" && $req->startedDate != null) {
            return 'Please Remove Started Date';
        } else if (trim($req->status) == "On Going" && $req->startedDate == null) {
            return 'Please Select Started Date';
        } else {
            return 'Success';
        }
    }
}
