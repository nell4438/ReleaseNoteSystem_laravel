<?php

namespace App\DAO;

use App\DTO\DTOM_transaction;
use App\Models\M_transaction;
use App\Models\kinds;
use App\Models\Programmers;
use App\Models\Types;
use App\Models\SystemNames;
use App\Models\Requestors;

class DAOM_transaction
{
    public static function M_transactionList()
    {

        $data = M_transaction::select('code', 'programmer', 'requestor', 'systemName', 'typeOfRequest', 'kindOfRequest', 'priority', 'receivedDate', 'dueDate', 'startedDate', 'finishedDate', 'status', 'details', 'deleted_at')
            ->orderBy('code')
            ->get();

        $M_transactionList = [];
        foreach ($data as $rec) {
            $dto_transaction = new DTOM_transaction();
            $dto_transaction->setCode($rec->code);

            $programmer = Programmers::select('programmer')->where('programmerID', $rec->programmer)->get();
            $dto_transaction->setProgrammer($programmer[0]->programmer);

            $RequestorName = Requestors::select('RequestorName')->where('requestorID', $rec->requestor)->get();
            $dto_transaction->setRequestorName($RequestorName[0]->RequestorName);

            $systemName = SystemNames::select('systemName')->where('systemNameID', $rec->systemName)->get();
            $dto_transaction->setSystemName($systemName[0]->systemName);

            $type = Types::select('typeOfRequest')->where('typeID', $rec->typeOfRequest)->get();
            $dto_transaction->settypeOfRequest($type[0]->typeOfRequest);

            $kind = Kinds::select('kindOfRequest')->where('kindID', $rec->kindOfRequest)->get();
            $dto_transaction->setKindOfRequest($kind[0]->kindOfRequest);

            $dto_transaction->setprogrammerID($rec->programmer);
            $dto_transaction->setrequestorID($rec->requestor);
            $dto_transaction->setSystemNameID($rec->systemName);
            $dto_transaction->settypeID($rec->typeOfRequest);
            $dto_transaction->setkindID($rec->kindOfRequest);

            $dto_transaction->setPriority($rec->priority);
            $dto_transaction->setReceivedDate(substr($rec->receivedDate, 0, -13));
            $dto_transaction->setDueDate(substr($rec->dueDate, 0, -13));
            $dto_transaction->setStartedDate(substr($rec->startedDate, 0, -13));
            $dto_transaction->setFinishedDate(substr($rec->finishedDate, 0, -13));
            $dto_transaction->setStatus($rec->status);
            $dto_transaction->setDetails($rec->details);
            $dto_transaction->setDeleted_at($rec->deleted_at);
            $M_transactionList[] = $dto_transaction;
        }
        return $M_transactionList;
    }

    public static function ExistingM_transaction($req)
    {
        return M_transaction::where('programmer', $req->programmer)
            ->where('systemName', $req->systemName)
            ->where('typeOfRequest', $req->typeOfRequest)
            ->where('kindOfRequest', $req->kindOfRequest)
            ->exists();
    }

    public static function DeleteRestoreTransaction($req)
    {
        M_transaction::where('code', $req->input('code'))
            ->update(
                [
                    'deleted_at' => $req->input('deleted_at') ? null : date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                    'UpdatedBy' => '33993'
                ]
            );
    }
    public static function UpdateTransaction($req)
    {
        M_transaction::where('code', $req->code)
            ->update(
                [
                    'programmer' => $req->input('programmerID'),
                    'systemName' => $req->input('SystemNameID'),
                    'requestor' => $req->input('requestorID'),
                    'typeOfRequest' => $req->input('typeID'),
                    'kindOfRequest' => $req->input('kindID'),
                    'priority' => $req->input('priority'),
                    'receivedDate' => $req->input('receivedDate'),
                    'dueDate' => $req->input('dueDate'),
                    'startedDate' => $req->input('startedDate'),
                    'finishedDate' => $req->input('finishedDate'),
                    'status' => $req->input('status'),
                    'details' => $req->input('details'),
                    'updated_at' => date('Y-m-d H:i:s'),
                    'UpdatedBy' => '33993'
                ]
            );
    }

    public static function InsertM_transaction($req)
    {
        $latest_code = M_transaction::max('code');
        $last_code = substr($latest_code, 6);
        $last_month = substr($latest_code, 0, 5);
        $yearmonth = date('my') . '-';
        if ($last_month != 'I' . date('my')) {
            $final_code = 'I' . $yearmonth . str_pad(1, 4, '0', STR_PAD_LEFT);
        } elseif ($last_month == 'I' . date('my')) {
            $final_code = 'I' . $yearmonth . str_pad($last_code + 1, 4, '0', STR_PAD_LEFT);
        } else {
            return 'error';
        }

        M_transaction::insert(
            [
                'code' => $final_code,
                'programmer' => $req->input('programmerID'),
                'systemName' => $req->input('SystemNameID'),
                'requestor' => $req->input('requestorID'),
                'typeOfRequest' => $req->input('typeID'),
                'kindOfRequest' => $req->input('kindID'),
                'priority' => $req->input('priority'),
                'receivedDate' => $req->input('receivedDate'),
                'dueDate' => $req->input('dueDate'),
                'startedDate' => $req->input('startedDate'),
                'finishedDate' => $req->input('finishedDate'),
                'status' => $req->input('status'),
                'details' => $req->input('details'),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'deleted_at' => null,
                'UpdatedBy' => '33993'
            ]
        );
    }
}
