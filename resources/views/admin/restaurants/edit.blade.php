@extends('layouts.app')

@section('content')

{{-- FORM UPDATE RESTAURANT --}}
<h1 class="text-center pb-5">MODIFICA IL TUO RISTORANTE</h1>
<form class="text-center py-5" action="{{ route('admin.restaurants.update', $restaurant->slug) }}" method="post" enctype="multipart/form-data">
    @csrf
    @method('PATCH')
     {{-- NAME --}}
    <div>
        <label for="name">Nome:</label>
        <input required maxlength="255" type="text" name="name" value="{{ old('name', $restaurant->name) }}">
        @error('name')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    {{-- P.IVA --}}
    <div>
        <label for="p.iva">P.iva:</label>
        <input required pattern="[0-9]{11}" type="text" name="piva" value="{{ old('piva', $restaurant->piva) }}">
        @error('piva')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    {{-- ADDRESS --}}
    <div>
        <label for="address">Indirizzo:</label>
        <input required maxlength="255" type="text" name="address" value="{{ old('address', $restaurant->address) }}">
        @error('address')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    {{-- TIME SLOTS --}}
    <div>
        {{-- OPEN LUNCH --}}
        <span>Pranzo  </span>
        <label for="lunch_time_slot_open">Apertura:</label>
        <input required type="time" name="lunch_time_slot_open" value="{{ old('lunch_time_slot_open', $restaurant->lunch_time_slot_open) }}">
        @error('lunch_time_slot_open')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
        {{-- CLOSE LUNCH --}}
        <label for="lunch_time_slot_close">Chiusura:</label>
        <input required type="time" name="lunch_time_slot_close" value="{{ old('lunch_time_slot_close', $restaurant->lunch_time_slot_close) }}">
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
        <input required type="time" name="dinner_time_slot_open" value="{{ old('dinner_time_slot_open', $restaurant->dinner_time_slot_open) }}">
        @error('dinner_time_slot_open')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
        {{-- CLOSE DINNER --}}
        <label for="dinner_time_slot_close">Chiusura:</label>
        <input required type="time" name="dinner_time_slot_close" value="{{ old('dinner_time_slot_close', $restaurant->dinner_time_slot_close) }}">
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
    {{-- TYPOLOGIES --}}
    @if ($errors->any())
    <label for="typology_id">Tipologia:</label>
    <select name="typologies[]" id="typology_id" multiple>
    @foreach ($typologies as $typology )
        <option {{ in_array($typology->id, old('typology', [])) ? 'selected' : '' }}
        value="{{$typology->id}}">{{$typology->name}}</option>
    @endforeach
    </select>

   @else  {{-- NO ERROR --}}
    <label for="typology_id">Tipologia:</label>
    <select name="typologies[]" id="typology_id" multiple>
    @foreach ($typologies as $typology )
        <option {{ $restaurant->typologies->contains($typology) ? 'selected' : '' }}
        value="{{$typology->id}}">{{$typology->name}}</option>
    @endforeach
    </select>

    @endif
    {{-- SUBMIT --}}
    <div>

        <input type="submit" class="btn btn-success text-center px-5" value="Aggiorna">
    </div>

</form>


@endsection

<style>

label {
        width: 60px;
        padding-bottom: 10px;
    }
</style>
