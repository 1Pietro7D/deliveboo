<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    function index() {
        return view ('admin.home');  // ritornare l'utente alla pagina home che si trova sotto ad admin/home
    }
}
