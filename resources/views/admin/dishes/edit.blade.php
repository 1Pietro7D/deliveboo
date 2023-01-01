@extends('layouts.app') <!--estendo layout.app-->


@section('content')
<form class="text-center" action="{{ route('admin.dishes.update', $dish) }}" method="post" enctype="multipart/form-data">
    @csrf
    @method('PATCH')
    <div>
        <label for="name">Nome:</label>
        <input required maxlength="255" type="text" name="name" value="{{ old('name', $dish->name) }}">
        @error('name')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    <div>
        <label for="description">Descrizione:</label>
        <input required maxlength="255" type="text" name="description" value="{{ old('description', $dish->description) }}">
        @error('description')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>
    <div>
        <label for="price">Price:</label>
        <input required maxlength="10" type="number" step="0.1" name="price" value="{{ old('price', $dish->price) }}">
        @error('price')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    <div>
        <label for="ingredients">Ingredienti:</label>
        <input required maxlength="255" type="text" name="ingredients" value="{{ old('ingredients', $dish->ingredients) }}">
        @error('ingredients')
            <div class="my-2 bg-danger text-white">
                {{ $message }}
            </div>
        @enderror
    </div>

    <div>
        <label for="visible">Visibile:</label>
        <input  type="checkbox" name="visible" value="{{ old('visible', $dish->visible) }}">
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
    <input type="submit" value="Crea">
</form>



@endsection
