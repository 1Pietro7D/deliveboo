@extends('layouts.app') <!--estendo layout.app-->

@section('content')

<h1 class="text-center mb-5">MENU'</h1>
@foreach ($dishes as $item)

<div class="text-center">
    <div class="mb-2 d-flex flex-column">
        <span>Piatto: {{$item->name}}</span> <span class="mx-5">Prezzo:{{$item->price}} EURO</span>
    </div>


    <div class="w-100">
       <img class="w-25" src="{{asset('storage/'.$item->img)}}" alt="img">
    </div>

    <div class="d-flex justify-content-center mb-5">
        {{-- DELETE --}}
        <form class="mt-3" method="POST" action="{{ route('admin.dishes.destroy', $item->id) }}">
            @csrf
            @method('DELETE')
            <input class="btn btn-danger mb-3"onclick="return confirm('Vuoi davvero eliminare il piatto?')" type="submit" value="Elimina">
        </form>


        {{-- EDIT  --}}
            <div class="d-inline"><a class="btn btn-info my-3 mx-3" href="{{ route('admin.dishes.edit', $item->id) }}">Modifica Piatto</a></div>

    </div>


</div>

@endforeach
   {{-- ADD DISH--}}
   <a class="btn btn-info my-3 mx-3" href="{{ route('admin.dishes.create') }}">Aggiungi Piatto</a>

 {{-- RITORNO NEL HOME --}}
 <a class="btn btn-info my-3 mx-3" href="{{ route('admin.restaurants.index') }}">Back to home</a>
@endsection

<style>

label {
        width: 60px;
        padding-bottom: 10px;
    }
</style>
