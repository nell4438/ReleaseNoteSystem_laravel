<?php

namespace App\DTO;

class DTOSystemName
{
    public $SystemName;
    public $SystemNameID;
    public $deleted_at;

    /**
     * Get the value of SysmtemName
     */ 
    public function getSystemName()
    {
        return $this->SystemName;
    }

    /**
     * Set the value of SysmtemName
     *
     * @return  self
     */ 
    public function setSystemName($SystemName)
    {
        $this->SystemName = $SystemName;

        return $this;
    }

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
     * Get the value of SystemNameID
     */ 
    public function getSystemNameID()
    {
        return $this->SystemNameID;
    }

    /**
     * Set the value of SystemNameID
     *
     * @return  self
     */ 
    public function setSystemNameID($SystemNameID)
    {
        $this->SystemNameID = $SystemNameID;

        return $this;
    }
}
