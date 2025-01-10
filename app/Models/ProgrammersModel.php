<?php

namespace App\Models;

use App\DAO\DAOProgrammer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ProgrammersModel extends Model
{
    public function ProgrammerList()
    {
        $dao_programmer = new DAOProgrammer();
        return $dao_programmer::ProgrammerList();
    }
    public function InsertProgrammer($req)
    {

        $dao_programmer = new DAOProgrammer();
        $existing = $dao_programmer::ExistingProgrammer(ucwords($req->programmer));
        $validations = $this->Validations($req, $existing);
        if ($validations == 'Success') {
            DB::transaction(function () use ($req, $dao_programmer) {
                $dao_programmer::InsertProgrammer($req);
            });
            return $dao_programmer::ProgrammerList();
        } else {
            return $validations;
        }
    }

    public function UpdateProgrammer($req)
    {

        $existing = false;
        $dao_programmer = new DAOProgrammer();
        $existing = $dao_programmer::ExistingProgrammer(ucwords($req->programmer));

        $validations = $this->Validations($req, $existing);
        if ($validations == 'Success') {
            DB::transaction(function () use ($req, $dao_programmer) {
                return $dao_programmer::UpdateProgrammer($req);
            });
            return $dao_programmer::ProgrammerList();
        } else {
            return $validations;
        }
    }


    public function DeleteRestoreProgrammer($req)
    {
        $dao_programmer = new DAOProgrammer();
        DB::transaction(function () use ($req, $dao_programmer) {
            $dao_programmer::DeleteRestoreProgrammer($req);
        });
        return $dao_programmer::ProgrammerList();
    }

    public function Validations($req, $existing)
    {
        if ($existing) {
            return 'Existing Data!';
        } else if (trim($req->programmer) == '') {
            return 'Please input programmer!';
        } else {
            return 'Success';
        }
    }
}
