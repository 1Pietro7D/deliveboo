@extends('layouts.app')



@section('content')

<div class="mx-5 ">
        @foreach ($groupedOrders as $groupedOrder)
            <h4>ORDINE:</h4>
            <h5>Indirizzo Ordine: {{ $groupedOrder['address_client'] }}</h5>
            <h6>Email Cliente: {{$groupedOrder['email_client']}}</h6>
            <h6>Prezzo Totale: {{$groupedOrder['total_price']}} Euro</h6>
                <div class="mb-4">Dettaglio ordine:
                    <div>
                        @foreach ($groupedOrder['dishes'] as $dish)
                            <div>{{ $dish['quantity'] }} {{$dish['name']}}</div>
                        @endforeach
                    </div>
                </div>
        @endforeach
</div>

@endsection
