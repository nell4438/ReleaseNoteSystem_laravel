<?php

namespace App\DTO;

class DTOProgrammer
{
    
    public $programmer;
    public $programmerID;
    public $deleted_at;

    /**
     * Get the value of deleted_at
     */ 
    public function getDeleted_at()
    {
        return $this->deleted_at;
    }

    /**
     * Set the value of deleted_at
     *
     * @return  self
     */ 
    public function setDeleted_at($deleted_at)
    {
        $this->deleted_at = $deleted_at;

        return $this;
    }

    /**
     * Get the value of programmer
     */ 
    public function getProgrammer()
    {
        return $this->programmer;
    }

    /**
     * Set the value of programmer
     *
     * @return  self
     */ 
    public function setProgrammer($programmer)
    {
        $this->programmer = $programmer;

        return $this;
    }

    /**
     * Get the value of programmerID
     */ 
    public function getProgrammerID()
    {
        return $this->programmerID;
    }

    /**
     * Set the value of programmerID
     *
     * @return  self
     */ 
    public function setProgrammerID($programmerID)
    {
        $this->programmerID = $programmerID;

        return $this;
    }
}
