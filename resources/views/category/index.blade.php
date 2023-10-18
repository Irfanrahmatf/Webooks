@extends('_layouts.app')

@section('title', 'Bookstore')

@section('content')

  <h1>All Categories</h1> <!-- Tambahkan judul untuk halaman -->

  <ul class="row sm mt-3">
    @forelse ($categories as $category)
      <li class="col"><a href="{{ route('category.list', $category->slug) }}">{!! randomBadge($category->name) !!}</a></li>
    @empty
      <li class="col">Empty</li>
    @endforelse
  </ul>

@endsection
