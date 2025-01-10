<?php

namespace App\DTO;

class DTORequestor
{
    public $RequestorName;
    public $requestorID;
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
     * Get the value of RequestorName
     */ 
    public function getRequestorName()
    {
        return $this->RequestorName;
    }

    /**
     * Set the value of RequestorName
     *
     * @return  self
     */ 
    public function setRequestorName($RequestorName)
    {
        $this->RequestorName = $RequestorName;

        return $this;
    }

    /**
     * Get the value of requestorID
     */ 
    public function getRequestorID()
    {
        return $this->requestorID;
    }

    /**
     * Set the value of requestorID
     *
     * @return  self
     */ 
    public function setRequestorID($requestorID)
    {
        $this->requestorID = $requestorID;

        return $this;
    }
}
