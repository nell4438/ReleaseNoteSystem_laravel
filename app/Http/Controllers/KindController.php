<?php

namespace App\Http\Controllers;

use App\Models\KindsModel;
use Illuminate\Http\Request;
use App\Exceptions\CommonException;

class KindController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $kind_model = new KindsModel();
            return $kind_model->kindList();
        } catch (\Exception $e) {
            $err_data = ['Parameters' => 'NULL', 'Functions' => __FUNCTION__];
            throw new CommonException($e, $err_data, 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $kind_model = new KindsModel();
            return $kind_model->InsertKind($request);
        } catch (\Exception $e) {
            $err_data = ['Parameters' => $request, 'Functions' => __FUNCTION__];
            throw new CommonException($e, $err_data, 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $kind_model = new KindsModel();
            return $kind_model->FilterKindList($id);
        } catch (\Exception $e) {
            $err_data = ['Parameters' => 'NULL', 'Functions' => __FUNCTION__];
            throw new CommonException($e, $err_data, 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $condition)
    {
        try {
            $kind_model = new KindsModel();
            return $condition == 'update' ? $kind_model->UpdateKind($request) : $kind_model->DeleteRestoreKind($request);
        } catch (\Exception $e) {
            $err_data = ['Parameters' => $request, 'Functions' => __FUNCTION__];
            throw new CommonException($e, $err_data, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
