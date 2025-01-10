<?php

namespace App\DTO;

class DTOKind
{
    public $kindID;
    public $typeID;
    public $kindOfRequest;
    public $typeOfRequest;
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
     * Get the value of typeOfRequest
     */
    public function getTypeOfRequest()
    {
        return $this->typeOfRequest;
    }

    /**
     * Set the value of typeOfRequest
     *
     * @return  self
     */
    public function setTypeOfRequest($typeOfRequest)
    {
        $this->typeOfRequest = $typeOfRequest;

        return $this;
    }

    /**
     * Get the value of kindOfRequest
     */
    public function getKindOfRequest()
    {
        return $this->kindOfRequest;
    }

    /**
     * Set the value of kindOfRequest
     *
     * @return  self
     */
    public function setKindOfRequest($kindOfRequest)
    {
        $this->kindOfRequest = $kindOfRequest;

        return $this;
    }

    /**
     * Get the value of kindID
     */ 
    public function getKindID()
    {
        return $this->kindID;
    }

    /**
     * Set the value of kindID
     *
     * @return  self
     */ 
    public function setKindID($kindID)
    {
        $this->kindID = $kindID;

        return $this;
    }

    /**
     * Get the value of typeID
     */ 
    public function getTypeID()
    {
        return $this->typeID;
    }

    /**
     * Set the value of typeID
     *
     * @return  self
     */ 
    public function setTypeID($typeID)
    {
        $this->typeID = $typeID;

        return $this;
    }
}
