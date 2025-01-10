<?php

namespace App\DAO;

use App\DTO\DTOSystemName;
use App\Models\SystemNames;
use Illuminate\Support\Facades\DB;

class DAOSystemNames
{
    public static function SystemNameList()
    {
        $data = SystemNames::select('SystemNameID', 'SystemName', 'deleted_at')
            ->orderBy('created_at')
            ->get();

        $systemNameList = [];
        foreach ($data as $rec) {
            $dto_SystemName = new DTOSystemName();
            $dto_SystemName->setSystemName($rec->SystemName);
            $dto_SystemName->setSystemNameID($rec->SystemNameID);
            $dto_SystemName->setDeleted_at($rec->deleted_at);
            $systemNameList[] = $dto_SystemName;
        }
        return $systemNameList;
    }


    public static function InsertSystemName($req)
    {
        SystemNames::insert(
            [
                'systemName' => ucwords($req->input('SystemName')),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'deleted_at' => null,
                'UpdatedBy' => '33993'
            ]
        );
    }


    public static function ExistingSystem($SystemName)
    {
        return SystemNames::where('systemName', $SystemName)->exists();
    }

    public static function DeleteRestoreSystemName($req)
    {
        SystemNames::where('SystemNameID', $req->input('SystemNameID'))
            ->update(
                [
                    'deleted_at' => $req->input('deleted_at') ? null : date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                    'UpdatedBy' => '33993'
                ]
            );
    }

    public static function UpdateSystemName($req)
    {
        SystemNames::where('SystemNameID', $req->SystemNameID)
            ->update(
                [
                    'SystemName' => ucwords($req->SystemName),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                    'UpdatedBy' => '33993'
                ]
            );
    }
}
