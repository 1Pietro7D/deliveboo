@extends('layouts.app') <!--estendo layout.app-->


@section('content')

{{-- CONTROLLER CREATE --}}
<?php $val = false ?>
@foreach ($restaurants as $item)
@if ($item->user_id == $user->id)
    <?php $val = true ?>
@endif
@endforeach

{{-- CREATE --}}
@if (!$val)
<h1 class="text-center pb-5">AGGIUNGI IL TUO RISTORANTE !</h1>
<form  class="text-center" action="{{ route('admin.restaurants.store') }}" method="post" enctype="multipart/form-data">
    @csrf

    {{-- NAME --}}
    <div>
        <label for="name">Nome:</label>
        <input required maxlength="255" type="text" name="name" value="{{ old('name', '') }}">
        @error('name')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    {{-- P.IVA --}}
    <div>
        <label for="p.iva">P.iva:</label>
        <input required  pattern="[0-9]{11}" type="text" name="piva" value="{{ old('piva', '') }}">
        @error('piva')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    {{-- ADDRESS --}}
    <div>
        <label for="address">Indirizzo:</label>
        <input required maxlength="255" type="text" name="address" value="{{ old('address', '') }}">
        @error('address')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    {{-- TIME SLOTS --}}
    <div>
        {{-- OPEN LUNCH --}}
        <span>Pranzo </span>
        <label for="lunch_time_slot_open">Apertura:</label>
        <input required type="time" name="lunch_time_slot_open" value="{{ old('lunch_time_slot_open', '') }}">
        @error('lunch_time_slot_open')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
        {{-- CLOSE LUNCH --}}
        <label for="lunch_time_slot_close">Chiusura:</label>
        <input required type="time" name="lunch_time_slot_close" value="{{ old('lunch_time_slot_close', '') }}">
        @error('lunch_time_slot_close')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    <div>
        {{-- OPEN DINNER --}}
        <span>Cena </span>
        <label for="dinner_time_slot_open">Apertura:</label>
        <input required type="time" name="dinner_time_slot_open" value="{{ old('dinner_time_slot_open', '') }}">
        @error('dinner_time_slot_open')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
        {{-- CLOSE DINNER --}}
        <label for="dinner_time_slot_close">Chiusura:</label>
            <input required type="time" name="dinner_time_slot_close" value="{{ old('dinner_time_slot_close', '') }}">
            @error('dinner_time_slot_close')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    {{-- IMAGE --}}
    <div>
        <label for="image">Img:</label>
        <input type="file" name="image">
    </div>

    {{-- TYOPOLOGIES --}}
    <label for="typology_id">Tipologia:</label>
        <select name="typologies[]" id="typology_id" multiple>
            @foreach ($typologies as $typology )
                <option   {{ in_array($typology->id, old('typology', [])) ? 'selected' : '' }}
                value="{{$typology->id}}">{{$typology->name}}
                </option>
            @endforeach
    </select>

    {{-- SUBMIT --}}
    <div>
        <input type="submit" class="btn btn-success text-center px-5" value="Crea">
    </div>

</form>

 @else

@foreach ($restaurants as $item)

@if ($item->user_id == $user->id)


<div class="text-center">
    <h3>Nome Ristorante:  {{$item->name}}</h3>
    <div>
        Tipologia:
        @foreach ($item->typologies as $typology)
            {{$typology->name}}
        @endforeach
    </div>


</div>


<div class="w-100 text-center">
    <img class="w-50" src="{{asset('storage/'.$item->img)}}" alt="img">
</div>


    {{-- DELETE --}}

    <div class="d-flex button-restaurant">

        <form class="mt-3" method="POST" action="{{ route('admin.restaurants.destroy', $item->slug) }}">
            @csrf
            @method('DELETE')
            <input class="btn btn-danger mb-3"onclick="return confirm('Sei sicuro di voler eliminare il ristorante?')" type="submit" value="Elimina">
        </form>

        {{-- EDIT  --}}
        <a class="btn btn-success my-3 mx-3" href="{{ route('admin.restaurants.edit', $item->slug) }}">Modifica Ristorante</a>


        {{-- ADD DISH--}}
        <a class="btn btn-info my-3 mx-3" href="{{ route('admin.dishes.create') }}">Aggiungi Piatto</a>

        {{-- VIEW MENU'--}}
        <a class="btn btn-info my-3 mx-3" href="{{ route('admin.dishes.index') }}">Visualizza Menù</a>

        {{-- VIEW ORDERS --}}
        <a class="btn btn-info my-3 mx-3" href="{{ route('admin.orders.index') }}">Visualizza Ordini</a>

    </div>



@endif



@endforeach
@endif

@endsection


<style>

    label {
        width: 60px;
        padding-bottom: 10px;
    }

    .button-restaurant{
        display: flex;
        justify-content: center;
        padding-top: 30px;
    }

</style>
