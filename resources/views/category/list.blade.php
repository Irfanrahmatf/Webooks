@extends('_layouts.app')

@section('title', 'Bookstore')

@section('content')

  <h1>Books in {{ $category->name }}</h1> <!-- Tambahkan judul untuk halaman -->

  <livewire:book.group category="{{ $category->id }}" categoryName="{{ $category->name }}" />

@endsection
