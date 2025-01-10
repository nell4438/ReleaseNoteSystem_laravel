<?php

namespace App\DAO;

use App\DTO\DTOProgrammer;
use App\Models\Programmers;
use Illuminate\Support\Facades\DB;

class DAOProgrammer
{
    public static function ProgrammerList()
    {
        $data = Programmers::select('programmerID', 'programmer', 'deleted_at')
            ->orderBy('created_at')
            ->get();

        $programmerlist = [];
        foreach ($data as $rec) {
            $dto_programmer = new DTOProgrammer();
            $dto_programmer->setProgrammer($rec->programmer);
            $dto_programmer->setProgrammerID($rec->programmerID);
            $dto_programmer->setDeleted_at($rec->deleted_at);
            $programmerlist[] = $dto_programmer;
        }
        return $programmerlist;
    }

    public static function ExistingProgrammer($programmer)
    {
        return DB::table('programmer')->where('programmer', $programmer)->exists();
    }

    public static function UpdateProgrammer($req)
    {
        Programmers::where('programmerID', $req->programmerID)
            ->update(
                [
                    'programmer' => ucwords($req->programmer),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                    'UpdatedBy' => '33993'
                ]
            );
    }


    public static function InsertProgrammer($req)
    {
        Programmers::insert(
            [
                'programmer' => ucwords($req->input('programmer')),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'deleted_at' => null,
                'UpdatedBy' => '33993'
            ]
        );
    }

    public static function DeleteRestoreProgrammer($req)
    {
        Programmers::where('programmerID', $req->input('programmerID'))
            ->update(
                [
                    'deleted_at' => $req->input('deleted_at') ? null : date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                    'UpdatedBy' => '33993'
                ]
            );
    }
}
