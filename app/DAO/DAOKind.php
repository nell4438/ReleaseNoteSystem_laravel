<?php

namespace App\DAO;

use App\DTO\DTOKind;
use App\Models\Kinds;
use App\Models\Types;

class DAOKind
{

    public static function KindList()
    {
        $data = Kinds::select('kindID', 'kindOfRequest', 'typeOfRequest', 'deleted_at')
            ->orderBy('typeOfRequest')
            ->get();

        $tpyeList = [];
        foreach ($data as $rec) {
            $dto_kind = new DTOKind();
            $dto_kind->setkindOfRequest($rec->kindOfRequest);
            $dto_kind->setkindID($rec->kindID);
            $dto_kind->settypeID($rec->typeOfRequest);
            $type = Types::select('typeOfRequest')->where('typeID', $rec->typeOfRequest)->get();
            $dto_kind->settypeOfRequest($type[0]->typeOfRequest);
            $dto_kind->setDeleted_at($rec->deleted_at);
            $tpyeList[] = $dto_kind;
        }
        return $tpyeList;
    }

    public static function FilterKindList($id)
    {
        $data = Kinds::select('kindID', 'kindOfRequest', 'typeOfRequest', 'deleted_at')
            ->where('typeOfRequest', $id)
            ->orderBy('typeOfRequest')
            ->get();

        $tpyeList = [];
        foreach ($data as $rec) {
            $dto_kind = new DTOKind();
            $dto_kind->setkindOfRequest($rec->kindOfRequest);
            $dto_kind->setkindID($rec->kindID);
            $dto_kind->settypeID($rec->typeOfRequest);
            $type = Types::select('typeOfRequest')->where('typeID', $rec->typeOfRequest)->get();
            $dto_kind->settypeOfRequest($type[0]->typeOfRequest);
            $dto_kind->setDeleted_at($rec->deleted_at);
            $tpyeList[] = $dto_kind;
        }
        return $tpyeList;
    }
    public static function UpdateKind($req)
    {
        Kinds::where('kindID', $req->kindID)
            ->update(
                [
                    'kindOfRequest' => ucwords($req->kindOfRequest),
                    'typeOfRequest' => $req->typeID,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                    'UpdatedBy' => '33993'
                ]
            );
    }


    public static function DeleteRestoreKind($req)
    {
        Kinds::where('kindID', $req->kindID)
            ->update(
                [
                    'deleted_at' => $req->input('deleted_at') ? null : date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                    'UpdatedBy' => '33993'
                ]
            );
    }

    public static function ExistingKind($kindOfRequest, $typeOfRequest)
    {
        return Kinds::where('kindOfRequest', $kindOfRequest)
            ->where('typeOfRequest', $typeOfRequest)->exists();
    }


    public static function InsertKind($req)
    {
        Kinds::insert(
            [

                'kindOfRequest' => ucwords($req->input('kindOfRequest')),
                'typeOfRequest' => $req->input('typeOfRequest'),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'deleted_at' => null,
                'UpdatedBy' => '33993'
            ]
        );
    }
}
