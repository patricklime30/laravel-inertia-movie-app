<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MovieController extends Controller
{
    public function index()
    {
        $movies = Movie::all();
 
        //redirect using inertia and use flash
        return inertia('Dashboard', [
                'movies' => $movies, 
                'flash' => [
                        'success' => 'Welcome, '. Auth::user()->name
                    ]
            ]);
    }

    public function create()
    {
        return inertia('Movies/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'genre' => 'nullable|string|max:100',
            'year' => 'nullable|integer|min:1900|max:' . date('Y'),
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);
    
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('movies', 'public');
        }
    
        $validated['user_id'] = Auth::id();
    
        //choose "use App\Models\Movie"
        Movie::create($validated);
    
        return redirect()->route('dashboard')->with('success', 'Movie created successfully!');
    }
}
