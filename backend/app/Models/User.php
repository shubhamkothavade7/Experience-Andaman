<?php

namespace App\Models;


use MongoDB\Laravel\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{

    protected $connection = 'mongodb';
    public function getJWTIdentifier()
    {
        return $this->_id; // for MongoDB, use _id
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    protected $fillable = ['name', 'email', 'password'];
    protected $hidden = ['password'];
}
