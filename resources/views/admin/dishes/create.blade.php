@extends('layouts.app') <!--estendo layout.app-->


@section('content')
<h1 class="text-center">AGGIUNGI UN PIATTO</h1>
<div>


</div>
<form class="text-center py-5" action="{{ route('admin.dishes.store') }}" method="post" enctype="multipart/form-data">
    @csrf
    <div>
        <label for="name">Nome:</label>
        <input required maxlength="255" type="text" name="name" value="{{ old('name', '') }}">
        @error('name')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    <div>
        <label for="description">Descrizione:</label>
        <input required maxlength="255" type="text" name="description" value="{{ old('description', '') }}">
        @error('description')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    <div>
        <label for="price">Prezzo:</label>
        <input required maxlength="10" type="number" step="0.1" name="price" value="{{ old('price', '') }}">
        @error('price')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    <div>
        <label for="ingredients">Ingredienti:</label>
        <input required maxlength="255" type="text" name="ingredients" value="{{ old('ingredients', '') }}">
        @error('ingredients')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    <div>
        <label for="visible">Visibile:</label>
        <input  type="checkbox" name="visible" value="{{ old('visible', '') }}">
        @error('visible')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>


    <div>
        <label for="image">Img:</label>
        <input type="file" name="image">
    </div>
    <input type="submit" class="btn btn-success" value="Crea">
</form>



@endsection
