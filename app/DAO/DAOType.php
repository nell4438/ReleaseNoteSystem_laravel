<?php

namespace App\DAO;

use App\DTO\DTOType;
use App\Models\Types;

class DAOType
{
    public static function TypeList()
    {
        $data = Types::select('typeID', 'typeOfRequest', 'deleted_at')
            ->orderBy('created_at')
            ->get();

        $tpyeList = [];
        foreach ($data as $rec) {
            $dto_type = new DTOType();
            $dto_type->settypeID($rec->typeID);
            $dto_type->settypeOfRequest($rec->typeOfRequest);
            $dto_type->setDeleted_at($rec->deleted_at);
            $tpyeList[] = $dto_type;
        }
        return $tpyeList;
    }

    public static function InsertType($req)
    {
        Types::insert(
            [
                'typeOfRequest' => ucwords($req->input('typeOfRequest')),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'deleted_at' => null,
                'UpdatedBy' => '33993'
            ]
        );
    }

    public static function ExistingType($typeOfRequest)
    {
        return Types::where('typeOfRequest', $typeOfRequest)->exists();
    }


    public static function DeleteRestoreType($req)
    {
        Types::where('typeID', $req->input('typeID'))
            ->update(
                [
                    'deleted_at' => $req->input('deleted_at') ? null : date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                    'UpdatedBy' => '33993'
                ]
            );
    }

    public static function UpdateType($req)
    {
        Types::where('typeID', $req->typeID)
            ->update(
                [
                    'typeOfRequest' => ucwords($req->typeOfRequest),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                    'UpdatedBy' => '33993'
                ]
            );
    }
}
