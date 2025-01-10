<?php

namespace App\Http\Controllers;

use App\Models\ProgrammersModel;
use Illuminate\Http\Request;
use App\Exceptions\CommonException;

class ProgrammerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $programmer_model = new ProgrammersModel();
            return $programmer_model->ProgrammerList();
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
        // return $request;
        try {
            $programmer_model = new ProgrammersModel();
            return $programmer_model->InsertProgrammer($request);
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
        //
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
        // return $request;
        try {
            $programmer_model = new ProgrammersModel();
            return $condition == 'update' ? $programmer_model->UpdateProgrammer($request) : $programmer_model->DeleteRestoreProgrammer($request);
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
