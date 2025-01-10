<?php

namespace App\DAO;

use App\DTO\DTORequestor;
use App\Models\Requestors;

class DAORequestor
{
    public static function RequestorList()
    {
        $data = Requestors::select('requestorID', 'RequestorName', 'deleted_at')
            ->orderBy('created_at')
            ->get();

        $requestorList = [];
        foreach ($data as $rec) {
            $dto_requestor = new DTORequestor();
            $dto_requestor->setRequestorName($rec->RequestorName);
            $dto_requestor->setrequestorID($rec->requestorID);
            $dto_requestor->setDeleted_at($rec->deleted_at);
            $requestorList[] = $dto_requestor;
        }
        return $requestorList;
    }


    public static function InsertRequestorName($req)
    {
        Requestors::insert(
            [
                'RequestorName' => ucwords($req->input('RequestorName')),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'deleted_at' => null,
                'UpdatedBy' => '33993'
            ]
        );
    }


    public static function ExistingRequestorName($RequestorName)
    {
        return Requestors::where('RequestorName', $RequestorName)->exists();
    }


    public static function DeleteRestoreRequestorName($req)
    {
        Requestors::where('requestorID', $req->input('requestorID'))
            ->update(
                [
                    'deleted_at' => $req->input('deleted_at') ? null : date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                    'UpdatedBy' => '33993'
                ]
            );
    }

    public static function UpdateRequestorName($req)
    {
        Requestors::where('requestorID', $req->requestorID)
            ->update(
                [
                    'RequestorName' => ucwords($req->RequestorName),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                    'UpdatedBy' => '33993'
                ]
            );
    }
}
