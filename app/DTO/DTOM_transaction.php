<?php

namespace App\DTO;

class DTOM_transaction
{
    public $code;
    public $programmer;
    public $systemName;
    public $RequestorName;
    public $typeOfRequest;
    public $kindOfRequest;
    public $priority;
    public $receivedDate;
    public $dueDate;
    public $startedDate;
    public $finishedDate;
    public $status;
    public $details;
    public $created_at;
    public $updated_at;
    public $deleted_at;
    public $UpdatedBy;

    public $programmerID;
    public $requestorID;
    public $SystemNameID;
    public $typeID;
    public $kindID;

    /**
     * Get the value of UpdatedBy
     */
    public function getUpdatedBy()
    {
        return $this->UpdatedBy;
    }

    /**
     * Set the value of UpdatedBy
     *
     * @return  self
     */
    public function setUpdatedBy($UpdatedBy)
    {
        $this->UpdatedBy = $UpdatedBy;

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
     * Get the value of updated_at
     */
    public function getUpdated_at()
    {
        return $this->updated_at;
    }

    /**
     * Set the value of updated_at
     *
     * @return  self
     */
    public function setUpdated_at($updated_at)
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    /**
     * Get the value of created_at
     */
    public function getCreated_at()
    {
        return $this->created_at;
    }

    /**
     * Set the value of created_at
     *
     * @return  self
     */
    public function setCreated_at($created_at)
    {
        $this->created_at = $created_at;

        return $this;
    }

    /**
     * Get the value of details
     */
    public function getDetails()
    {
        return $this->details;
    }

    /**
     * Set the value of details
     *
     * @return  self
     */
    public function setDetails($details)
    {
        $this->details = $details;

        return $this;
    }

    /**
     * Get the value of status
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set the value of status
     *
     * @return  self
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get the value of finishedDate
     */
    public function getFinishedDate()
    {
        return $this->finishedDate;
    }

    /**
     * Set the value of finishedDate
     *
     * @return  self
     */
    public function setFinishedDate($finishedDate)
    {
        $this->finishedDate = $finishedDate;

        return $this;
    }

    /**
     * Get the value of startedDate
     */
    public function getStartedDate()
    {
        return $this->startedDate;
    }

    /**
     * Set the value of startedDate
     *
     * @return  self
     */
    public function setStartedDate($startedDate)
    {
        $this->startedDate = $startedDate;

        return $this;
    }

    /**
     * Get the value of dueDate
     */
    public function getDueDate()
    {
        return $this->dueDate;
    }

    /**
     * Set the value of dueDate
     *
     * @return  self
     */
    public function setDueDate($dueDate)
    {
        $this->dueDate = $dueDate;

        return $this;
    }

    /**
     * Get the value of receivedDate
     */
    public function getReceivedDate()
    {
        return $this->receivedDate;
    }

    /**
     * Set the value of receivedDate
     *
     * @return  self
     */
    public function setReceivedDate($receivedDate)
    {
        $this->receivedDate = $receivedDate;

        return $this;
    }

    /**
     * Get the value of priority
     */
    public function getPriority()
    {
        return $this->priority;
    }

    /**
     * Set the value of priority
     *
     * @return  self
     */
    public function setPriority($priority)
    {
        $this->priority = $priority;

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
     * Get the value of systemName
     */
    public function getSystemName()
    {
        return $this->systemName;
    }

    /**
     * Set the value of systemName
     *
     * @return  self
     */
    public function setSystemName($systemName)
    {
        $this->systemName = $systemName;

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
     * Get the value of code
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set the value of code
     *
     * @return  self
     */
    public function setCode($code)
    {
        $this->code = $code;

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
